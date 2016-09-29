import {types as assignToActions} from "./assignToActions";

import createReducer from "../createReducer";

export const assignToQueue = (state) => state.assignTo.queue;


const reducers = {};
reducers[assignToActions.WANT_TO_ASSIGN] = (state, payload) => (
  {
    ...state,
    queue: payload
  }
);

export default createReducer(reducers)