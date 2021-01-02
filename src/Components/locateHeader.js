import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Searchbar from '../Components/searchbar'

// import {Nav} from 'react-bootstrap';

function locateHeader(props) {
    //Header
    console.log(props)
    return (
        <div>
            <Navbar bg="light" variant="light" fixed="top">
                <Navbar.Brand href="/">Parq</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* <Nav.Link href="/Locate" className="text-muted">Map beta</Nav.Link> */}
                    <div className="d-flex mx-auto justify-content-center">
                        <Searchbar size="md" defaultValue={props.address}/>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
        
    );
}

export default locateHeader