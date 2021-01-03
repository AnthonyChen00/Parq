import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Searchbar from '../Components/searchbar'

// import {Nav} from 'react-bootstrap';

function locateHeader(props) {
    console.log(props)
    return (
        <div>
            <Navbar bg="light" variant="light" fixed="top">
                <Navbar.Brand href="/">Parq</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="navSearch">
                        <Searchbar  defaultValue={props.address}/>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
        
    );
}

export default locateHeader