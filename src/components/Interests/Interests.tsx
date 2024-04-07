import React, { FC } from "react";
import styles from "./Interests.module.css";
import SubSectionHeader from "../SubSectionHeader/SubSectionHeader";
import Badge from "../Badge/Badge";

interface InterestsProps {
  interests: string[] | undefined;
}

const Interests: FC<InterestsProps> = (props) => {
  const { interests } = props;
  if (!interests) {
    return null;
  }
  const skillsModified = interests?.map((interest, index) => {
    return (
      <Badge data-testid="Interest"
      key={`interest_${index}`} half={false}>{interest}</Badge>
    
    );
  });
  return (
    <div
      className={`${styles.Skills} flex flex-col gap-2`}
      data-testid="Interests"
    >
      <SubSectionHeader title={"interests"} />
      <div className="flex flex-wrap gap-2">{skillsModified}</div>
    </div>
  );
};

export default Interests;
