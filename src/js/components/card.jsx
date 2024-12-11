import React from "react";

const Card = ({cards}) => {
    return(
        
        <div className="col-4 mb-4">
            <div className="card h-100 d-flex flex-column">
                <img src={cards.image} className="card-img-top"  alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{cards.cardTitle}</h5>
                    <p className="card-text">{cards.cardText}</p>
                </div>
                <div class="card-footer mx-auto w-100 text-center">
                   <a href={cards.buttonUrl} className="btn btn-primary align-self-end btn-block">Go somewhere</a>
                </div>
            </div>
        </div>
    )  
};

export default Card;