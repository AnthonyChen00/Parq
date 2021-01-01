import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from 'react-bootstrap';
import {Switch, Route} from 'react-router-dom';
import Home from "../Pages/Home"
import About from "../Pages/About"

function Header() {
    //Header
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">Parq</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav.Link href="/About" className="text-muted">About</Nav.Link>
                    {/* <Nav.Link href="Page2" className="text-muted">Page 2</Nav.Link>
                    <Nav.Link href="Page3" className="text-muted">Page 3</Nav.Link> */}
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/About' component={About}/>
            </Switch>
        </div>
        
    );
}

export default Header