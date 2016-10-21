import React from "react";

const Money = ({value}) => (
  <span>${value.toFixed(2)}</span>
);
Money.propTypes = {
  value: React.PropTypes.number.isRequired
};

const Bill = ({bill}) => (
  <ul>
    {Object.keys(bill).map((name) => <li key={name}>{name} - <Money value={bill[name]} /></li>)}
  </ul>
);
Bill.propTypes = {
  bill: React.PropTypes.object.isRequired
};

export default Bill;
