export const types = {
  RECEIVE_OCR_RESPONSE: "RECEIVE_OCR_RESPONSE",
  RECEIVE_RECEIPT: "RECEIVE_RECEIPT"
};

export const receiveReceipt = (imageUrl) => (
  {
    type: types.RECEIVE_RECEIPT,
    payload: imageUrl
  }
);

export const receiveOcrResponse = (response) => (
  {
    type: types.RECEIVE_OCR_RESPONSE,
    payload: response
  }
);