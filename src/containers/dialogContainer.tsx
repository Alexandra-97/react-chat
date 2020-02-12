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

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export function DialogContainer() {
  const openedChat = useSelector(state => state.chats.openedChat);
  const dialog = useSelector(state => state.dialog.dialog);
  const currentUser = useContext(UserContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (openedChat !== null) {
      dispatch(loadDialog(currentUser.id, openedChat));
    }
  }, [dispatch, openedChat, currentUser.id]);

  return <Dialog dialog={dialog} />;
}
