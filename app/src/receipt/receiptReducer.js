import {types as receiptActions} from "./receiptActions";

import createReducer from "../createReducer";

const reducers = {};

reducers[receiptActions.RECEIVE_OCR_RESPONSE] = (state, payload) => {
  const moneyElements =
    payload.textAnnotations
      .filter((annotation) => annotation.description.startsWith("$"))
      .map((annotation) => (
        {
          text: annotation.description,
          polygon: annotation.boundingPoly.vertices
        }
      ));

  return {
    ...state,
    moneyElements
  }
};

export default createReducer(reducers);