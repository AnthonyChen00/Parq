import React from 'react';
import homephoto from '../../Assets/homephoto.jpg'
import './Home.css';
import Image from 'react-bootstrap/Image';
import Footer from '../../Components/Footer';
import Searchbar from '../../Components/searchbar';

function Home(){
    return(
            <div>
                <div className="container-fluid imagebox">
                    <Image src={homephoto} fluid/>
                    <div className="title">
                        <h1>Parq</h1>
                        <h2>Parking made easy</h2>
                    </div>
                    <div className="d-flex justify-content-center searchbar">
                        <Searchbar size="lg" placeHolder="Enter Address"/>
                    </div>
                </div>
                <Footer/> 
            </div>

    )
}

export default Home