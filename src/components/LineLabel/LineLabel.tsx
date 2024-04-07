import React, { FC } from "react";
import styles from "./LineLabel.module.css";
import { useTranslation } from "react-i18next";
import ItemIcon from "../ItemIcon/ItemIcon";

interface LineLabelProps {
  icon: string;
  label: string;
}

const LineLabel: FC<LineLabelProps> = (props) => {
  const { t } = useTranslation();
  return (
    <div
      className={`${styles.LineLabel} flex-1 flex items-start pl-2`}
      data-testid="LineLabel"
    >
      <span className="flex items-center">
        <ItemIcon>{props.icon}</ItemIcon>
        {t(props.label)}
      </span>
    </div>
  );
};

export default LineLabel;
