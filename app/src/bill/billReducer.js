import update from "react-addons-update";

import createReducer from "../lib/createReducer";

import {types as billActions} from "./billActions";

export const getParticipantTotal = (bill, participantName) => bill[participantName];

const reducers = {};

const addToParticipantsBill = (totalAmount, amountToAdd) => (totalAmount || 0) + parseFloat(amountToAdd.substring(1));
reducers[billActions.ADD_TO_BILL] = (state, payload) => (
  update(state, {[payload.name]: {$apply: (totalAmount) => addToParticipantsBill(totalAmount, payload.amount)}})
);

export default createReducer(reducers);
