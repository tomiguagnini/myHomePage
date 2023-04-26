import React from 'react';



const Button = ({src,desc,icon}) => {
    return (
        <>  
            <a  href={src} 
                class="btn btn-primary  bg-dark border-white m-1 d-flex justify-content-center">
                
                <img className='icon align-self-center' src={icon} alt='not found'></img>
                {desc}
            </a>     
        </>

    );
};





export default Button;
