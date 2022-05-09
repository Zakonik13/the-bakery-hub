import React from "react";
import { REMOVE_FROM_CART } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import { Button, Card, ListGroup, Dropdown } from "react-bootstrap";

const PieCart = ({ item, index }) => {
  const [state, dispatch] = useStoreContext();

  const handleRemove = (event) => {
    let target = event.target.value;

    dispatch({
      type: REMOVE_FROM_CART,
      target: target,
    });
  };

  return (
    <center className="product-border">
      <Card className="card" style={{ border: "none", width: "275px" }}>
        <ListGroup>
          <ListGroup.Item
            style={{ fontWeight: "bold", backgroundColor: "#e97e7e80" }}
          >
            {item.flavor.charAt(0).toUpperCase() + item.flavor.slice(1)} Pie
          </ListGroup.Item>
          <ListGroup.Item>Qty: {item.qty}</ListGroup.Item>
          <ListGroup.Item>Flavor: {item.flavor}</ListGroup.Item>
          <ListGroup.Item>Size: {item.size}</ListGroup.Item>
          <ListGroup.Item style={{ color: "#d5d5d5" }}>
            Theme: {item.theme}
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "#d5d5d5" }}>
            Icing: {item.icing}
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "#d5d5d5" }}>
            Tier: {item.tier}
          </ListGroup.Item>
          <ListGroup.Item>
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-autoclose-true"
                style={{
                  backgroundColor: "#d8d8d8",
                  border: "none",
                  color: "black",
                }}
              >
                Instructions:
              </Dropdown.Toggle>
              <Dropdown.Menu>{item.text}</Dropdown.Menu>
            </Dropdown>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              value={index}
              onClick={handleRemove}
              style={{
                backgroundColor: "#b33e3e",
                border: "none",
              }}
            >
              Remove
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </center>
  );
};

export default PieCart;
