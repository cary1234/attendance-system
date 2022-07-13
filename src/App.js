import React from 'react';
import { useState } from 'react';
import { Helmet } from "react-helmet";

import "./assets/css/styles.css"
import 'bootstrap/dist/js/bootstrap.bundle'

import date from 'date-and-time';

import Clock from 'react-live-clock';

import { Component } from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom'

import Form from 'react-bootstrap/Form'




import { Button, Modal, Container, Row, Col } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';


import Header from './components/Header'
import Body from './components/Body'
import Timer from './components/Timer'




class App extends React.Component {
  state = {
    curDT: new Date().toLocaleString(),
  }
  render() {
    return (
      <>

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