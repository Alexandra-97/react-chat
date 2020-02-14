import React from "react";
import classes from "./date.module.css";

interface IProps {
  date: string;
}

export const DateField: React.FC<IProps> = ({ date }) => {
  const messageDate = new Date(date);
  const now = new Date();
  const dateWithYear = messageDate.toLocaleString("en", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const dateWithoutYear = messageDate.toLocaleString("en", {
    month: "long",
    day: "numeric"
  });

  return (
    <div className={classes.date}>
      {messageDate.getFullYear() === now.getFullYear()
        ? dateWithoutYear
        : dateWithYear}
    </div>
  );
};
