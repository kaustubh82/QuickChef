// Comprehensive grocery items database
const GROCERY_ITEMS_DATABASE = [
  // Fruits & Vegetables
  { id: 1, name: "Bananas", category: "Fruits & Vegetables", commonUnit: "bunch", keywords: ["banana", "fruit", "yellow"] },
  { id: 2, name: "Apples", category: "Fruits & Vegetables", commonUnit: "lb", keywords: ["apple", "fruit", "red", "green"] },
  { id: 3, name: "Spinach", category: "Fruits & Vegetables", commonUnit: "bag", keywords: ["spinach", "leafy", "green", "vegetable"] },
  { id: 4, name: "Carrots", category: "Fruits & Vegetables", commonUnit: "lb", keywords: ["carrot", "orange", "vegetable", "root"] },
  { id: 5, name: "Tomatoes", category: "Fruits & Vegetables", commonUnit: "lb", keywords: ["tomato", "red", "vegetable", "salad"] },
  { id: 6, name: "Onions", category: "Fruits & Vegetables", commonUnit: "lb", keywords: ["onion", "white", "yellow", "vegetable"] },
  { id: 7, name: "Potatoes", category: "Fruits & Vegetables", commonUnit: "lb", keywords: ["potato", "russet", "red", "vegetable"] },
  { id: 8, name: "Broccoli", category: "Fruits & Vegetables", commonUnit: "head", keywords: ["broccoli", "green", "vegetable", "crown"] },
  { id: 9, name: "Lettuce", category: "Fruits & Vegetables", commonUnit: "head", keywords: ["lettuce", "salad", "green", "iceberg", "romaine"] },
  { id: 10, name: "Bell Peppers", category: "Fruits & Vegetables", commonUnit: "each", keywords: ["pepper", "bell", "red", "green", "yellow"] },
  { id: 11, name: "Oranges", category: "Fruits & Vegetables", commonUnit: "lb", keywords: ["orange", "citrus", "fruit", "vitamin"] },
  { id: 12, name: "Strawberries", category: "Fruits & Vegetables", commonUnit: "container", keywords: ["strawberry", "berry", "red", "fruit"] },
  { id: 13, name: "Blueberries", category: "Fruits & Vegetables", commonUnit: "container", keywords: ["blueberry", "berry", "blue", "fruit"] },
  { id: 14, name: "Avocados", category: "Fruits & Vegetables", commonUnit: "each", keywords: ["avocado", "green", "healthy", "fat"] },
  { id: 15, name: "Garlic", category: "Fruits & Vegetables", commonUnit: "bulb", keywords: ["garlic", "clove", "seasoning"] },

  // Dairy & Eggs  
  { id: 16, name: "Milk", category: "Dairy & Eggs", commonUnit: "gallon", keywords: ["milk", "dairy", "whole", "2%", "skim"] },
  { id: 17, name: "Eggs", category: "Dairy & Eggs", commonUnit: "dozen", keywords: ["egg", "dozen", "large", "protein"] },
  { id: 18, name: "Butter", category: "Dairy & Eggs", commonUnit: "lb", keywords: ["butter", "unsalted", "salted", "stick"] },
  { id: 19, name: "Cheese - Cheddar", category: "Dairy & Eggs", commonUnit: "block", keywords: ["cheese", "cheddar", "sharp", "mild"] },
  { id: 20, name: "Greek Yogurt", category: "Dairy & Eggs", commonUnit: "container", keywords: ["yogurt", "greek", "plain", "vanilla"] },
  { id: 21, name: "Cream Cheese", category: "Dairy & Eggs", commonUnit: "package", keywords: ["cream", "cheese", "philadelphia", "spread"] },
  { id: 22, name: "Mozzarella", category: "Dairy & Eggs", commonUnit: "bag", keywords: ["mozzarella", "cheese", "shredded", "fresh"] },
  { id: 23, name: "Sour Cream", category: "Dairy & Eggs", commonUnit: "container", keywords: ["sour", "cream", "dairy"] },

  // Meat & Seafood
  { id: 24, name: "Chicken Breast", category: "Meat & Seafood", commonUnit: "lb", keywords: ["chicken", "breast", "boneless", "skinless"] },
  { id: 25, name: "Ground Beef", category: "Meat & Seafood", commonUnit: "lb", keywords: ["beef", "ground", "hamburger", "80/20"] },
  { id: 26, name: "Salmon Fillet", category: "Meat & Seafood", commonUnit: "lb", keywords: ["salmon", "fish", "fillet", "atlantic"] },
  { id: 27, name: "Pork Chops", category: "Meat & Seafood", commonUnit: "lb", keywords: ["pork", "chop", "bone-in", "boneless"] },
  { id: 28, name: "Turkey Slices", category: "Meat & Seafood", commonUnit: "lb", keywords: ["turkey", "deli", "sliced", "lunch"] },
  { id: 29, name: "Shrimp", category: "Meat & Seafood", commonUnit: "lb", keywords: ["shrimp", "frozen", "fresh", "jumbo"] },
  { id: 30, name: "Ground Turkey", category: "Meat & Seafood", commonUnit: "lb", keywords: ["turkey", "ground", "lean"] },

  // Pantry & Canned
  { id: 31, name: "Rice", category: "Pantry & Canned", commonUnit: "bag", keywords: ["rice", "white", "brown", "jasmine", "basmati"] },
  { id: 32, name: "Pasta", category: "Pantry & Canned", commonUnit: "box", keywords: ["pasta", "spaghetti", "penne", "linguine"] },
  { id: 33, name: "Olive Oil", category: "Pantry & Canned", commonUnit: "bottle", keywords: ["oil", "olive", "extra", "virgin"] },
  { id: 34, name: "Canned Tomatoes", category: "Pantry & Canned", commonUnit: "can", keywords: ["tomato", "canned", "crushed", "diced"] },
  { id: 35, name: "Black Beans", category: "Pantry & Canned", commonUnit: "can", keywords: ["beans", "black", "canned", "protein"] },
  { id: 36, name: "Flour", category: "Pantry & Canned", commonUnit: "bag", keywords: ["flour", "all-purpose", "wheat"] },
  { id: 37, name: "Sugar", category: "Pantry & Canned", commonUnit: "bag", keywords: ["sugar", "white", "granulated"] },
  { id: 38, name: "Salt", category: "Pantry & Canned", commonUnit: "container", keywords: ["salt", "table", "sea", "kosher"] },
  { id: 39, name: "Black Pepper", category: "Pantry & Canned", commonUnit: "container", keywords: ["pepper", "black", "ground", "spice"] },
  { id: 40, name: "Chicken Broth", category: "Pantry & Canned", commonUnit: "carton", keywords: ["broth", "chicken", "stock", "low-sodium"] },
  { id: 41, name: "Peanut Butter", category: "Pantry & Canned", commonUnit: "jar", keywords: ["peanut", "butter", "creamy", "crunchy"] },
  { id: 42, name: "Honey", category: "Pantry & Canned", commonUnit: "jar", keywords: ["honey", "raw", "organic"] },
  { id: 43, name: "Baking Soda", category: "Pantry & Canned", commonUnit: "box", keywords: ["baking", "soda", "sodium", "bicarbonate"] },
  { id: 44, name: "Vanilla Extract", category: "Pantry & Canned", commonUnit: "bottle", keywords: ["vanilla", "extract", "pure"] },

  // Bakery
  { id: 45, name: "Bread - White", category: "Bakery", commonUnit: "loaf", keywords: ["bread", "white", "sandwich", "loaf"] },
  { id: 46, name: "Bread - Whole Wheat", category: "Bakery", commonUnit: "loaf", keywords: ["bread", "wheat", "whole", "grain"] },
  { id: 47, name: "Bagels", category: "Bakery", commonUnit: "bag", keywords: ["bagel", "everything", "plain", "sesame"] },
  { id: 48, name: "English Muffins", category: "Bakery", commonUnit: "package", keywords: ["muffin", "english", "thomas"] },
  { id: 49, name: "Croissants", category: "Bakery", commonUnit: "package", keywords: ["croissant", "butter", "pastry"] },

  // Snacks
  { id: 50, name: "Potato Chips", category: "Snacks", commonUnit: "bag", keywords: ["chips", "potato", "crispy", "salty"] },
  { id: 51, name: "Crackers", category: "Snacks", commonUnit: "box", keywords: ["crackers", "saltine", "ritz", "wheat"] },
  { id: 52, name: "Almonds", category: "Snacks", commonUnit: "container", keywords: ["almonds", "nuts", "roasted", "raw"] },
  { id: 53, name: "Granola Bars", category: "Snacks", commonUnit: "box", keywords: ["granola", "bar", "chewy", "crunchy"] },
  { id: 54, name: "Pretzels", category: "Snacks", commonUnit: "bag", keywords: ["pretzel", "twisted", "mini", "salted"] },

  // Beverages
  { id: 55, name: "Orange Juice", category: "Beverages", commonUnit: "carton", keywords: ["juice", "orange", "pulp", "fresh"] },
  { id: 56, name: "Coffee", category: "Beverages", commonUnit: "bag", keywords: ["coffee", "ground", "beans", "dark", "medium"] },
  { id: 57, name: "Tea Bags", category: "Beverages", commonUnit: "box", keywords: ["tea", "green", "black", "herbal"] },
  { id: 58, name: "Sparkling Water", category: "Beverages", commonUnit: "pack", keywords: ["water", "sparkling", "seltzer", "carbonated"] },
  { id: 59, name: "Soda", category: "Beverages", commonUnit: "pack", keywords: ["soda", "cola", "pepsi", "coke"] },

  // Frozen
  { id: 60, name: "Frozen Pizza", category: "Frozen", commonUnit: "each", keywords: ["pizza", "frozen", "pepperoni", "cheese"] },
  { id: 61, name: "Ice Cream", category: "Frozen", commonUnit: "container", keywords: ["ice", "cream", "vanilla", "chocolate"] },
  { id: 62, name: "Frozen Berries", category: "Frozen", commonUnit: "bag", keywords: ["berries", "frozen", "mixed", "strawberry"] },
  { id: 63, name: "Frozen Vegetables", category: "Frozen", commonUnit: "bag", keywords: ["vegetables", "frozen", "mixed", "broccoli"] },
  { id: 64, name: "Frozen Chicken Nuggets", category: "Frozen", commonUnit: "bag", keywords: ["chicken", "nuggets", "frozen", "kids"] }
];

