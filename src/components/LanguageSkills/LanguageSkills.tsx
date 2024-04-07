import React, { FC } from "react";
import styles from "./LanguageSkills.module.css";
import { LanguageSkill } from "../../models/common";
import LanguageSkillComp from "../LanguageSkill/LanguageSkill";
import SubSectionHeader from "../SubSectionHeader/SubSectionHeader";

interface LanguageSkillsProps {
  languageSkills: LanguageSkill[];
}

const LanguageSkills: FC<LanguageSkillsProps> = (props) => {
  const { languageSkills } = props;
  const skills = languageSkills?.map((skill, index) => {
    return <LanguageSkillComp skill={skill} key={`skill_${skill.language}`} />;
  });

  return (
    <div
      className={`${styles.LanguageSkills} flex flex-col gap-2`}
      data-testid="LanguageSkills"
    >
      <SubSectionHeader title={"languages"} />
      <div className="flex gap-2">{skills}</div>
    </div>
  );
};

export default LanguageSkills;
