import update from "react-addons-update";

import {types as receiptActions} from "./receiptActions";
import {types as billActions} from "../bill/billActions";

import createReducer from "../createReducer";

let nextId = 1;

const initialState = {
  moneyElements: []
};

const reducers = {};
reducers[receiptActions.RECEIVE_OCR_RESPONSE] = (state, payload) => {
  const moneyElements =
    payload.textAnnotations
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