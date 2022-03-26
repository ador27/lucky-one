import React, { useEffect, useState } from 'react';
import './Showroom.css'
import Car from '../Car/Car';

const Showroom = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('car.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div className='showroom-container'>
            <div className="cars-container">
                {
                    cars.map(car => <Car
                        key={car.id}
                        car={car}></Car>)
                }
            </div>
            <div className="select-container">
                <h1>Hello</h1>
            </div>

        </div>
    );
};

export default Showroom;