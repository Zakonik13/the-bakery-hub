import React from "react";
import { Modal, Button } from "react-bootstrap";

const ContactModal = ({
  showContact,
  closeContact,
  openCompleted,
  closeCompleted,
  showCompleted,
  handleChange,
  sendOrder,
}) => {
  return (
    <Modal show={showContact} onHide={closeContact}>
      {showCompleted === false ? (
        <div>
          <Modal.Header closeButton>
            <Modal.Title>Please, enter your contact information.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="margin-top four">
                <div className="margin-top twenty">
                  <label className="name float-left" htmlFor="name">
                    Name:
                  </label>
                  <input
                    className="float-right"
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                  />
                </div>
                <div className="margin-top twenty">
                  <label className="float-left" htmlFor="email">
                    Email:
                  </label>
                  <input
                    className="float-right"
                    type="text"
                    name="email"
                    id="email"
                    onChange={handleChange}
                  />
                </div>
                <div className="margin-top twenty">
                  <label className="float-left" htmlFor="phone">
                    Phone:
                  </label>
                  <input
                    className="float-right"
                    type="text"
                    name="phone"
                    id="phone"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="contact">
                <Button
                  onClick={openCompleted}
                  type="submit"
                  style={{
                    backgroundColor: "#b33e3e",
                    border: "none",
                    marginTop: "20px",
                  }}
                >
                  Complete
                </Button>
              </div>
            </form>
          </Modal.Body>
        </div>
      ) : (
        <div>
          <Modal.Header>
            <Modal.Title>Your order has been placed!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Thank you for shopping at The Bakery Hub!</Modal.Body>
          <Modal.Footer>
            <div className="contact">
              <Button
                onClick={sendOrder}
                type="submit"
                style={{
                  backgroundColor: "#b33e3e",
                  border: "none",
                  marginTop: "20px",
                }}
              >
                Complete
              </Button>
            </div>
          </Modal.Footer>
        </div>
      )}
    </Modal>
  );
};

export default ContactModal;
