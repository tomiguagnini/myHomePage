import React from 'react';



const Button = ({src,desc}) => {
    return (
        <div>
            <div className='container d-flex  mt-5 align-items-center'>
                <a href={src} class="btn btn-primary btn-lg bg-dark border-white max-w-100 " >{desc}</a>
                <a href={src} class="m-5 text-decoration-none text-white" >{src}</a>
                
            </div>
        </div>
    );
};





export default Button;
