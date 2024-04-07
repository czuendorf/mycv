import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Badge from './Badge';

describe('<Badge />', () => {
  test('it should mount', () => {
    render(<Badge colorClass={'color123'}>foo</Badge>);
    
    const badge = screen.getByTestId('Badge');

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveTextContent('foo');
    expect(badge).toHaveAttribute('class', 'Badge rounded text-white h-6 font-semibold flex items-center text-sm px-1.5 color123');
  });


  test('it should render half rounded border on half true', () => {
    render(<Badge colorClass={'color123'} half={true}>foo</Badge>);
    
    const badge = screen.getByTestId('Badge');

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveTextContent('foo');
    expect(badge).toHaveAttribute('class', 'Badge rounded-l text-white h-6 font-semibold flex items-center text-sm px-1.5 color123');
  });
});