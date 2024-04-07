import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CopyText from './CopyText';

describe('<CopyText />', () => {
  test('it should mount', () => {
    render(<CopyText copyText={'textToCopy'} />);
    
    const copyText = screen.getByTestId('CopyText');
    expect(copyText).toBeInTheDocument();
  });

  test('it should display copyText in inputfield', () => {
    render(<CopyText copyText={'textToCopy'} />);
    
    const copyTextInput = screen.getByTestId('CopyTextInput');
    expect(copyTextInput).toBeInTheDocument();
    expect(copyTextInput).toHaveAttribute('value', 'textToCopy')
  });
});