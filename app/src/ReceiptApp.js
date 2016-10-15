import React from "react"
import {Link} from "react-router";

import ReceiptContainer from "./receipt/ReceiptContainer";
import AssignToContainer from "./assignto/AssignToContainer";

const ReceiptApp = () => (
  <div>
    <ReceiptContainer />
    <AssignToContainer />

    <Link to="bill" className="done-link">Done</Link>
  </div>
);

export default ReceiptApp;