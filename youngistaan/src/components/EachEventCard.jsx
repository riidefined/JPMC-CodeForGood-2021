import React from "react";
import { Link } from "react-router-dom";
import thumbnail1 from "../images/thumbnail1.jpg";
import EventInfo from "./EventInfo";
const EachEventCard = (props) => {
  
  let cardStyle = {
    height: "225px",
    width: "100%",
    display: "block",
  };

  const { id, eventname, eventdesc } = props.event;

  const renderEventInfo = props.events.map((event) => {
    return <EventInfo event={event} key={event.id}></EventInfo>;
  });

  return (
    <div className="item">
      <div className="content">
        <Link
          to={{ pathname: `/event/${id}`, state: { event: props.event } }}
        >
          <div className="header">{eventname}</div>
          <div>{eventdesc}</div>
        </Link>
        <div>
        <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Thumbnail [100%x225]"
                style={cardStyle}
                src={thumbnail1}
                data-holder-rendered="true"
              />
              <div className="card-body">
                <p className="card-text">EVENT </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={
                        renderEventInfo.length > 0
                          ? renderEventInfo
                          : "No Event available"
                      }
                    >
                      View More
                    </button>
                  </div>
                  <small className="text-muted">10 hrs</small>
                </div>
              </div>
            </div>
            <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={() => props.clickHandler(id)}
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EachEventCard;
// props.clickHandler(id)
