import React, { useEffect, useContext } from "react";
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
  useDispatch
} from "react-redux";
import { RootState } from "../store/rootReducer";
import { loadDialog } from "../store/dialogSlice";
import { UserContext } from "../components/main";
import { Dialog } from "../components/dialog/dialog";
import { setDialogId } from "../store/chatsSlice";

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export function DialogContainer() {
  const openedChat = useSelector(state => state.chats.openedChat);
  const changeInfo: string = useSelector(state => state.chats.changeInfo);
  const dialog = useSelector(state => state.dialog.dialog);
  const currentUser = useContext(UserContext);
  const dispatch = useDispatch();

  function setId(id: number): void {
    dispatch(setDialogId(id));
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

  return <Dialog dialog={dialog} setId={setId} />;
}
