import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageServices.css';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://possessed-village-08190.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleService = id => {
        const proceed = window.confirm('are you sure, you want to delete?')
        if (proceed) {
            const url = `https://possessed-village-08190.herokuapp.com/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('delete successfully');
                        const remaining = services.filter(service => service._id !== id)
                        setServices(remaining);
                    }
                });
        };
    };
    return (
        <div>
            <div className="service-container">
                {
                    services.map(service => <div className="single-service" key={service._id}>
                        <img src={service.img} alt="" />
                        <h3>{service.name}</h3>
                        <p>{service.price}</p>
                        <br />
                        <Link to={`/services/update/${service._id}`}>
                            <button style={{ backgroundColor: "blue", color: "white", borderRadius: "5px", marginRight: "5px" }}>update</button>
                        </Link>
                        <button style={{ backgroundColor: "red", color: "white", borderRadius: "5px", marginRight: "5px" }} onClick={() => handleService(service._id)}>Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageServices;