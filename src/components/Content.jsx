import React, { useState, useEffect } from 'react';

import './Content.css';
import fetchData from '../utils/fetchData'; // Import the fetchData utility
import { logWithColor, downloadLogFile } from '../utils/logger'; // Import the logger utility

export default function Content() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      logWithColor('trace', 'Calling fetchData', ['APIDATA', 'LOADDATA']);

      try {
        const result = await fetchData(); // Call the fetchData function
        setData(result);
        setLoading(false);
      } catch (error) {
        logWithColor(
          'error',
          `Error state: Failed to load data ${error.message}`,
        );
        setError(error.message);
        setLoading(false);
      }
    };

    loadData();

    return () => {
      logWithColor('trace', 'Cleaning up after fetchData', ['CLEANINSTANCE']);
    };
  }, []);

  if (loading) {
    logWithColor('debug', 'Loading state: Data is being fetched', ['HERE']);
    return (
      <div className="loading-state">
        <h1>Loading...</h1>
        <p>Fetching data...</p>
      </div>
    );
  }

  if (error) {
    logWithColor('error', `Error state: Failed to load data ${error}`);
    return (
      <div className="error-state">
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="app-container">
      <h1 className="app-title">Technological Foundations Assignment</h1>
      <p className="app-description">
        A beautifully crafted example using React and Webpack.
      </p>
      <button className="app-button" onClick={downloadLogFile}>
        Download Logs
      </button>

      <div className="data-container">
        <h2>Fetched Data:</h2>
        <ul>
          {data.slice(0, 5).map((post) => (
            <li key={post.id} className="post-item">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
