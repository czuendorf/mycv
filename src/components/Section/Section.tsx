import React, { FC, ReactNode } from "react";
import styles from "./Section.module.css";
import SectionHeader from "../SectionHeader/SectionHeader";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section: FC<SectionProps> = (props) => (
  <div
    className={`${styles.Section} flex flex-col gap-4`}
    data-testid="Section"
  >
    <SectionHeader title={props.title} />
    <span>{props.children}</span>
  </div>
);

export default Section;
