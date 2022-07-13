import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const EventInfo = (props) => {
  //console.log(props);
  const { eventname, eventdesc } = props.location.state.event;
  return (
    <div className="main">
      <div className="card center">
        <div className="content">
          <div className="header">{eventname}</div>
          <div className="desc">{eventdesc}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <Button variant="primary">Back to Events List</Button>
        </Link>
        <Link to="/">
          <Button variant="success">Apply Now</Button>
        </Link>
      </div>
    </div>
  );
};
export default EventInfo;
