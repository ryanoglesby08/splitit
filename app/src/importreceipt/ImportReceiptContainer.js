import {connect} from "react-redux";

import {receiveReceipt, receiveOcrResponse} from "../receipt/receiptActions";

import ImportReceipt from "./ImportReceipt";

const mapStateToProps = () => ({});
const actions = {receiveReceipt, receiveOcrResponse};

const ImportReceiptContainer = connect(mapStateToProps, actions)(ImportReceipt);

export default ImportReceiptContainer;