import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LineLabel from './LineLabel';

describe('<LineLabel />', () => {
  test('it should mount', () => {
    render(<LineLabel icon={'abc'} label={'label'} />);
    
    const lineLabel = screen.getByTestId('LineLabel');

    expect(lineLabel).toBeInTheDocument();
    expect(lineLabel).toHaveTextContent('abc');
    expect(lineLabel).toHaveTextContent('label')
  });
});