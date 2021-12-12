import React from 'react';
import cv_img from '../../Assets/img/tomascv.jpg'
import NavBar from '../../Components/Navbar/NavBar';

const Cv = () => {
    return (
        <div >
            <div className="container">
                <NavBar title="Resume"></NavBar>
                <div className="mx-auto text-center">
                    <a href='/tomascv.pdf'>
                    <img  className="img-fluid" src={cv_img} alt="imagen" width="700px">
                    </img>

                    </a>
                </div>
            </div>
        </div>
    );
}



export default Cv;
