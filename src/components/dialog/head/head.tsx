import React from "react";
import classes from "./head.module.css";
import { Menu } from "./menu/menu";

interface IProps {
  companion: ICompanion;
  setId(id: number): void;
}

interface ICompanion {
  id: number;
  name: string;
  avatar: string;
}

export function Head({ companion, setId }: IProps) {
  return (
    <div className={classes.head}>
      <div className={classes.leftPart}>
        <div
          className={classes.arrow}
          onClick={() => {
            setId(0);
          }}
        />
        <img
          className={classes.avatar}
          alt={companion.name}
          src={companion.avatar}
        />
        <div className={classes.userName}>{companion.name}</div>
      </div>
      <Menu />
    </div>
  );
}
