import React, { FC } from 'react';
import styles from './Link.module.css';

interface LinkProps {
  url: string;
  title?: string;
}

const Link: FC<LinkProps> = (props) => (
  <div className={`${styles.Link} flex gap-2`} data-testid="Link">
    {props.title && <span>{props.title}</span>}
    <a data-testid="LinkContent" rel="noreferrer" target="_blank" href={props.url}>{props.url}</a>
  </div>
);

export default Link;
