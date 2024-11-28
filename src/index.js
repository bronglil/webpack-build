import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Find the root element in the HTML
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error('No root element found in the HTML.');
}
