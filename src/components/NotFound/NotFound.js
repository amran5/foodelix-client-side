import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notFound.png';

const NotFound = () => {
    return (
        <div className="mt-3">
            <div>
                <img style={{ width: "100%", height: "500px" }} src={notFound} alt="" />
            </div>
            <Link to="/">
                <button className="my-5 bg-primary text-white rounded-3">back home</button>
            </Link>
        </div>
    );
};

export default NotFound;