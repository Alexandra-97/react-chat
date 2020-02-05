import React from "react";
import classes from "./chatList.module.css";
import { SomeChat } from "./someChat/someChat";

export const ChatList: React.FC = props => {
  return (
    <div className={classes.list}>
      <SomeChat />
      <SomeChat />
    </div>
  );
};
