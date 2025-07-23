# QuickChef

A modern React-based web application that helps you manage grocery lists and discover delicious recipes with instant search. Features user authentication and personalized data storage - all data is stored securely in your browser!

## ✨ Features

### 🔐 User Authentication
- **Secure Login/Signup**: Create accounts with email and password authentication
- **Demo Account**: Try the app instantly with the built-in demo account
- **Password Security**: Strong password validation and visual strength indicators
- **Local Storage**: All user data stored securely in your browser

### 🛍️ Grocery List Management
- **Grocery Item Search**: Instantly find items from 60+ common grocery items database
- **Quick Add**: One-click add popular items with pre-filled quantities and common units
- **Popular Items**: Browse frequently purchased items organized by category
- **Smart Suggestions**: Get personalized item recommendations based on your shopping patterns
- **Add, Edit, Delete Items**: Manage custom grocery items with names, quantities, and categories
- **Smart Categories**: Organize items by Fruits & Vegetables, Dairy & Eggs, Meat & Seafood, and more
- **Purchase Tracking**: Mark items as purchased with visual feedback and progress tracking
- **Progress Counter**: See how many items you've purchased (e.g., "3/5 items purchased")

### 🍳 Recipe Discovery
- **Real-time Search**: Type recipe names and get instant results as you type (e.g., "pasta", "chicken")
- **Custom Recipe API**: Built-in recipe database with 10+ diverse recipes across multiple cuisines
- **Recipe Cards**: View recipe name, cook time, servings, rating, difficulty, ingredients, and instructions
- **Reliable Images**: High-quality food images with smart fallback system for consistent display
- **Enhanced Image Loading**: Smooth loading animations and error handling for optimal user experience
- **Browse All**: Button to explore all available recipes when not searching

### ❤️ Enhanced Favorites System
- **Prominent Heart Buttons**: Large, visually appealing heart icons on every recipe card
- **Visual Feedback**: Pulsing animations and clear hover effects guide users
- **One-Click Save**: Simply click the heart to add recipes to favorites instantly
- **Smart Visual States**: Favorited recipes show filled red hearts, unfavorited show outline
- **Quick Access**: View all saved recipes in a dedicated favorites tab
- **Recipe Statistics**: See your collection stats like average cook time and total servings
- **Helpful Instructions**: Clear guidance on how to use the favorites feature

### 💾 Data Persistence
- **User-Specific Storage**: Each user's data is stored separately and securely
- **Session Persistence**: Stay logged in across browser sessions
- **No Backend Required**: Everything runs in your browser - no server needed

### 📖 About & Information
- **Comprehensive About Page**: Learn about features, technology, and privacy
- **Interactive Navigation**: Easy access to all pages with a clean header
- **Privacy-Focused**: Complete transparency about data handling

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone or download** this project to your local machine

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

That's it! The app includes a comprehensive built-in recipe database with no external API dependencies.

## 👤 Quick Start with Demo Account

Want to try the app immediately? Use the demo account:
- **Email**: demo@example.com
- **Password**: demo123

Or click the "Use Demo Account" button on the login page!

## 🎯 How to Use

### Getting Started
1. **Sign Up**: Create a new account or use the demo account
2. **Login**: Access your personal dashboard

### Creating Your Grocery List
1. **Search for Items**: Use the search box to find common grocery items instantly (e.g., "milk", "bread", "chicken")
2. **Quick Add Popular**: Click the **+** button on popular items or suggestions for instant add
3. **Select from Search**: Click search results to auto-fill the form with item details and common units
4. **Manual Add**: Click **"Add Item"** to manually enter custom items
5. Enter the item name, quantity (e.g., "2kg", "3 pcs"), and select a category
6. Click **"Add"** to save the item
7. Mark items as **purchased** and track your shopping progress

### Finding Recipes
1. Switch to the **"Find Recipes"** tab
2. **Search by Name**: Start typing recipe names (e.g., "pasta", "chicken", "salad") - results appear instantly as you type!
3. **Browse All**: Click "Show All Recipes" to explore the complete recipe database
4. Click the heart icon on any recipe to add it to your favorites

### Managing Favorites
1. Go to the **"Favorites"** tab to see all saved recipes
2. Remove favorites by clicking the trash icon
3. View your collection statistics at the bottom

## 🛠️ Technical Stack

- **React 19** - Modern React with hooks and context
- **React Router** - Client-side routing and navigation
- **Vite** - Fast development server and build tool
- **Lucide React** - Beautiful icons
- **Custom Recipe API** - Frontend-only recipe database and search engine
- **Authentication Context** - Secure user management system
- **CSS3** - Modern responsive styling with gradients and animations
- **Local Storage** - Browser-based data persistence and user management

## 📱 Responsive Design

The app is fully responsive and works great on:
- 💻 Desktop computers
- 📱 Mobile phones
- 🖱️ Tablets

## 🎨 Features in Detail

### Smart Categories
Items are automatically organized into logical categories:
- Fruits & Vegetables
- Dairy & Eggs
- Meat & Seafood
- Bakery
- Pantry & Canned
- Snacks
- Beverages
- Frozen
- Other

### Recipe Matching Algorithm
The app intelligently matches your grocery items to recipes:
- Case-insensitive matching
- Partial ingredient name matching
- Falls back to static recipes if API is unavailable
- Shows which ingredients you already have

### Modern UI/UX
- Gradient backgrounds and smooth animations
- Hover effects and visual feedback
- Progress indicators and loading states
- Clean, intuitive interface

## 🚀 Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React and modern web technologies.
# quickchef
