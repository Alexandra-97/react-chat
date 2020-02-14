import React, { useContext } from "react";
import classes from "./dialog.module.css";
import { Input } from "./input/input";
import { Head } from "./head/head";
import { Content } from "./content/content";
import { ActiveDialogContext } from "../main";
import classNames from "classnames";

interface IProps {
  dialog?: IDialog;
  setId(id: number): void;
}

interface IDialog {
  id: number;
  messages: IMessage[];
  companion: ICompanion;
}

interface IMessage {
  senderId: number;
  text: string;
  date: string;
  read: boolean;
}

interface ICompanion {
  id: number;
  name: string;
  avatar: string;
}

export function Dialog({ dialog, setId }: IProps) {
  const openedChat = useContext(ActiveDialogContext);

  return (
    <div
      className={classNames(classes.container, {
        [classes.display]: openedChat !== 0
      })}
    >
      {dialog !== undefined && dialog.id !== undefined ? (
        <>
          <Head companion={dialog.companion} setId={setId} />
          <Content messages={dialog.messages} />
          <Input />
        </>
      ) : (
        <div className={classes.message}>Выберите, кому хотели бы написать</div>
      )}
    </div>
  );
}
