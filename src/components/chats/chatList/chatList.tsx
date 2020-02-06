import React, { useContext } from "react";
import classes from "./chatList.module.css";
import { SomeChat } from "./someChat/someChat";
import { ChatsContext } from "../../../containers/chatsContainer";

export const ChatList: React.FC = props => {
  const chats = useContext(ChatsContext);

  return (
    <div className={classes.list}>
      {chats.map(chat => {
        return <SomeChat chat={chat} />;
      })}
    </div>
  );
};
