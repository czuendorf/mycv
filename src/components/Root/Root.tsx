import React, { FC } from 'react';
import styles from './Root.module.css';

interface RootProps {
  children?: React.ReactNode
}

const Root: FC<RootProps> = (props) => (
  <div className={`${styles.Root} flex flex-col flex-1 gap-6`} data-testid="Root">
    {props.children}
  </div>
);

export default Root;
