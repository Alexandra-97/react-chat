import React, { useContext } from "react";
import classes from "./someChat.module.css";
import { UserContext } from "../../../main";
import cn from "classnames";

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
  lastSender: number;
  text: string;
  date: string;
  read: boolean;
}

export function SomeChat({ chat }: IProps) {
  const currentUser = useContext(UserContext);
  const date = new Date(chat.lastMessage.date);
  const time = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <img
          className={classes.avatar}
          src={chat.companion.avatar}
          alt={chat.companion.name}
        ></img>
        <div className={classes.content}>
          <div className={classes.header}>
            <div className={classes.userName}>{chat.companion.name}</div>
            <div className={classes.time}>{time}</div>
          </div>
          <div className={classes.message}>{chat.lastMessage.text}</div>
        </div>
      </div>
    </div>
  );
}
