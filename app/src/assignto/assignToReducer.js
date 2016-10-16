import update from "react-addons-update";

import {types as assignToActions} from "./assignToActions";
import {types as billActions} from "../bill/billActions";

import createReducer from "../createReducer";

export const assignToQueue = (state) => state.assignTo.queue;
export const isQueueEmpty = (state) => assignToQueue(state) == null;

const initialState = {
  queue: null
};
const reducers = {};
reducers[assignToActions.WANT_TO_ASSIGN] = (state, payload) => (
  update(state, {queue: {$set: payload}})
);
reducers[billActions.ADD_TO_BILL] = (state) => (
  update(state, {queue: {$set: null}})
);

export default createReducer(reducers, initialState);