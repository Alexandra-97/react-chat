import React from "react";
import classes from "./input.module.css";
import { AttachButton } from "./attachButton/attachButton";
import { SendButton } from "./sendButton/sendButton";

export const Input: React.FC = props => {
  return (
    <div className={classes.input}>
      <AttachButton />
      <input placeholder="Write a message..."></input>
      <SendButton />
    </div>
  );
};
