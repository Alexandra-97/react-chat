import React from "react";
import classes from "./head.module.css";
import { Menu } from "./menu/menu";

interface IProps {
  companion: ICompanion;
}

interface ICompanion {
  id: number;
  name: string;
  avatar: string;
}

export function Head({ companion }: IProps) {
  return (
    <div className={classes.head}>
      <div className={classes.userName}>{companion.name}</div>
      <Menu />
    </div>
  );
}
