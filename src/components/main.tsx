import React, { createContext } from "react";
import classes from "./main.module.css";
import { Dialog } from "./dialog/dialog";
import { ChatsContainer } from "../containers/chatsContainer";
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook
} from "react-redux";
import { RootState } from "../store/rootReducer";

interface IUser {
  id: number;
  name: string;
}

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const ChatsContext = createContext([]);
export const UserContext = createContext<IUser>({ id: 0, name: "" });

export const Main: React.FC = props => {
  const currentUser = useSelector(state => state.user.currentUser);

  return (
    <div className={classes.wrapper}>
      <UserContext.Provider value={currentUser}>
        <ChatsContainer />
        <Dialog />
      </UserContext.Provider>
    </div>
  );
};
