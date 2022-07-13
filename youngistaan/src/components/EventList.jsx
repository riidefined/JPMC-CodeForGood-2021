import React from "react";
import EachEventCard from "./EachEventCard";
import { useState, useEffect } from "react";
// import api from "../api/";

const EventList = (props) => {
  // useEffect(() => {
  //   // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(events));
  // }, [events]);

  let state = {
    eventname: "",
    eventdesc: "",
  };

  console.log(props);
  const [events, setEvents] = useState("");

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch("api/events/")
      .then((response) => response.json())
      .then((json) => this.setEvents({ events: json }));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  const renderEventList = events.map((event) => {
    return <EachEventCard event={event} key={event.id}></EachEventCard>;
  });

  return (
    <div class="main">
      <br></br>
      <h2>Event List</h2>
      <div className="list">
        {renderEventList.length > 0 ? renderEventList : "No Event available"}
      </div>
    </div>
  );
};

export default EventList;
