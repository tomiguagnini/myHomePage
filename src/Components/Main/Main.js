import React from 'react';
import fotoPerfil from '../../Assets/img/fotoPerfil1.jpg'
//import fotoPerfil2 from '../../Assets/img/fotoPerfil2.jpg'



const Main = () => {
    const title = "Hi, I'm Tomas"
    const paragraph = "I'm student of programing and i'm looking for a job as a web developer. I wrote this site using react and you can check my projects to see my experience"
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
