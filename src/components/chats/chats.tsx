import React from "react";
import classes from "./chats.module.css";
import { Head } from "./head/head";
import { ChatList } from "./chatList/chatList";

interface IProps {
  chats?: [];
  openedChat?: number | null;
}

export function Chats({ chats, openedChat }: IProps) {
  return (
    <div className={classes.container}>
      <Head />
      <ChatList />
    </div>
  );
}
