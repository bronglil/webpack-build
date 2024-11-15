// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App Component', () => {
    test('renders the main title', () => {
        render(<App />);
        const titleElement = screen.getByText(/Software Development Assignment/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('renders the description text', () => {
        render(<App />);
        const descriptionElement = screen.getByText(/A beautifully crafted example using React and Webpack./i);
        expect(descriptionElement).toBeInTheDocument();
    });

    test('renders the Get Started button', () => {
        render(<App />);
        const buttonElement = screen.getByRole('button', { name: /Get Started/i });
        expect(buttonElement).toBeInTheDocument();
    });
});
