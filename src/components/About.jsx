import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowLeft } from 'lucide-react';

const About = () => {
  const features = [
    {
      title: "Smart Grocery Lists",
      description: "Create and manage multiple grocery lists with categories, quantities, and purchase tracking."
    },
    {
      title: "Instant Recipe Search",
      description: "Find recipes by typing names with real-time search results as you type."
    },
    {
      title: "Favorites System",
      description: "Save your favorite recipes and view collection statistics."
    },
    {
      title: "Local Storage",
      description: "All your data is stored securely in your browser - no external servers needed."
    },
    {
      title: "Responsive Design",
      description: "Works perfectly on desktop, tablet, and mobile devices."
    },
    {
      title: "Privacy First",
      description: "Your data never leaves your device. Complete privacy and security."
    }
  ];

  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="hero-content">
          <h1>About QuickChef</h1>
          <p className="hero-subtitle">
            A modern, privacy-focused web application designed to make grocery shopping 
            and meal planning simple, efficient, and enjoyable.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Curated Recipes</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Privacy Focused</span>
            </div>
            <div className="stat">
              <span className="stat-number">0</span>
              <span className="stat-label">External Dependencies</span>
            </div>
          </div>
        </div>
      </div>

      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Create Your Account</h3>
              <p>Sign up with just your name and email. All data stays on your device.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Build Your Grocery List</h3>
              <p>Add items with quantities and categories. Track your shopping progress.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Discover Recipes</h3>
              <p>Search for recipes by name and get instant results. Save your favorites.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Enjoy Cooking</h3>
              <p>Follow detailed recipes with ingredients and step-by-step instructions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-card">
          <h2>Your Privacy Matters</h2>
          <p>
            This application is built with privacy as a core principle. All your data including 
            grocery lists, favorite recipes, and account information is stored locally in your 
            browser using localStorage. Nothing is sent to external servers or third parties.
          </p>
          <ul className="privacy-list">
            <li>✅ No data collection or tracking</li>
            <li>✅ No external API dependencies for core features</li>
            <li>✅ Works completely offline after initial load</li>
            <li>✅ Open source and transparent</li>
          </ul>
        </div>
      </section>

      <section className="developer-section">
        <h2>Built With Care</h2>
        <div className="developer-info">
          <div className="developer-card">
            <p>
              This application was crafted with attention to detail, focusing on user experience, 
              performance, and privacy. It demonstrates modern web development practices using 
              React and contemporary CSS techniques.
            </p>
            <div className="developer-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="dev-link">
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of users who have simplified their grocery shopping and cooking experience.</p>
        <div className="cta-buttons">
          <Link to="/signup" className="cta-primary">
            <Zap size={20} />
            Get Started Free
          </Link>
          <Link to="/" className="cta-secondary">
            <ArrowLeft size={20} />
            Back to App
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About; 