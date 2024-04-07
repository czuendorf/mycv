import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SubSectionHeader from './SubSectionHeader';

describe('<SubSectionHeader />', () => {
  test('it should mount', () => {
    render(<SubSectionHeader title={'foo'} />);
    
    const subSectionHeader = screen.getByTestId('SubSectionHeader');

    expect(subSectionHeader).toBeInTheDocument();
    expect(subSectionHeader).toHaveTextContent('foo');
  });
});