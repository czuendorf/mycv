import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LanguageSkills from './LanguageSkills';

describe('<LanguageSkills />', () => {
  test('it should mount', () => {
    render(<LanguageSkills languageSkills={[]} />);
    
    const languageSkills = screen.getByTestId('LanguageSkills');

    expect(languageSkills).toBeInTheDocument();
  });
});