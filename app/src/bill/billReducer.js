import createReducer from "../createReducer";

import {types as billActions} from "./billActions";

const reducers = {};
reducers[billActions.ADD_TO_BILL] = (state, payload) => (
  {
    ...state,
    [payload.name]: payload.moneyElement.amount
  }
);

export default createReducer(reducers);