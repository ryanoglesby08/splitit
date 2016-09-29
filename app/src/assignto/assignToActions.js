export const types = {
  WANT_TO_ASSIGN: "WANT_TO_ASSIGN"
};

export const wantToAssign = (moneyElement) => (
  {
    type: types.WANT_TO_ASSIGN,
    payload: {id: moneyElement.id, amount: moneyElement.amount}
  }
);