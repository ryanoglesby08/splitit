import {expect} from "chai";
import nock from "nock";

import {ConfigProvider} from '../src/configProvider';

describe("Config Provider", () => {
  let configProvider;

  beforeEach(() => {
    configProvider = ConfigProvider("http://test.host/config", "JS_ENV");
  });

  it("fetches configuration from a remote server", () => {
    nock("http://test.host")
      .get("/config")
      .reply(200, "", {
        "JS_ENV": "SOME_KEY=the-value"
      });

    return configProvider.value("SOME_KEY")
      .then((value) => expect(value).to.eql("the-value"));
  });

  it("does not fetch configuration if it has already done so", () => {
    nock("http://test.host")
      .get("/config")
      .reply(200, "", {
        "JS_ENV": "SOME_KEY=the-value,OTHER_KEY=another-value"
      });

    return configProvider.value("SOME_KEY")
      .then(() => configProvider.value("OTHER_KEY"))
      .then((otherValue) => expect(otherValue).to.eql("another-value"));
  });
});