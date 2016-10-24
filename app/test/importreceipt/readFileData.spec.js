import {expect} from "chai";

import {File, FileReader} from "file-api";

import readFileData from "../../src/importreceipt/readFileData";

describe("readFileData", () => {
  it("reads the contents from a file", () => {
    const file = new File(`${process.cwd()}/app/test/support/test_file.txt`);

    return readFileData(file, FileReader).then((data) =>
      expect(data).to.eql({dataUrl: "data:text/plain;charset=utf-8,Hello world", content: "Hello world"})
    );
  });
});