import React, { FC } from "react";
import styles from "./Timeline.module.css";
import { WorkplaceDataItem } from "../../models/common";
import Workplace from "../Workplace/Workplace";

interface TimelineProps {
  workplaces: WorkplaceDataItem[];
}

const Timeline: FC<TimelineProps> = (props) => {
  const rendered = props.workplaces.map((item, index) => {
    return (<Workplace data={item} key={`wp_${index}`}></Workplace>)
  });

  return (
    <div className={`${styles.Timeline} flex flex-col gap-8`} data-testid="Timeline">
      {rendered}
    </div>
  );
};

export default Timeline;
