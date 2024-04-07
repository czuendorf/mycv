import React, { FC } from 'react';
import styles from './Address.module.css';
import ItemIcon from '../ItemIcon/ItemIcon';
import DataLine from '../DataLine/DataLine';
import { AddressDataItem } from '../../models/common';

interface AddressProps {
  data: AddressDataItem;
}

const Address: FC<AddressProps> = (props) => (
  <div className={`${styles.Address} flex flex-col gap-1`} data-testid="Address">
    <DataLine>
      <ItemIcon>🏠</ItemIcon>
      <span>{props.data.street}</span>
      <span>{props.data.propertyNumber}</span>
    </DataLine>
    <DataLine>
      <ItemIcon>🏙️</ItemIcon>
      <span>{props.data.postcode}</span>
      <span>{props.data.city}</span>
    </DataLine>
   <DataLine>
      <ItemIcon>🌎</ItemIcon>
      <span> {props.data.country}</span>
    </DataLine>
  </div>
);

export default Address;
