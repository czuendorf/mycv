import React, { FC } from "react";
import styles from "./Personal.module.css";
import ItemIcon from "../ItemIcon/ItemIcon";
import { DateTime } from "luxon";
import DataLine from "../DataLine/DataLine";
import { PersonalDataItem } from "../../models/common";
import { useTranslation } from "react-i18next";

interface PersonalProps {
  data: PersonalDataItem
}

const Personal: FC<PersonalProps> = (props) => {

  const { t } = useTranslation();

  const birthDateAsLocale = DateTime.fromISO(props.data.dateofbirth).toLocaleString(
    DateTime.DATE_MED
  );

  return (
    <div className={styles.Personal} data-testid="Personal">
      <div className="flex flex-col flex-1 gap-1">
        <DataLine>
          <ItemIcon>💬</ItemIcon>
          <span>{t(props.data.salutation)}</span>
        </DataLine>
        <DataLine>
          <ItemIcon>👨🏽‍💻</ItemIcon>
          <span>
            {props.data.name} {props.data.surname}
          </span>
        </DataLine>
        <DataLine>
          <ItemIcon>👫</ItemIcon>
          <span>{t(props.data.gender)}</span>
        </DataLine>
        <DataLine>
          <ItemIcon>🎂</ItemIcon>
          <span>{birthDateAsLocale} {t('bornIn')} {props.data.placeofbirth}</span>
        </DataLine>
      </div>
      <div className="rounded w-32 h-32 bg-cover bg-no-repeat bg-center" style={{"backgroundImage": `url('${props.data.profilePicture}')`}}></div>
    </div>
  );
};

export default Personal;
