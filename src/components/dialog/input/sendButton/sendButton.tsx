import React, { useContext } from "react";
import classes from "./sendButton.module.css";
import { SendMessageContext } from "../../../../containers/dialogContainer";

export const SendButton: React.FC = props => {
  const { onSendMessage } = useContext(SendMessageContext);

  return (
    <div className={classes.sendButton}>
      <button
        onClick={() => {
          onSendMessage();
        }}
      />
    </div>
  );
};
