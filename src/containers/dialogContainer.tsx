import React, { useEffect, useContext, useState, createContext } from "react";
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
  useDispatch
} from "react-redux";
import { RootState } from "../store/rootReducer";
import { loadDialog, sendMessage } from "../store/dialogSlice";
import { UserContext } from "../components/main";
import { Dialog } from "../components/dialog/dialog";
import { setDialogId } from "../store/chatsSlice";

interface SendMessage {
  onSendMessage(): void;
}

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const SendMessageContext = createContext({} as SendMessage);

export function DialogContainer() {
  const [messageText, setMessageText] = useState("");

  const openedChat = useSelector(state => state.chats.openedChat);
  const changeInfo: string = useSelector(state => state.chats.changeInfo);
  const dialog = useSelector(state => state.dialog.dialog);
  const currentUser = useContext(UserContext);
  const dispatch = useDispatch();

  function setId(id: number): void {
    dispatch(setDialogId(id));
  }

  function onTypeMessage(e: React.ChangeEvent<HTMLInputElement>): void {
    setMessageText(e.target.value);
  }

  function onSendMessage(): void {
    if (messageText.length !== 0) {
      dispatch(sendMessage(currentUser.id, openedChat, messageText));
      setMessageText("");
    }
  }

  useEffect(() => {
    if (openedChat !== 0) {
      dispatch(loadDialog(currentUser.id, openedChat));
    }
  }, [dispatch, openedChat, currentUser.id]);

  useEffect(() => {
    if (openedChat === Number(changeInfo.split(",")[0])) {
      dispatch(loadDialog(currentUser.id, openedChat));
    }
  }, [dispatch, openedChat, currentUser.id, changeInfo]);

  return (
    <SendMessageContext.Provider value={{ onSendMessage }}>
      <Dialog
        dialog={dialog}
        setId={setId}
        onTypeMessage={onTypeMessage}
        value={messageText}
      />
    </SendMessageContext.Provider>
  );
}
