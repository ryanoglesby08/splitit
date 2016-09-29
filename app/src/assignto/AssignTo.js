import React from "react";

class AssignTo extends React.Component {
  render() {
    if (this.props.isQueueEmpty) {
      return null;
    }

    const {moneyElementId, amount, addToBill} = this.props;

    return (
      <div className="assign-to">
        <div className="amount">{amount}</div>
        <input type="text" ref="person" className="person"/>
        <input type="submit" value="OK" onClick={() => addToBill(this.refs.person.value, moneyElementId, amount) }/>
      </div>
    );
  }
}
AssignTo.propTypes = {
  isQueueEmpty: React.PropTypes.bool.isRequired,
  moneyElementId: React.PropTypes.number,
  amount: React.PropTypes.string,

  addToBill: React.PropTypes.func.isRequired
};

export default AssignTo;