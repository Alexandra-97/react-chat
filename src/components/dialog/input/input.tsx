import React, { useContext } from "react";
import classes from "./input.module.css";
import { AttachButton } from "./attachButton/attachButton";
import { SendButton } from "./sendButton/sendButton";
import { SendMessageContext } from "../../../containers/dialogContainer";

interface IProps {
  onTypeMessage(e: React.ChangeEvent<HTMLInputElement>): void;
  value: string;
}

export function Input({ onTypeMessage, value }: IProps) {
  const { onSendMessage } = useContext(SendMessageContext);

  return (
    <div className={classes.input}>
      <AttachButton />
      <input
        value={value}
        placeholder="Write a message..."
        onChange={e => {
          onTypeMessage(e);
        }}
        onKeyPress={e => {
          if (e.key === "Enter") {
            onSendMessage();
          }
        }}
      ></input>
      <SendButton />
    </div>
  );
}
