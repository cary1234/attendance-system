import React, { useState } from 'react';
import "./assets/css/styles.css"
import 'bootstrap/dist/js/bootstrap.bundle'
import { Button, Modal } from 'react-bootstrap';
import Header from './components/Header'
import Body from './components/Body'
import { createRoot } from "react-dom/client";
import axios from 'axios';

class App extends React.Component {

  // componentDidMount() {
  //   fetch("https://ipinfo.io/json?token=5ec5b65121ca42").then(
  //     (response) => response.json()
  //   ).then(
  //     (jsonResponse) => console.log(JSON.stringify(jsonResponse))
  //   )
  //}




  render() {
    return (
      <>
        <div>{ }</div>
        <Header />
        <Body />
        <Attendance />

      </>
    );
  }
}

export default App;




function Attendance() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Attendance
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}