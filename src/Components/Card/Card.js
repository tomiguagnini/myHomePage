import React from 'react';

const Card = ({ img, title, description, link, link2 }) => {
    return (
        <div>
            <div class="card mt-4 mx-auto max-w-700  border-dark bg-dark"  >
                <a href={link}>
                    <div class="row g-0">
                        <div class="col-md-4 d-flex ">
                            <img src={img} class="img-fluid rounded-start" alt=""></img>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{title}</h5>
                                <p class="card-text">{description}</p>
                                <a class="card-footer" href={link2} >
                                    Code  
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
