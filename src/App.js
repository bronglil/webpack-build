// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div className="app">
            <Navbar />
            <Sidebar />
            <main>
                <div className="app-container">
                    <h1 className="app-title">Software Development Assignment</h1>
                    <p className="app-description">
                        A beautifully crafted example using React and Webpack.
                    </p>
                    <button className="app-button">Get Started</button>
                </div>
            </main>
        </div>
    );
}

export default App;
