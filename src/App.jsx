/**
 * @file App.js - Main entry point of the React application
 */

import React from 'react';
import './App.css';
import Content from './components/Content.jsx';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';

/**
 * Main application component that renders the overall layout.
 * Combines Navbar, Sidebar, and Content components into a cohesive interface.
 * 
 * @function App
 * @returns {JSX.Element} A React component that renders the main application structure
 * 
 * @example
 * // Basic usage:
 * <App />
 * 
 * @example
 * // Inside index.js:
 * import App from './App';
 * import { createRoot } from 'react-dom/client';
 * 
 * const root = createRoot(document.getElementById('root'));
 * root.render(<App />);
 */
function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      <main>
        <Content />
      </main>
    </div>
  );
}

export default App;