import React, { FC } from "react";
import styles from "./DataLine.module.css";

interface DataLineProps {
  children?: React.ReactNode;
}

const DataLine: FC<DataLineProps> = (props) => (
  <div className={styles.DataLine} data-testid="DataLine">
    <div className={`flex gap-1 items-center`}>{props.children}</div>
  </div>
);

export default DataLine;
