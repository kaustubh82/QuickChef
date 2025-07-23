import React from 'react';
import { Heart, Clock, Users, Trash2 } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

function Favorites({ favoriteRecipes, onToggleFavorite }) {
  const removeFavorite = (recipe) => {
    onToggleFavorite(recipe);
  };

  return (
    <div className="favorites">
      <div className="favorites-header">
        <h2>Your Favorite Recipes</h2>
        <p>Quick access to all your saved recipes</p>
      </div>

      {favoriteRecipes.length === 0 ? (
        <div className="empty-favorites">
          <Heart size={48} className="empty-icon" />
          <h3>No favorites yet</h3>
          <p>Start adding recipes to your favorites from the recipe search!</p>
        </div>
      ) : (
        <div className="favorites-grid">
          {favoriteRecipes.map(recipe => (
            <div key={recipe.id} className="favorite-card">
              <div className="recipe-image">
                            <ImageWithFallback 
              src={recipe.image}
              alt={recipe.title}
            />
                <button
                  className="remove-favorite-button"
                  onClick={() => removeFavorite(recipe)}
                  title="Remove from favorites"
                >
                  <Trash2 size={20} />
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
                </div>

                {recipe.summary && (
                  <p className="recipe-summary">
                    {recipe.summary.replace(/<[^>]*>/g, '').substring(0, 120)}...
                  </p>
                )}

                {recipe.usedIngredients && (
                  <div className="used-ingredients">
                    <h4>Key Ingredients:</h4>
                    <div className="ingredients-list">
                      {recipe.usedIngredients.slice(0, 4).map((ingredient, index) => (
                        <span key={index} className="ingredient-tag">
                          {typeof ingredient === 'string' ? ingredient : ingredient.name}
                        </span>
                      ))}
                      {recipe.usedIngredients.length > 4 && (
                        <span className="ingredient-tag more">
                          +{recipe.usedIngredients.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {recipe.instructions && (
                  <div className="recipe-instructions">
                    <h4>Quick Steps:</h4>
                    <ol>
                      {recipe.instructions.slice(0, 2).map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                      {recipe.instructions.length > 2 && (
                        <li className="more-steps">
                          + {recipe.instructions.length - 2} more steps
                        </li>
                      )}
                    </ol>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {favoriteRecipes.length > 0 && (
        <div className="favorites-summary">
          <div className="summary-card">
            <h3>Your Collection</h3>
            <p>You have <strong>{favoriteRecipes.length}</strong> favorite recipes</p>
            <div className="recipe-stats">
              <div className="stat">
                <span className="stat-label">Average Cook Time:</span>
                <span className="stat-value">
                  {Math.round(
                    favoriteRecipes.reduce((sum, recipe) => 
                      sum + (recipe.readyInMinutes || 30), 0
                    ) / favoriteRecipes.length
                  )} min
                </span>
              </div>
              <div className="stat">
                <span className="stat-label">Total Servings:</span>
                <span className="stat-value">
                  {favoriteRecipes.reduce((sum, recipe) => 
                    sum + (recipe.servings || 4), 0
                  )} servings
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Favorites; 