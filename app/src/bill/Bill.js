import React from "react";

import {getParticipantTotal} from "./billReducer";

const Money = ({value}) => (
  <span>${value.toFixed(2)}</span>
);
Money.propTypes = {
  value: React.PropTypes.number.isRequired
};

const toBillItem = (name, participantTotal, backgroundColorOffset) => {
  const level = 39 + (backgroundColorOffset * 8);
  const styles = {
    backgroundColor: `hsl(205, 100%, ${level}%)`
  };

  return (
    <li key={name} className="bill-item" style={styles}>
      {name} -- <Money value={participantTotal} />
    </li>
  );
};

const Bill = ({bill}) => (
  <ul className="bill">
    {Object.keys(bill).map((name, index) => toBillItem(name, getParticipantTotal(bill, name), index))}
  </ul>
);
Bill.propTypes = {
  bill: React.PropTypes.object.isRequired
};

export default Bill;
