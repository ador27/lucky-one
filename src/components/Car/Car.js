import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Car.css'

const Car = (props) => {
    const { car, addToCartHandler } = props;
    const { name, id, price, picture, company } = car;
    return (
        <div>
            <img className='carImage' src={picture} alt="" />
            <h2 className='car-name'>{name}</h2>
            <div className='car-details'>
                <p><small>ID: {id}</small></p>
                <p>Company: {company}</p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => addToCartHandler(car)} className='cart-btn'>
                <p className='cart-btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Car;