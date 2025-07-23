import React, { useState, useEffect, useCallback } from 'react';
import { Plus, Edit2, Trash2, Check, X, Search } from 'lucide-react';
import groceryAPI from '../api/groceryAPI';

const CATEGORIES = [
  'Fruits & Vegetables',
  'Dairy & Eggs', 
  'Meat & Seafood',
  'Bakery',
  'Pantry & Canned',
  'Snacks',
  'Beverages',
  'Frozen',
  'Other'
];

// Utility function for debouncing search input
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function GroceryList({ items, onAddItem, onUpdateItem, onDeleteItem }) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [newItem, setNewItem] = useState({
    name: '',
    quantity: '',
    category: 'Other'
  });
  
  // Search functionality states
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [popularItems, setPopularItems] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  // Load popular items and suggestions on component mount
  useEffect(() => {
    const popular = groceryAPI.getPopularItems(12);
    setPopularItems(popular.items);
    
    const itemSuggestions = groceryAPI.getSuggestions(items, 8);
    setSuggestions(itemSuggestions.items);
  }, [items]);

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce(async (query) => {
      if (query.trim().length === 0) {
        setSearchResults([]);
        setShowSearchResults(false);
        return;
      }

      const results = groceryAPI.searchItems(query, { limit: 8 });
      setSearchResults(results.items);
      setShowSearchResults(true);
    }, 300),
    []
  );

  // Effect for real-time search
  useEffect(() => {
    debouncedSearch(searchQuery);
  }, [searchQuery, debouncedSearch]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle selecting an item from search results
  const handleSelectSearchItem = (item) => {
    setNewItem({
      name: item.name,
      quantity: item.commonUnit,
      category: item.category
    });
    setSearchQuery('');
    setShowSearchResults(false);
    setShowAddForm(true);
  };

  // Handle quick add popular item
  const handleQuickAdd = (item) => {
    const newGroceryItem = {
      name: item.name,
      quantity: item.commonUnit,
      category: item.category
    };
    onAddItem(newGroceryItem);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.name.trim()) {
      onAddItem(newItem);
      setNewItem({ name: '', quantity: '', category: 'Other' });
      setShowAddForm(false);
    }
  };

  const handleEditItem = (item) => {
    setEditingId(item.id);
    setNewItem({
      name: item.name,
      quantity: item.quantity,
      category: item.category
    });
  };

  const handleUpdateItem = (e) => {
    e.preventDefault();
    if (newItem.name.trim()) {
      onUpdateItem(editingId, newItem);
      setEditingId(null);
      setNewItem({ name: '', quantity: '', category: 'Other' });
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setNewItem({ name: '', quantity: '', category: 'Other' });
  };

  const togglePurchased = (id) => {
    const item = items.find(item => item.id === id);
    onUpdateItem(id, { purchased: !item.purchased });
  };

  const groupedItems = items.reduce((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item);
    return groups;
  }, {});

  return (
    <div className="grocery-list">
      <div className="list-header">
        <h2>Your Grocery List</h2>
        <button 
          className="add-button"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <Plus size={20} />
          Add Item
        </button>
      </div>

      {/* Search Section */}
      <div className="search-section">
        <div className="search-input-wrapper">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search for grocery items (e.g., milk, bread, apples)..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          {searchQuery && (
            <button
              className="clear-search"
              onClick={() => {
                setSearchQuery('');
                setShowSearchResults(false);
              }}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
        
        {/* Search Results */}
        {showSearchResults && searchResults.length > 0 && (
          <div className="search-results">
            <h4>Search Results</h4>
            <div className="search-results-grid">
              {searchResults.map(item => (
                <div 
                  key={item.id} 
                  className="search-result-item"
                  onClick={() => handleSelectSearchItem(item)}
                >
                  <span className="item-name">{item.name}</span>
                  <span className="item-category">{item.category}</span>
                  <span className="common-unit">{item.commonUnit}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Popular Items */}
        {!searchQuery && popularItems.length > 0 && (
          <div className="popular-items">
            <h4>Popular Items</h4>
            <div className="popular-items-grid">
              {popularItems.map(item => (
                <div key={item.id} className="popular-item">
                  <div className="item-info">
                    <span className="item-name">{item.name}</span>
                    <span className="item-unit">{item.commonUnit}</span>
                  </div>
                  <button
                    className="quick-add-btn"
                    onClick={() => handleQuickAdd(item)}
                    title="Quick add to list"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Suggestions */}
        {!searchQuery && suggestions.length > 0 && (
          <div className="suggestions">
            <h4>Suggested for You</h4>
            <div className="suggestions-grid">
              {suggestions.map(item => (
                <div key={item.id} className="suggestion-item">
                  <div className="item-info">
                    <span className="item-name">{item.name}</span>
                    <span className="item-unit">{item.commonUnit}</span>
                  </div>
                  <button
                    className="quick-add-btn"
                    onClick={() => handleQuickAdd(item)}
                    title="Quick add to list"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {(showAddForm || editingId) && (
        <form 
          className="item-form"
          onSubmit={editingId ? handleUpdateItem : handleAddItem}
        >
          <div className="form-row">
            <input
              type="text"
              placeholder="Item name"
              value={newItem.name}
              onChange={(e) => setNewItem({...newItem, name: e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="Quantity (e.g., 2kg, 3 pcs)"
              value={newItem.quantity}
              onChange={(e) => setNewItem({...newItem, quantity: e.target.value})}
            />
            <select
              value={newItem.category}
              onChange={(e) => setNewItem({...newItem, category: e.target.value})}
            >
              {CATEGORIES.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="form-actions">
            <button type="submit" className="save-button">
              <Check size={16} />
              {editingId ? 'Update' : 'Add'}
            </button>
            <button 
              type="button" 
              className="cancel-button"
              onClick={editingId ? handleCancelEdit : () => setShowAddForm(false)}
            >
              <X size={16} />
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="items-container">
        {Object.keys(groupedItems).length === 0 ? (
          <div className="empty-state">
            <p>Your grocery list is empty. Add some items to get started!</p>
          </div>
        ) : (
          Object.entries(groupedItems).map(([category, categoryItems]) => (
            <div key={category} className="category-group">
              <h3 className="category-title">{category}</h3>
              <div className="items-grid">
                {categoryItems.map(item => (
                  <div key={item.id} className={`item-card ${item.purchased ? 'purchased' : ''}`}>
                    <div className="item-content">
                      <div className="item-info">
                        <h4 className="item-name">{item.name}</h4>
                        {item.quantity && (
                          <p className="item-quantity">{item.quantity}</p>
                        )}
                      </div>
                      <div className="item-actions">
                        <button
                          className={`purchase-toggle ${item.purchased ? 'purchased' : ''}`}
                          onClick={() => togglePurchased(item.id)}
                          title={item.purchased ? 'Mark as needed' : 'Mark as purchased'}
                        >
                          <Check size={16} />
                        </button>
                        <button
                          className="edit-button"
                          onClick={() => handleEditItem(item)}
                          title="Edit item"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          className="delete-button"
                          onClick={() => onDeleteItem(item.id)}
                          title="Delete item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default GroceryList; 