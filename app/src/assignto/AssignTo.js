import React from "react";

export const MaybeAssignTo = ({isQueueEmpty, ...props}) => {
  if (isQueueEmpty) {
    return null;
  }

  return <AssignTo {...props} />
};
MaybeAssignTo.propTypes = {
  isQueueEmpty: React.PropTypes.bool.isRequired
};


class AssignTo extends React.Component {
  render() {
    const {moneyElementId, amount, addToBill} = this.props;

    return (
      <section className="assign-to">
        <div className="amount">Add {amount} to...</div>

        <input type="text" ref="person" className="person"/>
        <input type="submit" value="OK" className="ok" onClick={() => addToBill(this.refs.person.value, moneyElementId, amount) }/>
      </section>
    );
  }
}
AssignTo.propTypes = {
  moneyElementId: React.PropTypes.number,
  amount: React.PropTypes.string,

  addToBill: React.PropTypes.func.isRequired
};

export default AssignTo;