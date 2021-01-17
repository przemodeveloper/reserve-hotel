import React from 'react';
import './Hotel.scss';

const Hotel = ({ id, title, description, price, image, nights, addNights, removeNights, removeHotel }) => {
    return(
        <div className="container">
            <div className="img">
                <img src={image} alt="hotel" />
            </div>
            <div className="info">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className="vl"></div>
            <div className="price">
                <button onClick={() => removeNights(id)}>-</button>
                <input type="number" value={nights[id]}/>
                <button onClick={() => addNights(id)}>+</button>
            </div>
            <div className="inner-container">
                <i onClick={() => removeHotel(id)} className="fas fa-trash"></i>
                <p>${price}</p>
            </div>
        </div>
    )
};

export default Hotel;