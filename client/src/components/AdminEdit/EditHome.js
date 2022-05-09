import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { UPDATE_HOMEPAGE } from "../../utils/mutations";
import { GET_HOMEPAGE } from "../../utils/queries";
import { useQuery, useMutation } from "@apollo/react-hooks";
// Components
import ImageUploader from "../../components/ImageUploader";

const EditHome = () => {
  const { data } = useQuery(GET_HOMEPAGE);
  const [updateHomePage] = useMutation(UPDATE_HOMEPAGE);
  const [image, setImage] = useState("");
  const [formState, setFormState] = useState({
    para1: "",
    para2: "",
    para3: "",
  });

  const homePage = data?.homePage || {};
  const id = data?.homePage._id;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSave = async (event) => {
    event.preventDefault();

    await updateHomePage({
      variables: {
        id: id,
        hero_image: image,
        home_paragraph1: formState.para1,
        home_paragraph2: formState.para2,
        home_paragraph3: formState.para3,
      },
      refetchQueries: [{ query: GET_HOMEPAGE }],
    });

    document.getElementById("ID").reset();
  };

  return (
    <>
      <Form id="ID">
        <Container
          style={{
            borderRadius: "15px",
            boxShadow: "6px 2px 15px #00000040",
            marginTop: "25px",
            padding: "15px 25px 25px 25px",
          }}
        >
          <center>
            <h4>Edit Home Info</h4>
          </center>
          <Form.Group>
            <Form.Label>Home Page Image</Form.Label>
            <Form.Text>
              Choose an image that is at least x pixels wide
            </Form.Text>
            <Row>
              <Col xs="9" lg="3">
                <ImageUploader setImage={setImage} />
              </Col>
              <Col>
                <Button>Add Image</Button>
              </Col>
              <Col />
            </Row>
          </Form.Group>
          <hr />
          <Form.Group>
            <Form.Label>Home Page Paragraph 1</Form.Label>
            <Form.Control name="para1" onChange={handleChange} />
            <Form.Text>Enter text</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Home Page Paragraph 2</Form.Label>
            <Form.Control name="para2" onChange={handleChange} />
            <Form.Text>Enter text</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Home Page Paragraph 3</Form.Label>
            <Form.Control name="para3" onChange={handleChange} />
            <Form.Text>Enter text</Form.Text>
          </Form.Group>
          <Button type="submit" onClick={handleSave}>
            Save All
          </Button>
        </Container>
      </Form>
    </>
  );
};

export default EditHome;
