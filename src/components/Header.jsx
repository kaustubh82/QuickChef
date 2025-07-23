import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, LogOut, Info } from 'lucide-react';

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <Link to="/" className="logo">
          <span className="logo-text">QuickChef</span>
        </Link>

        <nav className="header-nav">
          <Link to="/about" className="nav-link">
            <Info size={18} />
            About
          </Link>

          <div className="auth-section">
            {isAuthenticated ? (
              <div className="user-menu">
                <div className="user-info">
                  <User size={18} />
                  <span className="user-name">Hello, {user.name}!</span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="logout-button"
                  title="Sign out"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            ) : (
              <div className="auth-links">
                <Link to="/login" className="auth-nav-link">
                  Login
                </Link>
                <Link to="/signup" className="auth-nav-button">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 