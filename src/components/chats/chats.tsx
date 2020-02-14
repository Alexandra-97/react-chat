import React, { useContext } from "react";
import classes from "./chats.module.css";
import { Head } from "./head/head";
import { ChatList } from "./chatList/chatList";
import classNames from "classnames";
import { ActiveDialogContext } from "../main";

interface IProps {
  chats?: [];
  setId(id: number): void;
}

export function Chats({ setId }: IProps) {
  const openedChat = useContext(ActiveDialogContext);

  return (
    <div
      className={classNames(classes.container, {
        [classes.hide]: openedChat !== 0
      })}
    >
      <Head />
      <ChatList setId={setId} />
    </div>
  );
}
