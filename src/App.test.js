/* eslint-disable */
import React from 'react'; // Import React explicitly
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock components
jest.mock('./components/Navbar', () => () => <div>Navbar</div>);
jest.mock('./components/Sidebar', () => () => <div>Sidebar</div>);
jest.mock('./components/Content', () => () => <div>Content</div>);

describe('App Component', () => {
  it('renders Navbar, Sidebar, and Content', () => {
    render(<App />);

    // Check if the mocked components are rendered
    expect(screen.getByText(/Navbar/i)).toBeInTheDocument();
    expect(screen.getByText(/Sidebar/i)).toBeInTheDocument();
    expect(screen.getByText(/Content/i)).toBeInTheDocument();
  });
});
