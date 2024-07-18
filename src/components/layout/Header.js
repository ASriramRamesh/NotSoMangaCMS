import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme.js';
import { useAuth } from '../../hooks/useAuth.js';

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { user, logout } = useAuth();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          ComicReader
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link></li>
            <li><Link to="/browse" className="hover:text-blue-600 dark:hover:text-blue-400">Browse</Link></li>
            {user ? (
              <>
                <li><Link to="/profile" className="hover:text-blue-600 dark:hover:text-blue-400">Profile</Link></li>
                {user.role === 'admin' && (
                  <li><Link to="/admin" className="hover:text-blue-600 dark:hover:text-blue-400">Admin</Link></li>
                )}
                <li><button onClick={logout} className="hover:text-blue-600 dark:hover:text-blue-400">Logout</button></li>
              </>
            ) : (
              <li><Link to="/login" className="hover:text-blue-600 dark:hover:text-blue-400">Login</Link></li>
            )}
            <li>
              <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-600">
                {isDarkMode ? '🌞' : '🌙'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;