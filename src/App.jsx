// src/App.js

/**
 * The main entry point of the React application.
 * This component includes the Navbar, Sidebar, and main Content.
 * 
 * @file App.js
 * @module App
 * @requires React
 * @requires ./App.css
 * @requires ./components/Content
 * @requires ./components/Navbar
 * @requires ./components/Sidebar
 */

import React from 'react';

import './App.css';
import Content from './components/Content.jsx';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';

/**
 * Renders the main application structure, including the Navbar, Sidebar, and Content.
 * 
 * @component
 * @returns {JSX.Element} The rendered App component.
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
