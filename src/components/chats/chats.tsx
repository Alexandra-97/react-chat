import React from "react";
import classes from "./chats.module.css";
import { Head } from "./head/head";
import { ChatList } from "./chatList/chatList";

export const Chats: React.FC = props => {
  return (
    <div className={classes.container}>
      <Head />
      <ChatList />
    </div>
  );
};
