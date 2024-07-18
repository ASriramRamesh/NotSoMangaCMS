import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/tailwind.css';
import App from './App';
export { useTheme } from './hooks/useTheme.js';
export { useAuth } from './hooks/useAuth';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);  