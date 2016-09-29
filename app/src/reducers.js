import {combineReducers} from "redux";

import receipt from "./receipt/receiptReducer";
import assignTo from "./assignto/assignToReducer";

export default combineReducers({
  receipt,
  assignTo
});