import React from "react"
import {Link} from "react-router";

import ReceiptContainer from "./ReceiptContainer";
import AssignToContainer from "../assignto/AssignToContainer";

const ReceiptApp = () => (
  <div>
    <ReceiptContainer />
    <AssignToContainer />

    <div className="done-link">
      <Link to="bill">Done</Link>
    </div>
  </div>
);

export default ReceiptApp;
