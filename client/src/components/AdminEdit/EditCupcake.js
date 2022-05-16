import React, { useState } from "react";
import { Button, Container, Form, Col, Row } from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/client";
import { GET_CUPCAKE } from "../../utils/queries";
import { REMOVE_CUPCAKE, UPDATE_CUPCAKE } from "../../utils/mutations";
// Components
import ImageUploader from "../ImageUploader";

const EditCupcakeGallery = () => {
  const [image, setImage] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("select");
  const [newTheme, setNewTheme] = useState("");
  const [selected, setSelected] = useState("select");
  const [newFlavor, setNewFlavor] = useState("");
  const { data } = useQuery(GET_CUPCAKE);
  const [removeCupcake] = useMutation(REMOVE_CUPCAKE);
  const [updateCupcake] = useMutation(UPDATE_CUPCAKE);

  const themes = data?.cupcake.themes || [];
  const flavors = data?.cupcake.flavors || [];
  const id = data?.cupcake._id;

  const handleUpdateFlavor = async () => {
    if (newFlavor === "") {
      alert("You must input a new flavor");
    } else {
      await updateCupcake({
        variables: { id: id, flavors: newFlavor },
        refetchQueries: [{ query: GET_CUPCAKE }],
      });

      setNewFlavor("");
    }
  };

  const handleRemoveFlavor = async () => {
    if (selected === "select") {
      alert("You must select a flavor");
    } else {
      await removeCupcake({
        variables: { id: id, flavors: selected },
        refetchQueries: [{ query: GET_CUPCAKE }],
      });
    }
  };

  const handleUpdateTheme = async () => {
    if (newTheme === "") {
      alert("You must input a new theme");
    } else {
      await updateCupcake({
        variables: { id: id, themes: newTheme },
        refetchQueries: [{ query: GET_CUPCAKE }],
      });

      setNewTheme("");
    }
  };

  const handleRemoveTheme = async () => {
    if (selectedTheme === "select") {
      alert("You must select a theme");
    } else {
      await removeCupcake({
        variables: {
          id: id,
          themes: selectedTheme,
        },
        refetchQueries: [{ query: GET_CUPCAKE }],
      });
    }
  };

  return (
    <>
      <Form>
        {" "}
        <Container
          style={{
            borderRadius: "15px",
            boxShadow: "6px 2px 15px #00000040",
            marginTop: "25px",
            padding: "15px 25px 25px 25px",
          }}
        >
          <center>
            <h4>Edit Cupcake Options</h4>
          </center>
          <Form.Group>
            <Form.Label>Cupcake Gallery Image</Form.Label>
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
            <Form.Label>Cupcake Themes:</Form.Label>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Form.Select
                name="selectedTheme"
                id="selectedTheme"
                onChange={(event) => setSelectedTheme(event.target.value)}
              >
                <option value="select">Select</option>
                {themes.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </Form.Select>
              <Button
                onClick={handleRemoveTheme}
                style={{ marginLeft: "15px", width: "90px" }}
              >
                Remove
              </Button>
            </div>
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Add New Theme</Form.Label>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Form.Control
                value={newTheme}
                onChange={(event) => setNewTheme(event.target.value)}
              />
              <Button
                onClick={handleUpdateTheme}
                style={{ marginLeft: "15px", width: "90px" }}
              >
                Add
              </Button>
            </div>
            <Form.Text>Enter text</Form.Text>
          </Form.Group>
          <hr />
          <Form.Group>
            <Form.Label>Cupcake Flavors:</Form.Label>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Form.Select
                name="selectedFlavor"
                id="selectedFlavor"
                onChange={(event) => setSelected(event.target.value)}
              >
                <option value="select">Select</option>
                {flavors.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </Form.Select>
              <Button
                onClick={handleRemoveFlavor}
                style={{ marginLeft: "15px", width: "90px" }}
              >
                Remove
              </Button>
            </div>
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Add New Flavor</Form.Label>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Form.Control
                value={newFlavor}
                onChange={(event) => setNewFlavor(event.target.value)}
              />
              <Button
                onClick={handleUpdateFlavor}
                style={{ marginLeft: "15px", width: "90px" }}
              >
                Add
              </Button>
            </div>
            <Form.Text>Enter text</Form.Text>
          </Form.Group>
        </Container>
      </Form>
    </>
  );
};

export default EditCupcakeGallery;
