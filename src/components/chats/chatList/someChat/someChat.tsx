import React, { useContext } from "react";
import classes from "./someChat.module.css";
import { UserContext } from "../../../main";
import classNames from "classnames";

interface IProps {
  chat: {
    id: number;
    lastMessage: IMessage;
    numberOfUnread: number;
    companion: IUser;
  };
}

interface IUser {
  id: number;
  name: string;
  avatar: string;
}

interface IMessage {
  senderId: number;
  text: string;
  date: string;
  read: boolean;
}

export function SomeChat({ chat }: IProps) {
  const currentUser = useContext(UserContext);
  const date = new Date(chat.lastMessage.date);
  const time = `${date.getHours()}:${String(date.getMinutes()).padStart(
    2,
    "0"
  )}`;

  const myMessage = currentUser.id === chat.lastMessage.senderId;

  return (
    <div className={classes.container}>
      <img
        className={classes.avatar}
        src={chat.companion.avatar}
        alt={chat.companion.name}
      ></img>
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={classes.userName}>{chat.companion.name}</div>
          <div className={classes.rightPart}>
            <div
              className={classNames({
                [classes.unread]: myMessage && !chat.lastMessage.read,
                [classes.read]: myMessage && chat.lastMessage.read
              })}
            ></div>
            <div className={classes.time}>{time}</div>
          </div>
        </div>
        <div className={classes.message}>
          <span
            className={classNames(classes.myMessage, {
              [classes.unvisible]: !myMessage
            })}
          >
            You: {""}
          </span>
          <div className={classes.wrap}>
            {chat.lastMessage.text}
            <div
              className={classNames({
                [classes.numberOfUnread]: !myMessage && chat.numberOfUnread > 0,
                [classes.unvisible]: myMessage || chat.numberOfUnread === 0
              })}
            >
              {chat.numberOfUnread}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
