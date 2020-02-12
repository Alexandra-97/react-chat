import React, { useContext } from "react";
import classes from "./chatList.module.css";
import { SomeChat } from "./someChat/someChat";
import { ChatsContext } from "../../../containers/chatsContainer";

interface IProps {
  setId(id: number): void;
}

interface IChat {
  id: number;
  lastMessage: IMessage;
  numberOfUnread: number;
  companion: IUser;
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

export function ChatList({ setId }: IProps) {
  const chats = useContext<IChat[]>(ChatsContext);

  return (
    <div className={classes.list}>
      {chats !== undefined
        ? chats.map((chat, index) => {
            return (
              <div
                className={classes.wrapper}
                key={`${index}+${chat}`}
                onClick={() => {
                  setId(chat.id);
                }}
              >
                <SomeChat chat={chat} key={`${index}+${chat}`} />
              </div>
            );
          })
        : null}
    </div>
  );
}