class GroceryAPI {
  constructor() {
    this.items = GROCERY_ITEMS_DATABASE;
  }

  // Search items by name or keywords
  searchItems(query, options = {}) {
    const { category = null, limit = 20 } = options;
    
    if (!query || query.trim().length === 0) {
      return {
        items: category ? this.items.filter(item => item.category === category).slice(0, limit) : [],
        total: 0,
        query: query
      };
    }

    const searchTerm = query.toLowerCase().trim();
    const results = this.items.filter(item => {
      // Check name match
      const nameMatch = item.name.toLowerCase().includes(searchTerm);
      
      // Check keywords match
      const keywordMatch = item.keywords.some(keyword => 
        keyword.toLowerCase().includes(searchTerm)
      );
      
      // Category filter
      const categoryMatch = !category || item.category === category;
      
      return (nameMatch || keywordMatch) && categoryMatch;
    });

    // Sort by relevance (exact name matches first, then partial matches)
    results.sort((a, b) => {
      const aNameExact = a.name.toLowerCase() === searchTerm;
      const bNameExact = b.name.toLowerCase() === searchTerm;
      const aNameStarts = a.name.toLowerCase().startsWith(searchTerm);
      const bNameStarts = b.name.toLowerCase().startsWith(searchTerm);
      
      if (aNameExact && !bNameExact) return -1;
      if (!aNameExact && bNameExact) return 1;
      if (aNameStarts && !bNameStarts) return -1;
      if (!aNameStarts && bNameStarts) return 1;
      
      return a.name.localeCompare(b.name);
    });

    return {
      items: results.slice(0, limit),
      total: results.length,
      query: query
    };
  }

