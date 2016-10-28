import {expect} from "chai";
import nock from "nock";

import {ConfigProvider} from '../../src/lib/configProvider';

describe("Config Provider", () => {
  let configProvider;

  beforeEach(() => {
    configProvider = ConfigProvider("http://test.host/config", "JS-ENV");
  });

  it("fetches configuration from a remote server", () => {
    nock("http://test.host")
      .head("/config")
      .reply(200, "", {
        "JS-ENV": '{"SOME_KEY": "the-value"}'
      });

    return configProvider.value("SOME_KEY")
      .then((value) => expect(value).to.eql("the-value"));
  });

  it("memoizes the config values after an initial remote fetch", () => {
    nock("http://test.host")
      .head("/config")
      .reply(200, "", {
        "JS-ENV": '{"SOME_KEY": "the-value", "OTHER_KEY": "another value"}'
      });

    return configProvider.value("SOME_KEY")
      .then(() => configProvider.value("OTHER_KEY"))
      .then((otherValue) => expect(otherValue).to.eql("another value"));
  });
});