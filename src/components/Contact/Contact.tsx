import React, { FC } from "react";
import styles from "./Contact.module.css";
import DataLine from "../DataLine/DataLine";
import ItemIcon from "../ItemIcon/ItemIcon";
import Link from "../Link/Link";
import CopyText from "../CopyText/CopyText";
import { ContactDataItem } from "../../models/common";

interface ContactProps {
  data: ContactDataItem;
}

const Contact: FC<ContactProps> = (props) => (
  <div className={`${styles.Contact} flex flex-col gap-1`} data-testid="Contact">
    <DataLine>
      <ItemIcon>📧</ItemIcon>
      <CopyText copyText={props.data.mail}></CopyText>
    </DataLine>
    <DataLine>
      <ItemIcon>📱</ItemIcon>
      <CopyText copyText={props.data.phone}></CopyText>
    </DataLine>
    {props.data.linkedin && <DataLine>
      <ItemIcon>👔</ItemIcon>
      <Link url={props.data.linkedin} title={"LinkedIn"}></Link>
    </DataLine>}
    {props.data.github && <DataLine>
      <ItemIcon>💻</ItemIcon>
      <Link url={props.data.github} title={"GitHub"}></Link>
    </DataLine>}
  </div>
);

export default Contact;
