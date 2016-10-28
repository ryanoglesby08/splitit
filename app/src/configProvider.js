import fetch from "isomorphic-fetch";

export const ConfigProvider = (remoteConfigProviderUrl, header) => {
  let config = false;

  return {
    value: (key) => {
      if( config ) {
        return Promise.resolve(config[key]);
      }

      return fetch(remoteConfigProviderUrl)
        .then((response) => {
          config = JSON.parse(response.headers.get(header));
          return config[key];
        });
    }
  }
};

export default new ConfigProvider("/config", "JS_ENV");