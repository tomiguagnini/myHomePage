import React from 'react';



const Button = ({src,desc}) => {
    return (
        <div className='d-flex '>
            <a href={src} class="btn btn-primary btn-lg bg-dark border-white w-25  mt-5 mx-auto fs-6" >{desc}</a>     
            
        </div>
    );
};





export default Button;
