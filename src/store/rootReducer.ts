import { chatsReducer } from "./chatsSlice";
import { userReducer } from "./userSlice";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  chats: chatsReducer,
  user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;
