import React, { useContext } from 'react';
import './Hotel.scss';
import DataContext from '../DataContext/DataContext';


const Hotel = ({ id, title, description, price, image }) => {

    const data = useContext(DataContext);

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
                <button onClick={() => data.removeNights(id)}>-</button>
                <input type="number" value={data.nights[id]}/>
                <button onClick={() => data.addNights(id)}>+</button>
            </div>
            <div className="inner-container">
                <i onClick={() => data.deleteHotel(id)} className="fas fa-trash"></i>
                <p>${price}</p>
            </div>
        </div>
    )
};

export default Hotel;