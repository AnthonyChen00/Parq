import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from 'react-bootstrap';
import {Switch, Route} from 'react-router-dom';
import Home from "../Pages/Home/Home";
import About from "../Pages/About";
import Locate from "../Pages/Locate";

function Header() {
    //Header
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">Parq</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav.Link href="/Locate" className="text-muted">Locate</Nav.Link>
                    <Nav.Link href="/About" className="text-muted">About</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/About' component={About}/>
                <Route path='/Locate' component={Locate}/>
            </Switch>
        </div>
        
    );
}

export default Header