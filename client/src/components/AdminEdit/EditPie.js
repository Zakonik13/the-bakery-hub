import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_PIE } from "../../utils/queries";
import { REMOVE_PIE, UPDATE_PIE } from "../../utils/mutations";
// Components
import ImageUploader from "../ImageUploader";

const EditPieGallery = () => {
  const [image, setImage] = useState("");
  const [selected, setSelected] = useState("select");
  const [newFlavor, setNewFlavor] = useState("");
  const { data } = useQuery(GET_PIE);
  const [removePie] = useMutation(REMOVE_PIE);
  const [updatePie] = useMutation(UPDATE_PIE);
  const flavors = data?.pie.flavors || [];
  const id = data?.pie._id;

  const handleUpdate = async () => {
    if (newFlavor === "") {
      alert("You must input a new flavor");
    } else {
      await updatePie({
        variables: { id: id, flavors: newFlavor },
        refetchQueries: [{ query: GET_PIE }],
      });

      setNewFlavor("");
    }
  };

  const handleRemove = async () => {
    if (selected === "select") {
      alert("You must select a flavor");
    } else {
      await removePie({
        variables: { id: id, flavors: selected },
        refetchQueries: [{ query: GET_PIE }],
      });
    }
  };

  return (
    <>
      <Form>
        <Container
          style={{
            borderRadius: "15px",
            boxShadow: "6px 2px 15px #00000040",
            marginTop: "25px",
            padding: "15px 25px 25px 25px",
          }}
        >
          <center>
            <h4>Edit Pie Options</h4>
          </center>
          <Form.Group>
            <Form.Label>Pie Gallery Image</Form.Label>
            <Form.Text>
              Choose an image that is at least x pixels wide
            </Form.Text>
            <ImageUploader setImage={setImage} />
          </Form.Group>
          <hr />
          <Form.Group>
            <Form.Label>Pie Flavors:</Form.Label>
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
                onClick={handleRemove}
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
                onClick={handleUpdate}
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

export default EditPieGallery;
