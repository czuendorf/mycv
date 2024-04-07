import React, { FC } from "react";
import styles from "./ItemIcon.module.css";

interface ItemIconProps {
  children?: React.ReactNode;
}

const ItemIcon: FC<ItemIconProps> = (props) => (
  <div
    className={`${styles.ItemIcon} mr-2 text-xl flex items-center`}
    data-testid="ItemIcon"
  >
    {props.children}
  </div>
);

export default ItemIcon;
