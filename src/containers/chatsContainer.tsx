import React, { useEffect, createContext, useContext } from "react";
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
  useDispatch
} from "react-redux";
import { RootState } from "../store/rootReducer";
import { Chats } from "../components/chats/chats";
import { loadChats } from "../store/chatsSlice";
import { UserContext } from "../components/main";
import { setDialogId } from "../store/chatsSlice";

interface IChat {
  id: number;
  lastMessage: IMessage;
  numberOfUnread: number;
  companion: IUser;
}

interface IUser {
  id: number;
  name: string;
  avatar: string;
}

interface IMessage {
  senderId: number;
  text: string;
  date: string;
  read: boolean;
}

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const ChatsContext = createContext<IChat[]>([]);

export function ChatsContainer() {
  const chats = useSelector(state => state.chats.chats);
  //const openedChat = useSelector(state => state.chats.openedChat);
  const currentUser = useContext(UserContext);
  const dispatch = useDispatch();

  function setId(id: number): void {
    dispatch(setDialogId(id));
  }

  useEffect(() => {
    dispatch(loadChats(currentUser.id));
  }, [dispatch, currentUser.id]);

  return (
    <ChatsContext.Provider value={chats}>
      <Chats setId={setId} />
    </ChatsContext.Provider>
  );
}