import React from 'react';
import cv_img from '../../Assets/img/tomascv.jpg'
import NavBar from '../../Components/Navbar/NavBar';

const Cv = () => {
    return (
        <div >
            <NavBar title="Resume"></NavBar>
            <div className="container">
                <div className="mx-auto text-center">
                    <img className="img-fluid" src={cv_img} alt="imagen" width="700px">
                    </img>
                </div>
            </div>
        </div>
    );
}



export default Cv;
