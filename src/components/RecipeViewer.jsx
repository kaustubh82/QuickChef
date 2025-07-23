import React, { useState, useEffect, useCallback } from 'react';
import { Search, Heart, Clock, Users } from 'lucide-react';
import recipeAPI from '../api/recipeAPI';
import ImageWithFallback from './ImageWithFallback';

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

function RecipeViewer({ groceryItems, favoriteRecipes, onToggleFavorite }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');



  const showAllRecipes = async () => {
    setLoading(true);
    setError(null);
    
    try {
      console.log('Getting all recipes...');
      const result = await recipeAPI.getAllRecipes({ limit: 10 });
      console.log('All recipes result:', result);
      setRecipes(result.recipes);
    } catch (err) {
      console.error('Error getting all recipes:', err);
      setError("Failed to load recipes.");
    }
    
    setLoading(false);
  };

  // Debounced search function for real-time name search
  const debouncedSearch = useCallback(
    debounce(async (query) => {
      if (query.trim().length === 0) {
        setRecipes([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        console.log('Searching recipes by name:', query);
        const result = await recipeAPI.searchByTitle(query);
        console.log('Name search result:', result);
        setRecipes(result.recipes);
        
        if (result.recipes.length === 0) {
          setError(`No recipes found matching "${query}". Try a different search term.`);
        }
      } catch (err) {
        console.error('Name search error:', err);
        setError("Failed to search recipes. Please try again.");
      }

      setLoading(false);
    }, 500),
    []
  );

  // Effect for real-time search
  useEffect(() => {
    if (searchQuery.length > 0) {
      debouncedSearch(searchQuery);
    } else {
      setRecipes([]);
      setError(null);
    }
  }, [searchQuery, debouncedSearch]);

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const isFavorite = (recipeId) => {
    return favoriteRecipes.some(fav => fav.id === recipeId);
  };

  const handleToggleFavorite = (recipe) => {
    onToggleFavorite(recipe);
  };

  return (
    <div className="recipe-viewer">
      <div className="recipe-header">
        <h2>Find Recipes</h2>
        <p>Search for recipes by name and discover delicious meals!</p>
      </div>

      {/* Real-time Search Bar */}
      <div className="name-search-section">
        <div className="search-input-wrapper">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search recipes by name (e.g., 'pasta', 'chicken', 'salad')..."
            value={searchQuery}
            onChange={handleSearchQueryChange}
            className="recipe-search-input"
          />
          {searchQuery && (
            <button
              className="clear-search"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
        {searchQuery && (
          <p className="search-status">
            {loading ? 'Searching...' : `Search results for "${searchQuery}"`}
          </p>
        )}
        {!searchQuery && (
          <div style={{textAlign: 'center', marginTop: '1rem'}}>
            <button 
              className="show-all-button"
              onClick={showAllRecipes}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Show All Recipes'}
            </button>
          </div>
        )}
      </div>



      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <div className="recipes-container">
        {recipes.length > 0 && (
          <div className="recipes-grid">
            {recipes.map(recipe => (
              <div key={recipe.id} className="recipe-card">
                <div className="recipe-image">
                                                <ImageWithFallback 
                                src={recipe.image}
                                alt={recipe.title}
                              />
                  <button
                    className={`favorite-button ${isFavorite(recipe.id) ? 'favorited' : ''}`}
                    onClick={() => handleToggleFavorite(recipe)}
                    title={isFavorite(recipe.id) ? 'Click to remove from favorites' : 'Click to add to favorites'}
                    aria-label={isFavorite(recipe.id) ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    <Heart 
                      size={20} 
                      fill={isFavorite(recipe.id) ? 'white' : 'transparent'} 
                      stroke={isFavorite(recipe.id) ? 'white' : '#333'}
                    />
                  </button>
                </div>
                
                <div className="recipe-content">
                  <h3 className="recipe-title">{recipe.title}</h3>
                  
                  <div className="recipe-meta">
                    <div className="meta-item">
                      <Clock size={16} />
                      <span>{recipe.readyInMinutes || 30} min</span>
                    </div>
                    <div className="meta-item">
                      <Users size={16} />
                      <span>{recipe.servings || 4} servings</span>
                    </div>
                    {recipe.rating && (
                      <div className="meta-item">
                        <span className="rating">⭐ {recipe.rating}</span>
                      </div>
                    )}
                    {recipe.difficulty && (
                      <div className="meta-item">
                        <span className="difficulty">{recipe.difficulty}</span>
                      </div>
                    )}
                  </div>

                  {recipe.summary && (
                    <p className="recipe-summary">
                      {recipe.summary.replace(/<[^>]*>/g, '').substring(0, 100)}...
                    </p>
                  )}

                  {recipe.usedIngredients && (
                    <div className="used-ingredients">
                      <h4>Ingredients you have:</h4>
                      <ul>
                        {recipe.usedIngredients.slice(0, 3).map((ingredient, index) => (
                          <li key={index}>{typeof ingredient === 'string' ? ingredient : ingredient.name}</li>
                        ))}
                        {recipe.usedIngredients.length > 3 && (
                          <li>+ {recipe.usedIngredients.length - 3} more</li>
                        )}
                      </ul>
                    </div>
                  )}

                  {recipe.instructions && (
                    <div className="recipe-instructions">
                      <h4>Instructions:</h4>
                      <ol>
                        {recipe.instructions.slice(0, 3).map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                        {recipe.instructions.length > 3 && (
                          <li>+ {recipe.instructions.length - 3} more steps</li>
                        )}
                      </ol>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeViewer; 