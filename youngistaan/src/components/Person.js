import React from "react";
var count = 0;
const Person = (props) => {
  return (
    <li className="Person">
      {(count += 1)}.<div className="Player">{props.name}</div>
      <div className="mmr">{props.mmr}</div>
    </li>
  );
};
export default Person;