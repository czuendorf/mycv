import React, { FC } from 'react';
import styles from './SubSectionHeader.module.css';
import { useTranslation } from 'react-i18next';

interface SubSectionHeaderProps {
  title: string
}

const SubSectionHeader: FC<SubSectionHeaderProps> = (props) => {
  const { t } = useTranslation();
  return (
    <div
      className={`${styles.SubSectionHeader} font-semibold flex uppercase`}
      data-testid="SubSectionHeader"
    >
      {t(props.title)}
    </div>
  );
};

export default SubSectionHeader;
