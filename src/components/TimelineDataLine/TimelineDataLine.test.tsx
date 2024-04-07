import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TimelineDataLine from './TimelineDataLine';

describe('<TimelineDataLine />', () => {
  test('it should mount', () => {
    render(<TimelineDataLine>
      text123
    </TimelineDataLine>);
    
    const timelineDataLine = screen.getByTestId('TimelineDataLine');

    expect(timelineDataLine).toBeInTheDocument();
    expect(timelineDataLine).toHaveTextContent('text123');
  });
});