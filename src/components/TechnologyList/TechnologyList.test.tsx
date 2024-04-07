import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TechnologyList from './TechnologyList';
import { EmploymentType, StepType, Technologies, WorkplaceDataItem } from '../../models/common';

describe('<TechnologyList />', () => {
  test('it should mount', () => {
    const myData: WorkplaceDataItem = {
      type: StepType.Job,
      from: '1900-01-22',
      to: '1942-01-22',
      company: 'company',
      employmentType: EmploymentType.FullTime,
      title: 'master',
      duties: ['being master'],
      technologies: [Technologies.Java],
      place: 'everywhere'
    }
    render(<TechnologyList workplaces={[myData]} />);
    
    const technologyList = screen.getByTestId('TechnologyList');

    expect(technologyList).toBeInTheDocument();
    expect(technologyList).toHaveTextContent('Java');
    expect(technologyList).toHaveTextContent('42'); // calculates the years 
  });
});