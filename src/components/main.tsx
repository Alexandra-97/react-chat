import React from "react";
import classes from "./main.module.css";
import { Dialog } from "./dialog/dialog";
import { ChatsContainer } from "../containers/chatsContainer";

export const Main: React.FC = props => {
  return (
    <div className={classes.wrapper}>
      <ChatsContainer />
      <Dialog />
    </div>
  );
};
