const defaultReducer = (state) => state;

const createReducer = (reducers, initialState = {}) => (state = initialState, action = {}) => {
  const reducer = reducers[action.type] || defaultReducer;

  return reducer(state, action.payload);
};

export default createReducer;