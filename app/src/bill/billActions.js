export const types = {
  ADD_TO_BILL: "ADD_TO_BILL"
};

export const addToBill = (name, moneyElement) => (
  {
    type: types.ADD_TO_BILL,
    payload: {name, moneyElement}
  }
);