import React from "react";

class AssignTo extends React.Component {
  render() {
    const {queue, addToBill} = this.props;

    if( queue == null ) {
      return null;
    }

    return (
      <div className="assign-to">
        <div className="amount">{queue.text}</div>
        <input type="text" ref="person" className="person" />
        <input type="submit" value="OK" onClick={() => addToBill(this.refs.person.value, queue) } />
      </div>
    );
  }
}
AssignTo.propTypes = {
  queue: React.PropTypes.object,
  addToBill: React.PropTypes.func.isRequired
};

export default AssignTo;