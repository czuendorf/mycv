import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LanguageSkill from './LanguageSkill';
import { Language, LanguageRating } from '../../models/common';

describe('<LanguageSkill />', () => {
  test('it should mount', () => {
    render(
      <LanguageSkill
        skill={{
          rating: LanguageRating.basic,
          language: Language.English,
        }}
      />
    );
    
    const languageSkill = screen.getByTestId('LanguageSkill');

    expect(languageSkill).toBeInTheDocument();
  });
});