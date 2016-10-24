/* global FileReader */

import React from "react";
import {Link} from "react-router";

import readFileData from "./readFileData";
import ocr from "../ocr";

class ImportReceipt extends React.Component {
  constructor(props) {
    super(props);

    this.importReceipt = null;
  }

  componentDidMount() {
    const {receiveReceipt, receiveOcrResponse} = this.props;

    this.importReceipt.onchange = (event) => {
      const files = event.target.files;

      if (files && files.length > 0) {
        const file = files[0];

        readFileData(file, FileReader)
          .then(({dataUrl, content}) => {
            receiveReceipt(dataUrl);
            return content;
          })
          .then(ocr)
          .then(receiveOcrResponse);
      }
    };
  }

  render() {
    return (
      <div>
        <input type="file" accept="image/*" capture="camera" ref={(input) => this.importReceipt = input}/>

        <Link to="receipt">Go!</Link>
      </div>
    );
  }
}
ImportReceipt.propTypes = {
  receiveReceipt: React.PropTypes.func.isRequired,
  receiveOcrResponse: React.PropTypes.func.isRequired
};

export default ImportReceipt;