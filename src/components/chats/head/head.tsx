import React from "react";
import classes from "./head.module.css";
import { Search } from "./search/search";
import { SideMenu } from "./sideMenu/sideMenu";

export const Head: React.FC = props => {
  return (
    <div className={classes.container}>
      <SideMenu />
      <Search />
    </div>
  );
};
