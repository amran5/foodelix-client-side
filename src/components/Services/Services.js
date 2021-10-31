import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [Services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://possessed-village-08190.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="service" className="mb-3">
            <div className="mt-5">
                <h5>Our Services</h5>
                <div className="d-flex justify-content-center">
                    <div>
                        <h1 className="text-title">Turn People Visiting Your</h1>
                        <h1 className="text-title">Website Into Regular</h1>
                        <h1 className="text-title">Food Clients</h1>
                    </div>
                </div>
            </div>
            <Container>
                <Row xs={1} md={2} lg={2} className="g-4">
                    {
                        Services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;