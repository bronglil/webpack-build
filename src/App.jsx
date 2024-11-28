// src/App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

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
