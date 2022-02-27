import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const AdminEdit = () => {
  return (
    <div className="spacer">
      <Container className="admin-container">
        <h1>This is the Admin page!</h1>
        <h6>
          Change all of the fields you wish to edit and click save. <br />
          Log out of Admin to see your new changes!
        </h6>
        <Form>
          <Form.Group>
            <Form.Label>Home Page Image</Form.Label>
            <Form.Control />
            <Form.Text>Enter image URL</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Home Page Paragraph 1</Form.Label>
            <Form.Control />
            <Form.Text>Enter text</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Home Page Paragraph 2</Form.Label>
            <Form.Control />
            <Form.Text>Enter text</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Home Page Paragraph 3</Form.Label>
            <Form.Control />
            <Form.Text>Enter text</Form.Text>
          </Form.Group>
          <Button type="submit">Save</Button>
        </Form>
      </Container>
    </div>
  );
};

export default AdminEdit;
