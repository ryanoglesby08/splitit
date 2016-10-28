import update from "react-addons-update";

import {types as receiptActions} from "./receiptActions";
import {types as billActions} from "../bill/billActions";

import createReducer from "../lib/createReducer";

let nextId = 1;

const initialState = {
  moneyElements: [],
  image: ""
};

const reducers = {};

reducers[receiptActions.RECEIVE_RECEIPT] = (state, payload) => (
  update(state, {image: {$set: payload}})
);

reducers[receiptActions.RECEIVE_OCR_RESPONSE] = (state, payload) => {
  const moneyElements =
    payload.responses[0].textAnnotations
      .filter((annotation) => annotation.description.startsWith("$"))
      .map((annotation) => (
        {
          id: nextId++,
          amount: annotation.description,
          polygon: annotation.boundingPoly.vertices
        }
      ));

  return update(state, {$merge: {moneyElements}});
};

reducers[billActions.ADD_TO_BILL] = (state, payload) => (
  update(state, {moneyElements: {$apply: (moneyElements) => moneyElements.filter((element) => element.id !== payload.moneyElementId)}})
);


export default createReducer(reducers, initialState);