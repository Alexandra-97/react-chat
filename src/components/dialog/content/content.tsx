import React, { useContext } from "react";
import classes from "./content.module.css";
import { UserContext } from "../../main";
import classNames from "classnames";

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
  const currentUser = useContext(UserContext);

  return (
    <div className={classes.content}>
      {messages.map((message, index) => {
        const date = new Date(message.date);
        const time = `${date.getHours()}:${date.getMinutes()}`;

        return (
          <div key={`${index}+${message}`}>
            <div
              className={classNames(classes.messageWrap, {
                [classes.myMessageWrap]: currentUser.id === message.senderId
              })}
            >
              <div className={classes.message}>{message.text}</div>
              <div
                className={classNames(classes.time, {
                  [classes.myTime]: currentUser.id === message.senderId
                })}
              >
                {time}
              </div>
              <div
                className={classNames({
                  [classes.unread]:
                    currentUser.id === message.senderId && !message.read,
                  [classes.read]:
                    currentUser.id === message.senderId && message.read
                })}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
