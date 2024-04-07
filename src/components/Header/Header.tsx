import React, { FC } from "react";
import styles from "./Header.module.css";
import { useTranslation } from "react-i18next";
interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.Header} data-testid="Header">
      <div className="text-4xl font-bold uppercase flex">
        {t('header')}
      </div>
    </div>
  );
};

export default Header;
