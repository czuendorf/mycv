import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SectionHeader from './SectionHeader';

describe('<SectionHeader />', () => {
  test('it should mount', () => {
    render(<SectionHeader title={'foo'} />);
    
    const sectionHeader = screen.getByTestId('SectionHeader');

    expect(sectionHeader).toBeInTheDocument();
    expect(sectionHeader).toHaveTextContent('foo');
  });
});