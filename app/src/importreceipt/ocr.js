import fetch from "isomorphic-fetch";

import configProvider from "../lib/configProvider";

const googleCloudVisionImageAnnotatePath = (apiKey) => `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;

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

  return configProvider.value("GOOGLE_CLOUD_API_KEY")
    .then((apiKey) =>
      fetch(googleCloudVisionImageAnnotatePath(apiKey), {
        method: "post",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(body)
      })
    )
    .then(jsonify);
};

const jsonify = (response) => {
  if (!response.ok) {
    return response.json().then((errorBody) => { throw errorBody; });
  }

  return response.json();
};

export default ocr;