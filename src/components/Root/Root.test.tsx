import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Root from './Root';

describe('<Root />', () => {
  test('it should mount', () => {
    render(<Root />);
    
    const root = screen.getByTestId('Root');

    expect(root).toBeInTheDocument();
  });
});