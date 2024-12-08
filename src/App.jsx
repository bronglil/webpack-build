// src/App.js
import React, { useState } from 'react';

import './App.css';
import Content from './components/Content.jsx';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';

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
