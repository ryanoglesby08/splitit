import {connect} from "react-redux";

import {assignToQueue} from "./assignToReducer";
import {addToBill} from "../bill/billActions";

import AssignTo from "./AssignTo";

const mapStateToProps = (state) => ({
  queue: assignToQueue(state)
});
const actions = {addToBill};
export default connect(mapStateToProps, actions)(AssignTo);