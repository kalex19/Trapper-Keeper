import { combineReducers } from "redux";
import { errors } from "./errorReducer";
import { isLoading } from "./loadingReducer";
import { notes } from "./notesReducer";

const rootReducer = combineReducers({
  notes: notes,
  loading: isLoading,
  error: errors
});

export default rootReducer;