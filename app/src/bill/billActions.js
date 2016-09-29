export const types = {
  ADD_TO_BILL: "ADD_TO_BILL"
};

export const addToBill = (name, moneyElementId, amount) => (
  {
    type: types.ADD_TO_BILL,
    payload: {name, moneyElementId, amount}
  }
);