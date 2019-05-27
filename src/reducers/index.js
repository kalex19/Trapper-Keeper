import { combineReducers } from "redux";
import { errorReducer } from "./errorReducer";
import { loadingReducer } from "./loadingReducer";
import { notesReducer } from "./notesReducer";

const rootReducer = combineReducers({
  notes: notesReducer,
  loading: loadingReducer,
  error: errorReducer
});

export default rootReducer;