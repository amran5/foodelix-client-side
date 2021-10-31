import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    const { serviceid } = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/services/${serviceid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className="booking-service">
            <img src={service.img} alt="" />
            <h3>{service.name}</h3>
            <p>{service.price}</p>
            <Link to="/home"><button style={{ backgroundColor: "blue", color: "white", borderRadius: "5px", marginRight: "5px" }}>Back</button></Link>
        </div>
    );
};

export default Booking;