import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { allChats } from "../api/Api";

const initialState = {
  chats: [],
  openedChat: null
};

const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    fetchChats: (state, action) => ({ ...state, chats: action.payload })
  }
});

export const { actions, reducer: chatsReducer } = chatsSlice;

const { fetchChats } = actions;

export function loadChats() {
  return async (dispatch: Dispatch) => {
    const chats = await allChats().then(result => {
      return result;
    });
    dispatch(fetchChats(chats));
  };
}
