import React from "react";
import { Card, Button } from "react-bootstrap";

const Posts = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Event</Card.Title>
          <Card.Text>
           No.of hours - Contribution
          </Card.Text>
          <Button variant="primary">Approve</Button>
          <Button variant="secondary">Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Posts;
