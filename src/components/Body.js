import { Container, Row, Col } from 'react-bootstrap';
import Clock from 'react-live-clock';
import Form from 'react-bootstrap/Form'
import { React, useState, useEffect } from "react";



const Body = () => {

    const [data, getData] = useState([])
    const URL = 'https://ipinfo.io/json?token=5ec5b65121ca42';


    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())
            .then((response) => {
                console.log(JSON.stringify(response))
                getData(response);
            })
    }
    const obj = JSON.parse(JSON.stringify(data))
    console.log("city only: " + obj.city)
    return (
        <>
            <Container >
                <Row>
                    <Col className='text-center'>
                        <Form.Group className="mb-3">
                            <Form.Label>Disabled select menu</Form.Label>
                            <Form.Select disabled>
                                <option>Disabled select</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" label="Can't check this" disabled />
                        </Form.Group>

                        <Form.Group className="mb-3 text-center">

                            <Form.Select className="text-center">
                                <option>Select Name</option>
                                <option>Alfie-Lee Powell</option>
                                <option>Amir Conley</option>
                                <option>Barney Hirst</option>
                                <option>Ciaron Robinson</option>
                                <option>Claude Whyte</option>
                                <option>Ismael English</option>
                                <option>Pranav Smith</option>
                                <option>Tamanna Warner</option>
                                <option>Thierry Vaughn</option>
                            </Form.Select>


                            <Form.Group className="mb-3 border border-secondary">
                                <Clock className='text-center' format={'MM/DD/YYYY HH:mm:ss'} ticking={true} timezone={'Asia/Singapore'} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control className="text-center" placeholder="Remarks" />

                            </Form.Group>



                            <Form.Select className="text-center">
                                <option>{
                                    obj.city
                                }</option>
                                <option>Alfie-Lee Powell</option>
                                <option>Amir Conley</option>
                                <option>Barney Hirst</option>
                                <option>Ciaron Robinson</option>
                                <option>Claude Whyte</option>
                                <option>Ismael English</option>
                                <option>Pranav Smith</option>
                                <option>Tamanna Warner</option>
                                <option>Thierry Vaughn</option>
                            </Form.Select>
                        </Form.Group>



                    </Col>
                </Row>



            </Container>
        </>
    );
}



export default Body









