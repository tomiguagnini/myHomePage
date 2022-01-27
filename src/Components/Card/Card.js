import React from 'react';

const Card = ({ img, title, description, link, link2 }) => {
    return (
        <div>
            <div class="card mt-4 mx-auto max-w-700 border-dark"  >
                <a href={link}>
                    <div class="row g-0">
                        <div class="col-md-4 d-flex ">
                            <img src={img} class="img-fluid rounded-start h-100 " alt="imagen"></img>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{title}</h5>
                                <a href={link2} >
                                    {description}  
                                </a>                                
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}



export default Card;
