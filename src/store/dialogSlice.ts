import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { getDialog } from "../api/Api";

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
  dialog: {} as IDialog
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    fetchDialog: (state, action) => ({ ...state, dialog: action.payload })
  }
});

export const { actions, reducer: dialogReducer } = dialogSlice;

const { fetchDialog } = actions;

export function loadDialog(currentUserId: number, dialogId: number) {
  return async (dispatch: Dispatch) => {
    const dialog = await getDialog(currentUserId, dialogId).then(result => {
      return result;
    });
    dispatch(fetchDialog(dialog));
  };
}
