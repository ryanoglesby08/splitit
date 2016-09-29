export const types = {
  WANT_TO_ASSIGN: "WANT_TO_ASSIGN"
};

export const wantToAssign = (amount) => (
  {
    type: types.WANT_TO_ASSIGN,
    payload: amount
  }
);