import React, { useEffect, createContext } from "react";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { Chats } from "../components/chats/chats";
import { loadChats } from "../store/chatsSlice";

interface State {
  chats: [];
  openedChat: number | null;
}

export const ChatsContext = createContext([]);

export function ChatsContainer() {
  const typedUseSelector: TypedUseSelectorHook<State> = useSelector;
  const chats = typedUseSelector(state => state.chats);
  const openedChat = typedUseSelector(state => state.openedChat);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadChats());
  }, [dispatch]);

  return (
    <ChatsContext.Provider value={chats}>
      <Chats />;
    </ChatsContext.Provider>
  );
}
