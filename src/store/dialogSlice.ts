import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { getDialog, sendMessages } from "../api/Api";

interface IDialog {
  id: number;
  messages: IMessage[];
  companion: ICompanion;
}

interface IMessage {
  senderId: number;
  text: string;
  date: string;
  read: boolean;
}

interface ICompanion {
  id: number;
  name: string;
  avatar: string;
}

const initialState = {
  dialog: {} as IDialog,
  changeInfo: ""
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    fetchDialog: (state, action) => ({ ...state, dialog: action.payload }),
    setChangeInfo: (state, action) => ({ ...state, changeInfo: action.payload })
  }
});

export const { actions, reducer: dialogReducer } = dialogSlice;

const { fetchDialog, setChangeInfo } = actions;

export function loadDialog(currentUserId: number, dialogId: number) {
  return async (dispatch: Dispatch) => {
    const dialog = await getDialog(currentUserId, dialogId).then(result => {
      return result;
    });
    dispatch(fetchDialog(dialog));
  };
}

export function sendMessage(
  currentUserId: number,
  openedChat: number,
  text: string
) {
  return async (dispatch: Dispatch) => {
    const answer = await sendMessages(currentUserId, openedChat, text).then(
      result => {
        return result;
      }
    );
    const dialog = await getDialog(currentUserId, openedChat).then(result => {
      return result;
    });
    dispatch(fetchDialog(dialog));
    dispatch(setChangeInfo(answer));
  };
}
