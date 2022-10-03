import React from 'react';
import './OurMembers.css';
import {ourMembers} from "../../../assets/data/memberData";
import {Col} from "reactstrap";
import {Link} from "react-router-dom";

const OurMembers = () => {
    return (
        <>
            {ourMembers.map((item) => (
                <Col lg="3" md="3" sm="4" xs="6" key={item.id} className="mb-4">
                    <div className="single__member">
                        <div className="single__member-img">
                            <img src={item.imgUrl} alt="" className="w-100" />

                            <div className="single__member-social">
                                <Link to={item.fbUrl}>
                                    <i className="ri-facebook-line"></i>
                                </Link>
                                <Link to={item.twitUrl}>
                                    <i className="ri-twitter-line"></i>
                                </Link>

                                <Link to={item.linkedinUrl}>
                                    <i className="ri-linkedin-line"></i>
                                </Link>

                                <Link to={item.instUrl}>
                                    <i className="ri-instagram-line"></i>
                                </Link>
                            </div>
                        </div>

                        <h6 className="text-center mb-0 mt-3">{item.name}</h6>
                        <p className="section__description text-center">
                            {item.experience}
                        </p>
                    </div>
                </Col>
            ))}
        </>
    );
};

export default OurMembers;
