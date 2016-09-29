import {connect} from "react-redux";

import {wantToAssign} from "../assignto/assignToActions";

import Receipt from "./Receipt";

const mapStateToProps = (state) => (
  {
    receipt: state.receipt
  }
);
const actions = {wantToAssign};
const ReceiptContainer = connect(mapStateToProps, actions)(Receipt);

export default ReceiptContainer;