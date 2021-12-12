import React from 'react';



const Button = ({src,icon}) => {
    return (
        <div>
            <div className='container d-flex flex-column mt-5 '>
                <a href={src} class="btn btn-primary btn-lg bg-dark border-white max-w-100 " >{icon}</a>
            </div>
        </div>
    );
};





export default Button;
