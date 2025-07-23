import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Heart } from 'lucide-react';
import GroceryList from './GroceryList';
import RecipeViewer from './RecipeViewer';
import Favorites from './Favorites';
import { useAuth } from '../context/AuthContext';

function MainApp() {
  const [activeTab, setActiveTab] = useState('grocery');
  const [groceryItems, setGroceryItems] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const { user } = useAuth();

  // Load user-specific data from localStorage on component mount
  useEffect(() => {
    if (user) {
      const userGroceryKey = `groceryItems_${user.id}`;
      const userFavoritesKey = `favoriteRecipes_${user.id}`;
      
      const savedItems = localStorage.getItem(userGroceryKey);
      const savedFavorites = localStorage.getItem(userFavoritesKey);
      
      if (savedItems) {
        setGroceryItems(JSON.parse(savedItems));
      }
      if (savedFavorites) {
        setFavoriteRecipes(JSON.parse(savedFavorites));
      }
    }
  }, [user]);

  // Save user-specific grocery items to localStorage whenever they change
  useEffect(() => {
    if (user && groceryItems.length >= 0) {
      const userGroceryKey = `groceryItems_${user.id}`;
      localStorage.setItem(userGroceryKey, JSON.stringify(groceryItems));
    }
  }, [groceryItems, user]);

  // Save user-specific favorite recipes to localStorage whenever they change
  useEffect(() => {
    if (user && favoriteRecipes.length >= 0) {
      const userFavoritesKey = `favoriteRecipes_${user.id}`;
      localStorage.setItem(userFavoritesKey, JSON.stringify(favoriteRecipes));
    }
  }, [favoriteRecipes, user]);

  const addGroceryItem = (item) => {
    const newItem = {
      id: Date.now(),
      name: item.name,
      quantity: item.quantity,
      purchased: false,
      category: item.category || 'Other'
    };
    setGroceryItems([...groceryItems, newItem]);
  };

  const updateGroceryItem = (id, updatedItem) => {
    setGroceryItems(groceryItems.map(item => 
      item.id === id ? { ...item, ...updatedItem } : item
    ));
  };

  const deleteGroceryItem = (id) => {
    setGroceryItems(groceryItems.filter(item => item.id !== id));
  };

  const toggleFavoriteRecipe = (recipe) => {
    const isAlreadyFavorite = favoriteRecipes.some(fav => fav.id === recipe.id);
    if (isAlreadyFavorite) {
      setFavoriteRecipes(favoriteRecipes.filter(fav => fav.id !== recipe.id));
    } else {
      setFavoriteRecipes([...favoriteRecipes, recipe]);
    }
  };

  const purchasedCount = groceryItems.filter(item => item.purchased).length;
  const totalItems = groceryItems.length;

  return (
    <div className="main-app">
      <div className="app-content">
        <div className="content-header">
          <h1>Welcome back, {user?.name}!</h1>
          <div className="progress-bar">
            <div className="progress-info">
              <span>{purchasedCount}/{totalItems} items purchased</span>
              <div className="progress-visual">
                <div 
                  className="progress-fill" 
                  style={{ 
                    width: totalItems > 0 ? `${(purchasedCount / totalItems) * 100}%` : '0%' 
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <nav className="tab-navigation">
          <button 
            className={`tab ${activeTab === 'grocery' ? 'active' : ''}`}
            onClick={() => setActiveTab('grocery')}
          >
            <ShoppingCart size={20} />
            Grocery List
          </button>
          <button 
            className={`tab ${activeTab === 'recipes' ? 'active' : ''}`}
            onClick={() => setActiveTab('recipes')}
          >
            <Search size={20} />
            Find Recipes
          </button>
          <button 
            className={`tab ${activeTab === 'favorites' ? 'active' : ''}`}
            onClick={() => setActiveTab('favorites')}
          >
            <Heart size={20} />
            Favorites ({favoriteRecipes.length})
          </button>
        </nav>

        <main className="main-content">
          {activeTab === 'grocery' && (
            <GroceryList 
              items={groceryItems}
              onAddItem={addGroceryItem}
              onUpdateItem={updateGroceryItem}
              onDeleteItem={deleteGroceryItem}
            />
          )}
          {activeTab === 'recipes' && (
            <RecipeViewer 
              groceryItems={groceryItems}
              favoriteRecipes={favoriteRecipes}
              onToggleFavorite={toggleFavoriteRecipe}
            />
          )}
          {activeTab === 'favorites' && (
            <Favorites 
              favoriteRecipes={favoriteRecipes}
              onToggleFavorite={toggleFavoriteRecipe}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default MainApp; 