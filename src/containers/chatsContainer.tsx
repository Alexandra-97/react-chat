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

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const ChatsContext = createContext([]);

export function ChatsContainer() {
  const chats = useSelector(state => state.chats.chats);
  //const openedChat = useSelector(state => state.chats.openedChat);
  const currentUser = useContext(UserContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadChats(currentUser.id));
  }, [dispatch, currentUser.id]);

  return (
    <ChatsContext.Provider value={chats}>
      <Chats />;
    </ChatsContext.Provider>
  );
}
