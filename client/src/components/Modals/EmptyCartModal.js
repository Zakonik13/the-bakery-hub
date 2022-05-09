import React from "react";
import { Modal } from "react-bootstrap";

const EmptyCartModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Your cart is empty!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Please add items to your cart to place an order.</Modal.Body>
    </Modal>
  );
};

export default EmptyCartModal;
