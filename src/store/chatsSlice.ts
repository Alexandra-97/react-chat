import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { allChats, addMessage } from "../api/Api";

const initialState = {
  chats: [],
  openedChat: 0,
  changeInfo: ""
};

const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    fetchChats: (state, action) => ({ ...state, chats: action.payload }),
    setChatId: (state, action) => ({ ...state, openedChat: action.payload }),
    setChangeInfo: (state, action) => ({ ...state, changeInfo: action.payload })
  }
});

export const { actions, reducer: chatsReducer } = chatsSlice;

const { fetchChats, setChatId, setChangeInfo } = actions;

export function loadChats(currentUserId: number) {
  return async (dispatch: Dispatch) => {
    const chats = await allChats(currentUserId).then(result => {
      return result;
    });
    dispatch(fetchChats(chats));
  };
}

export function generateMessages(currentUserId: number) {
  return async (dispatch: Dispatch) => {
    const answer = await addMessage(currentUserId).then(result => {
      return result;
    });
    const chats = await allChats(currentUserId).then(result => {
      return result;
    });
    dispatch(fetchChats(chats));
    dispatch(setChangeInfo(answer));
  };
}

export function setDialogId(dialogId: number) {
  return async (dispatch: Dispatch) => {
    dispatch(setChatId(dialogId));
  };
}
