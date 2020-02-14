import React, { useContext } from "react";
import classes from "./message.module.css";
import classNames from "classnames";
import { UserContext } from "../../../main";

interface IProps {
  message: IMessage;
  triangle: boolean;
}

interface IMessage {
  senderId: number;
  text: string;
  date: string;
  read: boolean;
}

export const Message: React.FC<IProps> = ({ message, triangle }) => {
  const currentUser = useContext(UserContext);
  const myMessage = currentUser.id === message.senderId;
  const date = new Date(message.date);
  const time = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <div>
      <div
        className={classNames(classes.messageWrap, {
          [classes.myMessageWrap]: myMessage,
          [classes.lastMessage]: triangle && !myMessage,
          [classes.myLastMessage]: triangle && myMessage,
          [classes.series]: !triangle
        })}
      >
        <div className={classes.message}>{message.text}</div>
        <div
          className={classNames(classes.time, {
            [classes.myTime]: myMessage
          })}
        >
          {time}
        </div>
        <div
          className={classNames({
            [classes.unread]: myMessage && !message.read,
            [classes.read]: myMessage && message.read
          })}
        />
      </div>
    </div>
  );
};
