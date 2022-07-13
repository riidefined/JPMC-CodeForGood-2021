import React, { useState } from "react";
import thumbnail1 from "../images/thumbnail1.jpg";
import thumbnail2 from "../images/thumbnail2.jpg";
import thumbnail3 from "../images/thumbnail3.jpg";
import thumbnail4 from "../images/thumbnail4.png";
import thumbnail5 from "../images/thumbnail5.jpg";
import { Link } from "react-router-dom";

export const EventCard = () => {
  let cardStyle = {
    height: "225px",
    width: "100%",
    display: "block",
  };

  const handleClick = () => {
    return <Link to="/eventinfo"></Link>;
  };

  return (
    <div>
      <div>
        <div className="row">
          <div className="col-md-4">
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
                <p className="card-text">EVENT 1</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link to="/progress">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={handleClick}
                      >
                        View More
                      </button>
                    </Link>
                  </div>
                  <small className="text-muted">10 hrs</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Thumbnail [100%x225]"
                src={thumbnail2}
                data-holder-rendered="true"
                style={cardStyle}
              />
              <div className="card-body">
                <p className="card-text">EVENT 2</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View More
                    </button>
                  </div>
                  <small className="text-muted">10 hrs</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Thumbnail [100%x225]"
                src={thumbnail3}
                data-holder-rendered="true"
                style={cardStyle}
              />
              <div className="card-body">
                <p className="card-text">EVENT 3</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View More
                    </button>
                  </div>
                  <small className="text-muted">10 hrs</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Thumbnail [100%x225]"
                src={thumbnail4}
                data-holder-rendered="true"
                style={cardStyle}
              />
              <div className="card-body">
                <p className="card-text">EVENT 4</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View More
                    </button>
                  </div>
                  <small className="text-muted">10 hrs</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Thumbnail [100%x225]"
                src={thumbnail5}
                data-holder-rendered="true"
                style={cardStyle}
              />
              <div className="card-body">
                <p className="card-text">EVENT 5</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View More
                    </button>
                  </div>
                  <small className="text-muted">10 hrs</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Thumbnail [100%x225]"
                src={thumbnail1}
                data-holder-rendered="true"
                style={cardStyle}
              />
              <div className="card-body">
                <p className="card-text">EVENT 6</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View More
                    </button>
                  </div>
                  <small className="text-muted">10 hrs</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
