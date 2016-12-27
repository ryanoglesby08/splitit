import configProvider from "../lib/configProvider";
import googleCloudVisionApiClient from "../lib/googleCloudVisionApiClient";

import stubCloudVisionResponse from "./cloud_vision_response";

const ocr = (base64ImageByteString) => {
  return configProvider.value("USE_OCR_STUB")
    .then((useCloudVisionStub) => {
      if( useCloudVisionStub ) {
        console.log(stubCloudVisionResponse);
        return Promise.resolve(stubCloudVisionResponse);
      }

      return googleCloudVisionApiClient.imageAnnotate(base64ImageByteString);
    });
};

export default ocr;
