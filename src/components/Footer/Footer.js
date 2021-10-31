import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3>Company<span>Foodelix</span></h3>

                    <p className="footer-links">
                        <small className="link-1">Home</small>
                        <small>Blog</small>
                        <small>Pricing</small>
                        <small>About</small>
                        <small>Contact</small>
                    </p>

                    <p className="footer-company-name">Company Name Foodelix © 2021</p>
                </div>

                <div className="footer-center">
                    <div>
                        <p><span>Dhaka Bangladesh</span> Chittagong Division , Laksmipur District</p>
                    </div>

                    <div>
                        <p>+123000000000</p>
                    </div>

                    <div>
                        <p><a href="mailto:supportfoodelix@company.com">supportfoodelix@company.com</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About the company</span>
                        A revitalizing lunch that powers a team through the workday. A warm meal that fuels students through finals. The essential nutrients that help a patient recover. A game-time snack that energizes the most devoted fan.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;