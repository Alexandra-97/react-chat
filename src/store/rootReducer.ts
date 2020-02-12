import { chatsReducer } from "./chatsSlice";
import { userReducer } from "./userSlice";
import { combineReducers } from "redux";
import { dialogReducer } from "./dialogSlice";

export const rootReducer = combineReducers({
  chats: chatsReducer,
  user: userReducer,
  dialog: dialogReducer
});

export type RootState = ReturnType<typeof rootReducer>;
