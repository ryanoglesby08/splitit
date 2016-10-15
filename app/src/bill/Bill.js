import React from "react";

const Bill = ({bill}) => (
  <ul>
    {Object.keys(bill).map((name) => <li key={name}>{name} - {bill[name]}</li>)}
  </ul>
);
Bill.propTypes = {
  bill: React.PropTypes.object.isRequired
};

export default Bill;