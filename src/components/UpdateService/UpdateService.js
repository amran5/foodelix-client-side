import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateService = () => {
    const [service, setService] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    // update name
    const handleNameChange = e => {
        const updateName = e.target.value;
        const updateService = { name: updateName, price: service.price }
        setService(updateService);
    };

    // update email
    const handlePriceChange = e => {
        const updatePrice = e.target.value;
        const updateService = { name: service.name, price: updatePrice }
        setService(updateService)
    };

    const handleUpdateToService = e => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('successfully updated');
                    setService({});
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Name: {service.name}</h2>
            <h2>Price: {service.price}</h2>
            <form onSubmit={handleUpdateToService}>
                <input style={{ marginBottom: "5px" }} type="text" onChange={handleNameChange} value={service.name || ''} />
                <br />
                <input type="number" onChange={handlePriceChange} value={service.price || ''} />
                <br />
                <br />
                <input style={{ backgroundColor: "blue", color: "white", borderRadius: "5px", marginRight: "5px" }} type="submit" value="update" />
            </form>
        </div>
    );
};

export default UpdateService;