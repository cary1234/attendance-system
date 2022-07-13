
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import date from 'date-and-time';
import Clock from 'react-live-clock';

import Form from 'react-bootstrap/Form'



import { Component } from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom'



const Body = () => {
    return (
        <>
            <Container >

                <Row>
                    <Col className='text-center'>
                        <Form.Group className="mb-3">
                            <Form.Label>Disabled input</Form.Label>
                            <Form.Control placeholder="Disabled input" disabled />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Disabled select menu</Form.Label>
                            <Form.Select disabled>
                                <option>Disabled select</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" label="Can't check this" disabled />
                        </Form.Group>
                        <h1>
                            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
                        </h1>
                    </Col>
                </Row>

            </Container>

        </>
    );
}



export default Body









