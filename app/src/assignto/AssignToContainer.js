import {connect} from "react-redux";

import {assignToQueue} from "./assignToReducer";

import AssignTo from "./AssignTo";

const mapStateToProps = (state) => ({
  queue: assignToQueue(state)
});
export default connect(mapStateToProps)(AssignTo);