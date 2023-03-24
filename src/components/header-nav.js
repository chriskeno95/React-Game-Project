import { ReactComponent as Logo } from "../Design-Materials/icons-etc/SVG/Logo.svg";
import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import BasicTable from "./highscore-data";

function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => setShowModal(!showModal);

  return (
    <div>
      <Navbar className="custom-nav">
        <Navbar.Brand href="#home">
          <Logo
            width="150"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <button className="highscores" onClick={handleModal}>HIGHSCORES</button>
      </Navbar>
      <Modal show={showModal} backdrop='static' onHide={handleModal}>
        <Modal.Header className="custom-modal-header" closeButton>
          <Modal.Title className="highscores-title ">HIGHSCORES</Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
          <BasicTable></BasicTable>
        </Modal.Body>
        <Modal.Footer className="custom-modal-footer">
          <button className="modal-btn">CLEAR</button>
          <button className="modal-btn" onClick={handleModal}>CLOSE</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Header;