import React from 'react';
import fotoPerfil from '../../Assets/img/fotoPerfil1.jpg'




const Main = () => {
    const title = "Hi, I'm Tomas"
    const paragraph = "I'm fullstack developer and this is my portfolio I hope you like it "
    return (
        <div className="container max-w-600">
            <div className="d-flex justify-content-center pt-5 ">
                <img className="rounded-circle mx-auto img-fluid" width="200" height="" src={fotoPerfil} alt='asdas'></img>
            </div>
            <div className="d-flex flex-column align-items-start text-start mx-auto mt-5 " >
                <h1 className="mb-3">{title}</h1>
                <p className="fs-4">{paragraph}</p>
            </div>
        </div>
    );
};





export default Main;
