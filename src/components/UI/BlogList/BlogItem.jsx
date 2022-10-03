import React from 'react';
import './Blog.css';
import {Col} from "reactstrap";
import {Link} from "react-router-dom";

const BlogItem = ({item}) => {
    const { imgUrl, title, author, date, description, time } = item;

    return (
        <Col lg="4" md="6" sm="6" className="mb-5">
            <div className="blog__item">
                <img src={imgUrl} alt="" className="w-100" />
                <div className="blog__info p-3">
                    <Link to={`/blogs/${title}`} className="blog__title">
                        {title}
                    </Link>
                    <p className="section__description mt-3">
                        {description.length > 100
                            ? description.substr(0, 100)
                            : description}
                    </p>

                    <Link to={`/blogs/${title}`} className="read__more">
                        Читать далее
                    </Link>

                    <div className="blog__time pt-3 mt-3 d-flex align-items-center justify-content-between">
                        <span className="blog__author">
                             <i className="ri-user-line"></i> {author}
                        </span>

                        <div className=" d-flex align-items-center gap-3">
                          <span className=" d-flex align-items-center gap-1 section__description">
                                <i className="ri-calendar-line"></i> {date}
                          </span>

                            <span className=" d-flex align-items-center gap-1 section__description">
                                <i className="ri-time-line"></i> {time}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Col>

    );
};

export default BlogItem;
