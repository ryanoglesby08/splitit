/* global FileReader */

import React from "react";
import {Link} from "react-router";

import ocr from "../ocr";

class ImportReceipt extends React.Component {
  constructor(props) {
    super(props);

    this.importReceipt = null;
  }

  componentDidMount() {
    const {receiveReceipt, receiveOcrResponse} = this.props;

    this.importReceipt.onchange = (event) => {
      // Get a reference to the taken picture or chosen file
      const files = event.target.files;
      let file;

      if (files && files.length > 0) {
        file = files[0];

        const reader = new FileReader();
        reader.addEventListener("loadend", function () {
          receiveReceipt(reader.result);

          const base64ImageData = reader.result.substr(reader.result.indexOf(',') + 1);

          ocr(base64ImageData).then(receiveOcrResponse);
        });
        reader.readAsDataURL(file);
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