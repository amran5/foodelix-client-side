import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, description, img, price, _id } = service;
    return (
        <div>
            <Col>
                <Card className="p-2 rounded-3 body">
                    <Card.Img style={{ height: "360px" }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Title>
                            {price}
                        </Card.Title>
                        <Link to={`/booking/${_id}`}>
                            <button className="btn-cmn">Order Item</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;