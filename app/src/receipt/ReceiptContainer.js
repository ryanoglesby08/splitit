import {connect} from "react-redux";

import Receipt from "./Receipt";

const mapStateToProps = (state) => (
  {
    receipt: state.receipt
  }
);
const ReceiptContainer = connect(mapStateToProps)(Receipt);

export default ReceiptContainer;