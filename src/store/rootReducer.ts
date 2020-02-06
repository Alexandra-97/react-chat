import { chatsReducer } from "./chatsSlice";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  chats: chatsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
