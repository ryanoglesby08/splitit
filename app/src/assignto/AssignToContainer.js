import {connect} from "react-redux";

import {assignToQueue, isQueueEmpty} from "./assignToReducer";
import {addToBill} from "../bill/billActions";

import {MaybeAssignTo} from "./AssignTo";

const mapStateToProps = (state) => {
  const moneyElementInQueue = assignToQueue(state) || {};

  return {
    isQueueEmpty: isQueueEmpty(state),
    moneyElementId: moneyElementInQueue.id,
    amount: moneyElementInQueue.amount
  };
};
const actions = {addToBill};
export default connect(mapStateToProps, actions)(MaybeAssignTo);