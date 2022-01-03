import React from 'react';



const Button = ({src,desc}) => {
    return (
        <div>
            <div className='mt-5 mx-auto w-25'>
                <a href={src} class="btn btn-primary btn-lg bg-dark border-white w-100 max-w-100" >{desc}</a>     
            </div>
        </div>
    );
};





export default Button;
