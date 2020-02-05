import React from "react";
import classes from "./index.module.css";
import { Chats } from "./chats/chats";
import { Dialog } from "./dialog/dialog";

export const Main: React.FC = props => {
  return (
    <div className={classes.wrapper}>
      <Chats />
      <Dialog />
    </div>
  );
};
