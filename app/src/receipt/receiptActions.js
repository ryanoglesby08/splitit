export const types = {
  RECEIVE_OCR_RESPONSE: "RECEIVE_OCR_RESPONSE"
};

export const receiveOcrResponse = (response) => (
  {
    type: types.RECEIVE_OCR_RESPONSE,
    payload: response
  }
);