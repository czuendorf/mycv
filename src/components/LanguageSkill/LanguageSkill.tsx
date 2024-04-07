import React, { FC } from "react";
import styles from "./LanguageSkill.module.css";
import { LanguageSkill } from "../../models/common";
import { useTranslation } from "react-i18next";
import Badge from "../Badge/Badge";

interface LanguageSkillProps {
  skill: LanguageSkill;
}

const LanguageSkillComp: FC<LanguageSkillProps> = (props) => {
  const { t } = useTranslation();
  return (
    <div className={`${styles.LanguageSkill} flex`} data-testid="LanguageSkill">
      <span ><Badge colorClass="bg-green-600" half={true}>{t(props.skill.language)}</Badge></span>
      <span className="rounded-r bg-slate-400 px-2 text-white text-sm flex items-center">{t(props.skill.rating)}</span>
    </div>
  );
};

export default LanguageSkillComp;
