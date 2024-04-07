import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from './Contact';
import { ContactDataItem } from '../../models/common';

describe('<Contact />', () => {
  test('it should mount', () => {
    const testData: ContactDataItem = {
      mail: '',
      phone: '',
      linkedin: 'foo',
      github: 'git'
    }
    render(<Contact data={testData}/>);
    
    const contact = screen.getByTestId('Contact');

    expect(contact).toBeInTheDocument();
    expect(contact).toHaveTextContent('LinkedIn');
    expect(contact).toHaveTextContent('GitHub');
  });
});