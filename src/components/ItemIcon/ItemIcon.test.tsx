import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ItemIcon from './ItemIcon';

describe('<ItemIcon />', () => {
  test('it should mount', () => {
    render(<ItemIcon />);
    
    const itemIcon = screen.getByTestId('ItemIcon');

    expect(itemIcon).toBeInTheDocument();
  });
});