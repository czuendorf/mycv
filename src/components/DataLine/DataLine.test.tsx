import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DataLine from './DataLine';

describe('<DataLine />', () => {
  test('it should mount', () => {
    render(<DataLine />);
    
    const dataLine = screen.getByTestId('DataLine');

    expect(dataLine).toBeInTheDocument();
  });
});