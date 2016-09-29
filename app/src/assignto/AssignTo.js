import React from "react";

const AssignTo = ({queue}) => {
  if( typeof queue === "undefined" ) {
    return null;
  }

  return (
    <div className="assign-to-amount">{queue}</div>
  );
};
AssignTo.propTypes = {
  queue: React.PropTypes.string
};

export default AssignTo;