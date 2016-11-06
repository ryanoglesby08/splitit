import {connect} from "react-redux";

import {receiveReceipt, receiveOcrResponse} from "../receipt/receiptActions";

import ImportReceipt from "./ImportReceipt";

const actions = {receiveReceipt, receiveOcrResponse};

const ImportReceiptContainer = connect(null, actions)(ImportReceipt);

export default ImportReceiptContainer;