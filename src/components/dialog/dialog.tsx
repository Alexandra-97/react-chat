import React from "react";
import classes from "./dialog.module.css";

export const Dialog: React.FC = props => {
  return (
    <div className={classes.container}>
      <div className={classes.message}>Выберите, кому хотели бы написать</div>
    </div>
  );
};
