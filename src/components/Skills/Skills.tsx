import React, { FC } from "react";
import styles from "./Skills.module.css";
import SubSectionHeader from "../SubSectionHeader/SubSectionHeader";
import Badge from "../Badge/Badge";

interface SkillsProps {
  skills: string[] | undefined;
}

const Skills: FC<SkillsProps> = (props) => {
  const { skills } = props;
  if (!skills) {
    return null;
  }
  const skillsModified = skills?.map((skill, index) => {
    return (
      <Badge data-testid="Skills"
      key={`skill_${index}`} half={false}>{skill}</Badge>
    
    );
  });
  return (
    <div
      className={`${styles.Skills} flex flex-col gap-2`}
      data-testid="Skills"
    >
      <SubSectionHeader title={"skills"} />
      <div className="flex flex-wrap gap-2">{skillsModified}</div>
    </div>
  );
};

export default Skills;
