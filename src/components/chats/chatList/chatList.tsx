import React, { useContext } from "react";
import classes from "./chatList.module.css";
import { SomeChat } from "./someChat/someChat";
import { ChatsContext } from "../../../containers/chatsContainer";

export const ChatList: React.FC = () => {
  const chats = useContext(ChatsContext);

  return (
    <div className={classes.list}>
      {chats !== undefined
        ? chats.map((chat, index) => {
            return <SomeChat chat={chat} key={`${index}+${chat}`} />;
          })
        : null}
    </div>
  );
};
