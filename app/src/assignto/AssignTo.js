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
  constructor(props) {
    super(props);

    this.newNameInput = null;
    this.state = {
      newName: ""
    };
    this.setNewName = this.setNewName.bind(this);
  }

  componentDidMount() {
    this.newNameInput.focus();
  }

  setNewName(event) {
    this.setState({
      newName: event.target.value
    });
  }

  render() {
    const {moneyElementId, amount, addToBill} = this.props;

    return (
      <div className="assign-to">
        <header>Add {amount} to...</header>

        <input type="text" value={this.state.newName} className="new-name" ref={(newNameInput) => this.newNameInput = newNameInput} onChange={this.setNewName}/>
        <input type="submit" value="OK" className="ok" onClick={() => addToBill(this.state.newName, moneyElementId, amount)}/>
      </div>
    );
  }
}
AssignTo.propTypes = {
  moneyElementId: React.PropTypes.number,
  amount: React.PropTypes.string,

  addToBill: React.PropTypes.func.isRequired
};

export default AssignTo;
