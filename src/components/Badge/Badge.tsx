import React, { FC } from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  colorClass?: string,
  half?: boolean,
  children: React.ReactNode
}

const Badge: FC<BadgeProps> = (props) => (
  <div className={`${styles.Badge} ${props.half ? 'rounded-l' : 'rounded'} text-white h-6 font-semibold flex items-center text-sm px-1.5 ${props.colorClass ? props.colorClass : 'bg-sky-500'}`} data-testid="Badge">
    {props.children}
  </div>
);

export default Badge;
