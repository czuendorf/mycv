import React, { FC } from 'react';
import styles from './TimelineDataLine.module.css';

interface TimelineDataLineProps {
  children: React.ReactNode
}

const TimelineDataLine: FC<TimelineDataLineProps> = (props) => (
  <div className={`${styles.TimelineDataLine} flex odd:bg-gray-100 py-1 rounded`} data-testid="TimelineDataLine">
    {props.children}
  </div>
);

export default TimelineDataLine;
