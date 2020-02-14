import React from "react";
import classes from "./content.module.css";
import { Message } from "./message/message";
import { DateField } from "./date/date";

interface IProps {
  messages: IMessage[];
}

interface IMessage {
  senderId: number;
  text: string;
  date: string;
  read: boolean;
}

export function Content({ messages }: IProps) {
  const reverseMessages = messages.concat().reverse();

  return (
    <div className={classes.content}>
      {reverseMessages.map((message, index) => {
        const triangle =
          !reverseMessages[index - 1] ||
          reverseMessages[index - 1].senderId !== message.senderId;

        return (
          <React.Fragment key={`${index}+${message}`}>
            <Message message={message} triangle={triangle} />
            {!reverseMessages[index + 1] ||
            new Date(reverseMessages[index + 1].date).toLocaleDateString() !==
              new Date(message.date).toLocaleDateString() ? (
              <DateField date={message.date} />
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
}
