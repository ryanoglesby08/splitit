import {types as receiptActions} from "./receiptActions";

const defaultReducer = (state) => state;

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


export default (state = {}, action = {}) => {
  const reducer = reducers[action.type] || defaultReducer;

  return reducer(state, action.payload);
};