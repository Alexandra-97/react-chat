import React from "react";
import classes from "./chats.module.css";
import { Head } from "./head/head";
import { ChatList } from "./chatList/chatList";

interface IProps {
  chats?: [];
  openedChat?: number | null;
  setId(id: number): void;
}

export function Chats({ setId }: IProps) {
  return (
    <div className={classes.container}>
      <Head />
      <ChatList setId={setId} />
    </div>
  );
}