  // Get items by category
  getItemsByCategory(category, limit = 50) {
    const results = this.items.filter(item => item.category === category);
    return {
      items: results.slice(0, limit),
      total: results.length,
      category: category
    };
  }

  // Get all categories
  getCategories() {
    const categories = [...new Set(this.items.map(item => item.category))];
    return categories.sort();
  }

  // Get popular items (first few from each category)
  getPopularItems(limit = 24) {
    const categories = this.getCategories();
    const popularItems = [];
    
    categories.forEach(category => {
      const categoryItems = this.items.filter(item => item.category === category);
      popularItems.push(...categoryItems.slice(0, 4)); // 4 items per category
    });
    
    return {
      items: popularItems.slice(0, limit),
      total: popularItems.length
    };
  }

  // Get item suggestions based on existing grocery items
  getSuggestions(existingItems, limit = 10) {
    // Simple suggestion logic: suggest items from categories that user already has
    const existingCategories = [...new Set(existingItems.map(item => item.category))];
    
    if (existingCategories.length === 0) {
      return this.getPopularItems(limit);
    }
    
    const suggestions = [];
    existingCategories.forEach(category => {
      const categoryItems = this.items.filter(item => 
        item.category === category && 
        !existingItems.some(existing => existing.name === item.name)
      );
      suggestions.push(...categoryItems.slice(0, 3));
    });
    
    return {
      items: suggestions.slice(0, limit),
      total: suggestions.length
    };
  }

  // Get item by ID
  getItemById(id) {
    return this.items.find(item => item.id === id);
  }
}

export default new GroceryAPI(); 