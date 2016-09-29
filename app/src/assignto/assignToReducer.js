import {types as assignToActions} from "./assignToActions";
import {types as billActions} from "../bill/billActions";

import createReducer from "../createReducer";

export const assignToQueue = (state) => state.assignTo.queue;

const initialState = {
  queue: null
};
const reducers = {};
reducers[assignToActions.WANT_TO_ASSIGN] = (state, payload) => (
  {
    ...state,
    queue: payload
  }
);
reducers[billActions.ADD_TO_BILL] = (state) => (
  {
    ...state,
    queue: null
  }
);

export default createReducer(reducers, initialState);