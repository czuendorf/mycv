import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Timeline from './Timeline';
import { EmploymentType, StepType, Technologies, WorkplaceDataItem } from '../../models/common';

describe('<Timeline />', () => {
  test('it should mount', async() => {
    const myData: WorkplaceDataItem = {
      type: StepType.Job,
      from: '',
      to: '',
      company: 'company',
      employmentType: EmploymentType.FullTime,
      title: 'master',
      duties: ['being master'],
      technologies: [Technologies.Java],
      place: 'everywhere'
    }
    render(<Timeline workplaces={[myData]} />);
    
    const timeline = screen.getByTestId('Timeline');
    expect(timeline).toBeInTheDocument();
    const workplaces = await screen.findAllByTestId('Workplace')
    expect(workplaces.length).toBe(1)
  });
});