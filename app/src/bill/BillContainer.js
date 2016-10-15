import {connect} from "react-redux";

import Bill from "./Bill";

const mapStateToProps = (state) => ({
  bill: state.bill
});

export default connect(mapStateToProps)(Bill);

