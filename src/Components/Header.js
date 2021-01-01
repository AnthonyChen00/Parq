import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from 'react-bootstrap';
import {Switch, Route} from 'react-router-dom';
import Home from "../Pages/Home"
import Page1 from "../Pages/Page1"

function Header() {
    //Header
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">App Name</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav.Link href="/Page1" className="text-muted">Page 1</Nav.Link>
                    <Nav.Link href="Page2" className="text-muted">Page 2</Nav.Link>
                    <Nav.Link href="Page3" className="text-muted">Page 3</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/Page1' component={Page1}/>
            </Switch>
        </div>
        
    );
}

export default Header