import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App Header', () => {
  render(<App />);
  const header = screen.getByTestId('Header');
  expect(header).toBeInTheDocument();
});
