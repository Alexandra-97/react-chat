import React from "react";
import classes from "./menu.module.css";

export const Menu: React.FC = props => {
  return (
    <>
      <div className={classes.menu} tabIndex={1}>
        <span />
      </div>
      <ul className={classes.menuList}>
        <li>View profile</li>
        <li>Disable notifications</li>
        <li>Edit contact</li>
        <li>Delete contact</li>
      </ul>
    </>
  );
};
