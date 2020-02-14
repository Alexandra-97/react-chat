import React, { createContext } from "react";
import classes from "./main.module.css";
import { ChatsContainer } from "../containers/chatsContainer";
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook
} from "react-redux";
import { RootState } from "../store/rootReducer";
import { DialogContainer } from "../containers/dialogContainer";

interface IUser {
  id: number;
  name: string;
}

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const UserContext = createContext<IUser>({ id: 0, name: "" });
export const ActiveDialogContext = createContext(0);

export const Main: React.FC = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const activeDialog = useSelector(state => state.chats.openedChat);

  return (
    <div className={classes.wrapper}>
      <UserContext.Provider value={currentUser}>
        <ActiveDialogContext.Provider value={activeDialog}>
          <ChatsContainer />
          <DialogContainer />
        </ActiveDialogContext.Provider>
      </UserContext.Provider>
    </div>
  );
};
