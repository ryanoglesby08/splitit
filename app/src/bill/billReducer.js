import update from "react-addons-update";

import createReducer from "../createReducer";

import {types as billActions} from "./billActions";

const reducers = {};
reducers[billActions.ADD_TO_BILL] = (state, payload) => (
  update(state, {[payload.name]: {$set: payload.amount}})
);

export default createReducer(reducers);