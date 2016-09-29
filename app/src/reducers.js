import {combineReducers} from "redux";

import receipt from "./receipt/receiptReducer";
import assignTo from "./assignto/assignToReducer";
import bill from "./bill/billReducer";

export default combineReducers({
  receipt,
  assignTo,
  bill
});