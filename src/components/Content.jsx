import React, { useState, useEffect } from 'react';
import './Content.css';  
import log from 'loglevel';
import chalk from 'chalk';

const levelColors = {
  trace: chalk.gray,
  debug: chalk.blue,
  info: chalk.green,
  warn: chalk.yellow,
  error: chalk.red,
  silent: chalk.white
};

const customLogger = log.getLogger('app-logger');  
customLogger.setLevel('trace');

const logWithColor = (level, message) => {
  const coloredMessage = levelColors[level](message);
  customLogger[level](coloredMessage);
};

export default function Content() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
      
      logWithColor('trace', 'Entering fetchData function'); 

      try {
        logWithColor('debug', `Starting to fetch data from: ${apiUrl}`); 

        const response = await fetch(apiUrl);

        if (!response.ok) {
          logWithColor('warn', `The response was not ok, received status: ${response.status}`); 
          throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        
        logWithColor('debug', `Data fetched successfully, number of posts: ${result.length}`); 
        logWithColor('trace', `Fetched data: ${JSON.stringify(result.slice(0, 3))}`); 

        setData(result);
        setLoading(false);

        if (result.length === 0) {
          logWithColor('warn', 'No posts found in the API response'); 
        }
      } catch (error) {
        logWithColor('error', `Error during data fetching: ${error.message}`); 
        setError(error.message);
        setLoading(false);
      }
    };

    logWithColor('trace', 'Calling fetchData'); 
    fetchData();

    return () => {
      logWithColor('trace', 'Cleaning up after fetchData');
    };
  }, []);

  if (loading) {
    logWithColor('debug', 'Loading state: Data is being fetched');
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
      <p className="app-description">A beautifully crafted example using React and Webpack.</p>
      <button className="app-button">Get Started</button>

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
