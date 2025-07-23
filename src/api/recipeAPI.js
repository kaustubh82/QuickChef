// Comprehensive Recipe API - Frontend Only
// Simulates a real recipe API with extensive database and search functionality

const RECIPE_DATABASE = [
  {
    id: 1,
    title: "Classic Spaghetti Carbonara",
    image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    readyInMinutes: 20,
    servings: 4,
    cuisine: "Italian",
    dietaryRestrictions: [],
    difficulty: "Easy",
    rating: 4.8,
    popularity: 95,
    ingredients: [
      { name: "pasta", amount: "400g", category: "pantry" },
      { name: "eggs", amount: "4 large", category: "dairy" },
      { name: "bacon", amount: "200g", category: "meat" },
      { name: "cheese", amount: "100g parmesan", category: "dairy" },
      { name: "garlic", amount: "3 cloves", category: "vegetables" },
      { name: "olive oil", amount: "2 tbsp", category: "pantry" }
    ],
    summary: "A classic Italian pasta dish made with eggs, cheese, bacon, and black pepper. Creamy without using cream!",
    instructions: [
      "Bring a large pot of salted water to boil and cook pasta according to package directions",
      "While pasta cooks, heat olive oil in a large pan over medium heat",
      "Add diced bacon and cook until crispy, about 5-7 minutes",
      "Add minced garlic and cook for 1 minute more",
      "In a bowl, whisk together eggs, grated parmesan, salt and pepper",
      "Drain pasta, reserving 1 cup pasta water",
      "Add hot pasta to the pan with bacon",
      "Remove from heat and quickly stir in egg mixture, adding pasta water as needed",
      "Serve immediately with extra parmesan and black pepper"
    ],
    tags: ["pasta", "italian", "quick", "comfort food"]
  },
  {
    id: 2,
    title: "Thai Green Curry with Chicken",
    image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    readyInMinutes: 35,
    servings: 4,
    cuisine: "Thai",
    dietaryRestrictions: ["gluten-free"],
    difficulty: "Medium",
    rating: 4.7,
    popularity: 88,
    ingredients: [
      { name: "chicken", amount: "500g breast", category: "meat" },
      { name: "coconut milk", amount: "400ml can", category: "pantry" },
      { name: "green curry paste", amount: "3 tbsp", category: "pantry" },
      { name: "vegetables", amount: "200g mixed", category: "vegetables" },
      { name: "basil", amount: "fresh leaves", category: "vegetables" },
      { name: "rice", amount: "for serving", category: "pantry" }
    ],
    summary: "Aromatic Thai curry with tender chicken, vegetables, and fragrant herbs in creamy coconut milk.",
    instructions: [
      "Heat oil in a large pan over medium-high heat",
      "Add green curry paste and fry for 2 minutes until fragrant",
      "Add thick part of coconut milk and stir well",
      "Add chicken pieces and cook until almost done",
      "Add vegetables and remaining coconut milk",
      "Simmer for 10-15 minutes until chicken is cooked through",
      "Stir in fresh basil leaves",
      "Serve hot over steamed rice"
    ],
    tags: ["thai", "curry", "spicy", "gluten-free", "coconut"]
  },
  {
    id: 3,
    title: "Mediterranean Quinoa Salad",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    readyInMinutes: 25,
    servings: 6,
    cuisine: "Mediterranean",
    dietaryRestrictions: ["vegetarian", "vegan", "gluten-free"],
    difficulty: "Easy",
    rating: 4.5,
    popularity: 82,
    ingredients: [
      { name: "quinoa", amount: "1 cup", category: "pantry" },
      { name: "tomatoes", amount: "2 cups cherry", category: "vegetables" },
      { name: "cucumber", amount: "1 large", category: "vegetables" },
      { name: "olives", amount: "1/2 cup", category: "pantry" },
      { name: "feta cheese", amount: "200g", category: "dairy" },
      { name: "olive oil", amount: "1/4 cup", category: "pantry" },
      { name: "lemon", amount: "2 lemons", category: "vegetables" }
    ],
    summary: "Fresh and healthy Mediterranean salad with quinoa, vegetables, olives, and a tangy lemon dressing.",
    instructions: [
      "Rinse quinoa and cook according to package directions",
      "Let quinoa cool completely",
      "Dice tomatoes, cucumber, and red onion",
      "Whisk together olive oil, lemon juice, salt, and pepper for dressing",
      "Combine cooled quinoa with all vegetables",
      "Add crumbled feta cheese and olives",
      "Toss with dressing and let sit for 15 minutes",
      "Garnish with fresh herbs and serve"
    ],
    tags: ["healthy", "vegetarian", "mediterranean", "salad", "quinoa"]
  },
  {
    id: 4,
    title: "Beef Tacos with Avocado Salsa",
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    readyInMinutes: 30,
    servings: 4,
    cuisine: "Mexican",
    dietaryRestrictions: ["gluten-free"],
    difficulty: "Medium",
    rating: 4.9,
    popularity: 92,
    ingredients: [
      { name: "ground beef", amount: "500g", category: "meat" },
      { name: "tortillas", amount: "8 corn", category: "pantry" },
      { name: "avocado", amount: "2 ripe", category: "vegetables" },
      { name: "tomatoes", amount: "2 medium", category: "vegetables" },
      { name: "onion", amount: "1 red", category: "vegetables" },
      { name: "lime", amount: "2 limes", category: "vegetables" },
      { name: "cilantro", amount: "fresh bunch", category: "vegetables" }
    ],
    summary: "Flavorful beef tacos topped with fresh avocado salsa and traditional Mexican seasonings.",
    instructions: [
      "Heat oil in a large skillet over medium-high heat",
      "Add ground beef and cook, breaking it up, until browned",
      "Season with cumin, chili powder, salt, and pepper",
      "For salsa: dice avocado, tomatoes, onion, and cilantro",
      "Mix salsa ingredients with lime juice and salt",
      "Warm tortillas in a dry pan or microwave",
      "Fill tortillas with beef mixture",
      "Top with avocado salsa and serve with lime wedges"
    ],
    tags: ["mexican", "tacos", "beef", "avocado", "quick"]
  },
  {
    id: 5,
    title: "Chicken Teriyaki Stir Fry",
    image: "https://images.pexels.com/photos/2313682/pexels-photo-2313682.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    readyInMinutes: 25,
    servings: 4,
    cuisine: "Asian",
    dietaryRestrictions: [],
    difficulty: "Easy",
    rating: 4.6,
    popularity: 87,
    ingredients: [
      { name: "chicken", amount: "600g thigh", category: "meat" },
      { name: "vegetables", amount: "300g mixed", category: "vegetables" },
      { name: "soy sauce", amount: "1/4 cup", category: "pantry" },
      { name: "honey", amount: "3 tbsp", category: "pantry" },
      { name: "garlic", amount: "4 cloves", category: "vegetables" },
      { name: "ginger", amount: "2 inch piece", category: "vegetables" },
      { name: "rice", amount: "for serving", category: "pantry" }
    ],
    summary: "Quick and delicious stir fry with tender chicken and crisp vegetables in a sweet teriyaki glaze.",
    instructions: [
      "Cut chicken into bite-sized pieces",
      "Mix soy sauce, honey, minced garlic, and ginger for teriyaki sauce",
      "Heat oil in a wok or large pan over high heat",
      "Add chicken and stir-fry until golden brown",
      "Add mixed vegetables and stir-fry for 3-4 minutes",
      "Pour teriyaki sauce over chicken and vegetables",
      "Cook for 2 minutes until sauce thickens",
      "Serve immediately over steamed rice"
    ],
    tags: ["asian", "stir-fry", "chicken", "quick", "healthy"]
  },
  {
    id: 6,
    title: "Margherita Pizza",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    readyInMinutes: 45,
    servings: 4,
    cuisine: "Italian",
    dietaryRestrictions: ["vegetarian"],
    difficulty: "Medium",
    rating: 4.8,
    popularity: 90,
    ingredients: [
      { name: "pizza dough", amount: "1 ball", category: "pantry" },
      { name: "tomatoes", amount: "400g canned", category: "pantry" },
      { name: "mozzarella", amount: "250g fresh", category: "dairy" },
      { name: "basil", amount: "fresh leaves", category: "vegetables" },
      { name: "olive oil", amount: "3 tbsp", category: "pantry" },
      { name: "garlic", amount: "2 cloves", category: "vegetables" }
    ],
    summary: "Classic Italian pizza with fresh tomatoes, mozzarella, and basil on a crispy homemade crust.",
    instructions: [
      "Preheat oven to 250°C (480°F)",
      "Make sauce by crushing canned tomatoes with garlic, salt, and herbs",
      "Roll out pizza dough on a floured surface",
      "Transfer to a pizza stone or baking sheet",
      "Spread thin layer of tomato sauce",
      "Add torn mozzarella pieces evenly",
      "Drizzle with olive oil",
      "Bake for 12-15 minutes until crust is golden and cheese is bubbly",
      "Top with fresh basil leaves before serving"
    ],
    tags: ["italian", "pizza", "vegetarian", "basil", "mozzarella"]
  },
  {
    id: 7,
    title: "Salmon with Roasted Vegetables",
    image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    readyInMinutes: 35,
    servings: 4,
    cuisine: "American",
    dietaryRestrictions: ["gluten-free", "keto"],
    difficulty: "Easy",
    rating: 4.7,
    popularity: 85,
    ingredients: [
      { name: "salmon", amount: "4 fillets", category: "meat" },
      { name: "broccoli", amount: "2 heads", category: "vegetables" },
      { name: "carrots", amount: "4 large", category: "vegetables" },
      { name: "bell peppers", amount: "2 mixed", category: "vegetables" },
      { name: "olive oil", amount: "1/4 cup", category: "pantry" },
      { name: "lemon", amount: "2 lemons", category: "vegetables" }
    ],
    summary: "Healthy baked salmon with colorful roasted vegetables, perfect for a nutritious dinner.",
    instructions: [
      "Preheat oven to 200°C (400°F)",
      "Cut vegetables into even pieces",
      "Toss vegetables with olive oil, salt, and pepper",
      "Spread vegetables on a large baking sheet",
      "Roast for 15 minutes",
      "Season salmon fillets with salt, pepper, and lemon juice",
      "Add salmon to baking sheet with vegetables",
      "Roast for 12-15 minutes until salmon flakes easily",
      "Serve with lemon wedges"
    ],
    tags: ["healthy", "salmon", "roasted", "vegetables", "gluten-free"]
  },
  {
    id: 8,
    title: "Vegetarian Chili",
    image: "https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    readyInMinutes: 40,
    servings: 6,
    cuisine: "American",
    dietaryRestrictions: ["vegetarian", "vegan", "gluten-free"],
    difficulty: "Easy",
    rating: 4.4,
    popularity: 78,
    ingredients: [
      { name: "beans", amount: "2 cans mixed", category: "pantry" },
      { name: "tomatoes", amount: "400g canned", category: "pantry" },
      { name: "onion", amount: "1 large", category: "vegetables" },
      { name: "bell peppers", amount: "2 mixed", category: "vegetables" },
      { name: "corn", amount: "1 cup", category: "vegetables" },
      { name: "chili powder", amount: "2 tbsp", category: "pantry" }
    ],
    summary: "Hearty vegetarian chili packed with beans, vegetables, and warming spices. Perfect comfort food.",
    instructions: [
      "Heat oil in a large pot over medium heat",
      "Add diced onion and bell peppers, cook until soft",
      "Add garlic, chili powder, cumin, and paprika",
      "Cook spices for 1 minute until fragrant",
      "Add canned tomatoes, beans, and corn",
      "Bring to boil, then reduce heat and simmer",
      "Cook for 25-30 minutes, stirring occasionally",
      "Season with salt and pepper to taste",
      "Serve with toppings like cheese, sour cream, and cilantro"
    ],
    tags: ["vegetarian", "chili", "beans", "comfort food", "spicy"]
  },
  {
    id: 9,
    title: "Greek Lemon Chicken",
    image: "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    readyInMinutes: 60,
    servings: 6,
    cuisine: "Greek",
    dietaryRestrictions: ["gluten-free"],
    difficulty: "Easy",
    rating: 4.8,
    popularity: 89,
    ingredients: [
      { name: "chicken", amount: "1 whole or 8 thighs", category: "meat" },
      { name: "potatoes", amount: "6 medium", category: "vegetables" },
      { name: "lemon", amount: "3 lemons", category: "vegetables" },
      { name: "olive oil", amount: "1/2 cup", category: "pantry" },
      { name: "oregano", amount: "2 tbsp dried", category: "pantry" },
      { name: "garlic", amount: "6 cloves", category: "vegetables" }
    ],
    summary: "Traditional Greek chicken roasted with potatoes, lemon, and herbs. Simple but incredibly flavorful.",
    instructions: [
      "Preheat oven to 200°C (400°F)",
      "Cut potatoes into wedges and place in roasting pan",
      "Season chicken with salt, pepper, oregano, and minced garlic",
      "Place chicken over potatoes",
      "Whisk together lemon juice and olive oil",
      "Pour lemon mixture over chicken and potatoes",
      "Roast for 45-60 minutes until chicken is golden and cooked through",
      "Baste with pan juices halfway through cooking",
      "Serve with fresh lemon wedges"
    ],
    tags: ["greek", "chicken", "lemon", "potatoes", "roasted"]
  },
  {
    id: 10,
    title: "Mushroom Risotto",
    image: "https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    readyInMinutes: 45,
    servings: 4,
    cuisine: "Italian",
    dietaryRestrictions: ["vegetarian", "gluten-free"],
    difficulty: "Hard",
    rating: 4.9,
    popularity: 84,
    ingredients: [
      { name: "arborio rice", amount: "300g", category: "pantry" },
      { name: "mushrooms", amount: "400g mixed", category: "vegetables" },
      { name: "vegetable stock", amount: "1.2L", category: "pantry" },
      { name: "white wine", amount: "150ml", category: "pantry" },
      { name: "onion", amount: "1 small", category: "vegetables" },
      { name: "cheese", amount: "100g parmesan", category: "dairy" },
      { name: "butter", amount: "50g", category: "dairy" }
    ],
    summary: "Creamy Italian risotto with earthy mushrooms and parmesan cheese. Rich and satisfying comfort food.",
    instructions: [
      "Heat stock in a separate pan and keep warm",
      "Slice mushrooms and sauté until golden, set aside",
      "Heat butter in a heavy-based pan",
      "Add finely chopped onion and cook until soft",
      "Add rice and stir for 2 minutes until coated",
      "Add wine and stir until absorbed",
      "Add warm stock one ladle at a time, stirring constantly",
      "Continue until rice is creamy and al dente (about 25 minutes)",
      "Stir in cooked mushrooms and parmesan",
      "Serve immediately with extra cheese"
    ],
    tags: ["italian", "risotto", "mushrooms", "vegetarian", "creamy"]
  }
];

