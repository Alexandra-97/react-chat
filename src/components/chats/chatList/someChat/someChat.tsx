import React from "react";
import classes from "./someChat.module.css";

interface IProps {
  chat: {};
}

export function SomeChat({ chat }: IProps) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.avatar}></div>
        <div className={classes.content}>
          <div className={classes.header}>
            <div className={classes.userName}>Leonid</div>
            <div className={classes.time}>19:26</div>
          </div>
          <div className={classes.message}>Придёшь сегодня на игру?</div>
        </div>
      </div>
    </div>
  );
}
