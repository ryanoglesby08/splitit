import fetch from "isomorphic-fetch";

// DO NOT COMMIT ME!!!
const googleCloudApiKey = "-- NOT AVAILABLE --";

const googleCloudVisionImageAnnotatePath = `https://vision.googleapis.com/v1/images:annotate?key=${googleCloudApiKey}`;

const ocr = (base64ImageByteString) => {
  const body = {
    requests: [
      {
        image: {
          content: base64ImageByteString,
        },
        features: [
          {type: "TEXT_DETECTION"}
        ]
      }
    ],
  };

  return fetch(googleCloudVisionImageAnnotatePath, {
    method: "post",
    headers: {"content-type": "application/json"},
    body: JSON.stringify(body)
  }).then(jsonify);
};

const jsonify = (response) => {
  if (!response.ok) {
    return response.json().then((errorBody) => { throw errorBody; });
  }

  return response.json();
};

export default ocr;