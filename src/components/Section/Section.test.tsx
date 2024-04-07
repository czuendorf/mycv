import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Section from './Section';

describe('<Section />', () => {
  test('it should mount', () => {
    const children = (<div>children1</div>)
    render(<Section title="foo">{children}</Section>);
    
    const section = screen.getByTestId('Section');

    expect(section).toBeInTheDocument();
    expect(section).toHaveTextContent("foo")
    expect(section).toHaveTextContent("children1")
  });
});