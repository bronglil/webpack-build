// src/App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Content from './components/Content.jsx';

function App() {
  const [state, setState] = useState();
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
