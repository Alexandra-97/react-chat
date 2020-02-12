import React from "react";
import classes from "./dialog.module.css";
import { Input } from "./input/input";
import { Head } from "./head/head";
import { Content } from "./content/content";

interface IProps {
  dialog?: IDialog;
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

export function Dialog({ dialog }: IProps) {
  return (
    <div className={classes.container}>
      {dialog !== undefined && dialog.id !== undefined ? (
        <>
          <Head companion={dialog.companion} />
          <Content messages={dialog.messages} />
          <Input />
        </>
      ) : (
        <div className={classes.message}>Выберите, кому хотели бы написать</div>
      )}
    </div>
  );
}
