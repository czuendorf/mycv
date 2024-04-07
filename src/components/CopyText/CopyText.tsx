import React, { FC, useRef } from "react";
import styles from "./CopyText.module.css";

interface CopyTextProps {
  copyText: string;
}

const CopyText: FC<CopyTextProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onCopyClick = () => {
    inputRef.current?.focus();
    inputRef.current?.select();
  }
  return (
  <div className={`${styles.CopyText} flex-1 flex`} data-testid="CopyText">
    <input ref={inputRef} data-testid="CopyTextInput" onClick={onCopyClick} className="flex flex-1 appearance-none focus:border-none outline-none" type="text" readOnly={true} value={props.copyText}></input>
  </div>
)};

export default CopyText;
