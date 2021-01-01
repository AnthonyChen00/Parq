import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from 'react-bootstrap';

function Header() {
    //Header
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">App Name</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link href="#Page1" className="text-muted">Page 1</Nav.Link>
                <Nav.Link href="#Page2" className="text-muted">Page 2</Nav.Link>
                <Nav.Link href="#Page3" className="text-muted">Page 3</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header