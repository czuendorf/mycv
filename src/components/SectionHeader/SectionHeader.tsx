import React, { FC } from "react";
import styles from "./SectionHeader.module.css";
import { useTranslation } from "react-i18next";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: FC<SectionHeaderProps> = (props) => {
  const { t } = useTranslation();
  return (
    <div
      className={`${styles.SectionHeader} text-lg uppercase bg-slate-500 border-2 text-white rounded px-2 font-semibold flex`}
      data-testid="SectionHeader"
    >
      {t(props.title)}
    </div>
  );
};

export default SectionHeader;
