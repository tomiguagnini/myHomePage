import React from 'react';

const Card = ({img,title, description,link}) => {
    return (
        <div>
            <div class="card mt-4 mx-auto max-w-700 border-dark"  >
                <div class="row g-0">
                    <div class="col-md-4 d-flex ">
                        <img src={img} class="img-fluid rounded-start h-100 " alt="imagen"></img>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Card;
