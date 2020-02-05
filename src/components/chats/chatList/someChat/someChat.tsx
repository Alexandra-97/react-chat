import React from "react";
import classes from "./someChat.module.css";

export const SomeChat: React.FC = props => {
  return (
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
  );
};
