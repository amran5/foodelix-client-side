import React from 'react';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div id="home">
            <div className="display-title">
                <div className="title">
                    <h1 style={{ fontSize: "50px" }}>Wellcome Online Food Ordering Website.</h1>
                    <div className="description">
                        <p>They wake up thinking about what they want to have for breakfast, and then they spend as much time as possible figuring out which restaurants are the most delicious, and making sure that they go there and eat the best dishes.</p>
                    </div>
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;