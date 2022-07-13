import React from 'react'
import { Form, Button } from "react-bootstrap";

const Validate = () => {
  return (
    <div className="container-fluid">
      <h2>Contribution</h2>
    <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Event details</Form.Label>
    <Form.Control type="text" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Number of hours contributed</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Describe your work</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Upload image" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form>
    </div>
  )
}

export default Validate;



