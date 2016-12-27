import fetch from "isomorphic-fetch";

import configProvider from "./configProvider";

const jsonify = (response) => {
  if (!response.ok) {
    return response.json().then((errorBody) => { throw errorBody; });
  }

  return response.json();
};

const googleCloudVisionApiClient = {
  imageAnnotate: (base64ImageByteString) => {
    const body = {
      requests: [
        {
          image: {
            content: base64ImageByteString,
          },
          features: [{type: "TEXT_DETECTION"}]
        }
      ],
    };

    return configProvider.value("GOOGLE_CLOUD_API_KEY")
      .then((apiKey) =>
        fetch(`https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`, {
          method: "post",
          headers: {"content-type": "application/json"},
          body: JSON.stringify(body)
        })
      )
      .then(jsonify);
  }
};

export default googleCloudVisionApiClient;
