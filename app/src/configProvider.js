import fetch from "isomorphic-fetch";

const parseConfig = (configHeader) => (
  configHeader.split(",").reduce((config, property) => {
    const [key, value] = property.split("=");

    return {...config, [key]: value};
  }, {})
);

export const ConfigProvider = (remoteConfigProviderUrl, header) => {
  let config = false;

  return {
    value: (key) => {
      if( config ) {
        return Promise.resolve(config[key]);
      }

      return fetch(remoteConfigProviderUrl)
        .then((response) => {
          config = parseConfig(response.headers.get(header));
          return config[key];
        });
    }
  }
};

export default new ConfigProvider("/config", "JS_ENV");