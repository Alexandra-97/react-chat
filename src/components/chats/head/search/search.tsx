import React from "react";
import classes from "./search.module.css";

export const Search: React.FC = props => {
  return <input className={classes.field} placeholder="Search"></input>;
};
