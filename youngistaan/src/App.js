import "./App.css";
import React, { Component } from "react";
import { Header } from "./components/Header";
import { Events } from "./components/Events";
import Register from "./components/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./components/SignIn";
import createClass from "create-react-class";
import Leaderboard from "./components/Leaderboard.jsx";
// import { AddEvent } from "./components/AddEvent";
// import { uuid } from "uuidv4";

// import { EventCard } from "./components/EventCard";
import BasicTable from "./components/BasicTable";
import Posts from "./components/Posts";
import EventList from "./components/EventList";
import Validate from "./components/Validate";
import InfoForm from "./components/infoForm";
import { EventCard } from "./components/EventCard";
// import Leaderboard from "./components/Leaderboard";

function App() {
  // const addEventHandler = async (event) => {
  //   console.log(event);
  //   const request = {
  //     id: uuid(),
  //     ...event,
  //   };
  //   const response = api.post("/events", request);
  //   setEvents([...events, response.data]);
  //   console.log(response);
  // };

  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <Events />
                </>
              );
            }}
          ></Route>

          <Route path="/register">
            <Register />
          </Route>
          <Route path="/info">
            <InfoForm />
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/dashboard">
            <EventCard />
          </Route>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
          <Route path="/progress">
            <Validate />
          </Route>
          <Route path="/basictable">
            <BasicTable />
          </Route>
          {/* <Route
          render={(props) => (
            <AddEvent {...props}/>
          )}
        ></Route> */}
          {/* <Route path="/Leaderboard">
            <Leaderboard />
          </Route> */}
        </Switch>
      </Router>
      {/* <BasicTable /> */}
      {/* <Posts /> */}
      {/* <Validate /> */}
      {/* <Leaderboard /> */}
    </>
  );
}

export default App;
