import React from 'react';
import homephoto from '../../Assets/homephoto.jpg'
import './Home.css';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Home(){
    return(
        <div>
            <div className="container-fluid imagebox">
                <Image src={homephoto} fluid/>
                <div className="title">
                    <h1>Parq</h1>
                    <h2 className="">Parking made easy</h2>
                </div>
            </div>
            <form>
                <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="address" placeholder="Enter address"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default Home