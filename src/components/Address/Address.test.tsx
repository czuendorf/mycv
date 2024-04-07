import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Address from './Address';
import { AddressDataItem } from '../../models/common';

describe('<Address />', () => {
  test('it should mount', () => {
   const testData: AddressDataItem = {
      street: 'King Street',
      propertyNumber: '12',
      postcode: '12345',
      city: 'Big City',
      country: 'Germany'
    }
    render(<Address data={testData}/>);
    
    const address = screen.getByTestId('Address');

    expect(address).toBeInTheDocument();
    expect(address).toHaveTextContent('King Street')
    expect(address).toHaveTextContent('12')
    expect(address).toHaveTextContent('12345')
    expect(address).toHaveTextContent('Big City')
    expect(address).toHaveTextContent('Germany')
  });
});