// Recipe API Class
class RecipeAPI {
  constructor() {
    this.recipes = RECIPE_DATABASE;
  }

  // Search recipes by ingredients
  async searchByIngredients(ingredientNames, options = {}) {
    const { 
      limit = 6, 
      cuisine = null, 
      dietaryRestrictions = [], 
      maxReadyTime = null,
      minRating = 0 
    } = options;

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));

    let filteredRecipes = this.recipes.filter(recipe => {
      // Check if recipe contains at least one of the search ingredients
      const hasMatchingIngredient = recipe.ingredients.some(recipeIngredient => 
        ingredientNames.some(searchIngredient => 
          recipeIngredient.name.toLowerCase().includes(searchIngredient.toLowerCase()) ||
          searchIngredient.toLowerCase().includes(recipeIngredient.name.toLowerCase())
        )
      );

      if (!hasMatchingIngredient) return false;

      // Apply filters
      if (cuisine && recipe.cuisine.toLowerCase() !== cuisine.toLowerCase()) return false;
      if (maxReadyTime && recipe.readyInMinutes > maxReadyTime) return false;
      if (recipe.rating < minRating) return false;
      
      // Check dietary restrictions
      if (dietaryRestrictions.length > 0) {
        const hasAllRestrictions = dietaryRestrictions.every(restriction =>
          recipe.dietaryRestrictions.includes(restriction)
        );
        if (!hasAllRestrictions) return false;
      }

      return true;
    });

    // Sort by relevance (number of matching ingredients) and popularity
    filteredRecipes = filteredRecipes.map(recipe => {
      const matchingIngredients = recipe.ingredients.filter(recipeIngredient => 
        ingredientNames.some(searchIngredient => 
          recipeIngredient.name.toLowerCase().includes(searchIngredient.toLowerCase()) ||
          searchIngredient.toLowerCase().includes(recipeIngredient.name.toLowerCase())
        )
      );

      return {
        ...recipe,
        matchingIngredientsCount: matchingIngredients.length,
        usedIngredients: matchingIngredients.map(ing => ing.name),
        relevanceScore: matchingIngredients.length * 10 + recipe.popularity
      };
    });

    // Sort by relevance score (descending)
    filteredRecipes.sort((a, b) => b.relevanceScore - a.relevanceScore);

    return {
      recipes: filteredRecipes.slice(0, limit),
      totalCount: filteredRecipes.length,
      searchTerms: ingredientNames,
      appliedFilters: options
    };
  }

  // Get all recipes with optional filters
  async getAllRecipes(options = {}) {
    const { 
      limit = 20, 
      cuisine = null, 
      dietaryRestrictions = [], 
      difficulty = null,
      sortBy = 'popularity' // 'popularity', 'rating', 'readyInMinutes', 'title'
    } = options;

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));

    let filteredRecipes = [...this.recipes];

    // Apply filters
    if (cuisine) {
      filteredRecipes = filteredRecipes.filter(recipe => 
        recipe.cuisine.toLowerCase() === cuisine.toLowerCase()
      );
    }

    if (difficulty) {
      filteredRecipes = filteredRecipes.filter(recipe => 
        recipe.difficulty.toLowerCase() === difficulty.toLowerCase()
      );
    }

    if (dietaryRestrictions.length > 0) {
      filteredRecipes = filteredRecipes.filter(recipe =>
        dietaryRestrictions.every(restriction =>
          recipe.dietaryRestrictions.includes(restriction)
        )
      );
    }

    // Sort recipes
    filteredRecipes.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'readyInMinutes':
          return a.readyInMinutes - b.readyInMinutes;
        case 'title':
          return a.title.localeCompare(b.title);
        case 'popularity':
        default:
          return b.popularity - a.popularity;
      }
    });

    return {
      recipes: filteredRecipes.slice(0, limit),
      totalCount: filteredRecipes.length,
      appliedFilters: options
    };
  }

  // Get recipe by ID
  async getRecipeById(id) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));

    const recipe = this.recipes.find(r => r.id === parseInt(id));
    if (!recipe) {
      throw new Error(`Recipe with ID ${id} not found`);
    }
    
    return { recipe };
  }

  // Get random recipes
  async getRandomRecipes(count = 3) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 150));

    const shuffled = [...this.recipes].sort(() => 0.5 - Math.random());
    return {
      recipes: shuffled.slice(0, count)
    };
  }

  // Get available cuisines
  getCuisines() {
    const cuisines = [...new Set(this.recipes.map(r => r.cuisine))];
    return cuisines.sort();
  }

  // Get available dietary restrictions
  getDietaryRestrictions() {
    const restrictions = new Set();
    this.recipes.forEach(recipe => {
      recipe.dietaryRestrictions.forEach(restriction => {
        restrictions.add(restriction);
      });
    });
    return Array.from(restrictions).sort();
  }

  // Search recipes by title
  async searchByTitle(query) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));

    const filteredRecipes = this.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(query.toLowerCase()) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );

    return {
      recipes: filteredRecipes,
      totalCount: filteredRecipes.length,
      searchQuery: query
    };
  }
}

// Export singleton instance
const recipeAPI = new RecipeAPI();
export default recipeAPI; 