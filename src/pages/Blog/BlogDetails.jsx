import React, {useEffect} from 'react';
import blogData from "../../assets/data/blogData";
import {Link, useParams} from "react-router-dom";
import {Col, Container, Form, FormGroup, Input, Row} from "reactstrap";
import Helmet from "../../components/Helmet";
import commentImg from '../../assets/all-images/ava-1.jpg';
import './BlogDetails.css';

const BlogDetails = () => {
    const {slug} = useParams();
    const blog = blogData.find((blog) => blog.title === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [blog]);

    return (<Helmet title={blog.title}>
            <section>
                <Container>
                    <Row>
                        <Col lg="8" md="8">
                            <div className="blog__details">
                                <img src={blog.imgUrl} alt="" className="w-100"/>
                                <h2 className="section__title mt-4">{blog.title}</h2>

                                <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                                      <span className="blog__author">
                                        <i className="ri-user-line"></i> {blog.author}
                                      </span>

                                    <span className=" d-flex align-items-center gap-1 section__description">
                                        <i className="ri-calendar-line"></i> {blog.date}
                                      </span>

                                    <span className=" d-flex align-items-center gap-1 section__description">
                                        <i className="ri-time-line"></i> {blog.time}
                                      </span>
                                </div>

                                <p className="section__description">{blog.description}</p>
                                <h6 className="ps-5 fw-normal">
                                    <blockquote className="fs-4">{blog.quote}</blockquote>
                                </h6>
                                <p className="section__description">{blog.description}</p>
                            </div>

                            <div className="comment__list mt-5">
                                <h4 className="mb-5">3 Комментария</h4>

                                <div className="single__comment d-flex gap-3">
                                    <img src={commentImg} alt=""/>
                                    <div className="comment__content">
                                        <h6 className=" fw-bold">Василий</h6>
                                        <p className="section__description mb-0">14 Июля, 2022</p>
                                        <p className="section__description">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Eos nobis totam eius laborum molestias itaque minima
                                            distinctio, quae velit tempore!
                                        </p>

                                        <span className="replay d-flex align-items-center gap-1">
                                            <i className="ri-reply-line"></i> Повторить
                                        </span>
                                    </div>
                                </div>

                                {/* =============== comment form ============ */}
                                <div className="leave__comment-form mt-5">
                                    <h4>Оставить комментарий</h4>
                                    <p className="section__description">
                                        Вы должны войти в систему, чтобы сделать или прокомментировать публикацию
                                    </p>

                                    <Form>
                                        <FormGroup className=" d-flex gap-3">
                                            <Input type="text" placeholder="Полное имя"/>
                                            <Input type="email" placeholder="Email"/>
                                        </FormGroup>

                                        <FormGroup>
                                          <textarea
                                              rows="5"
                                              className="w-100 py-2 px-3"
                                              placeholder="Комментарий..."
                                          ></textarea>
                                        </FormGroup>

                                        <button className="btn comment__btn mt-3">
                                            Оставить комментарий
                                        </button>
                                    </Form>
                                </div>
                            </div>
                        </Col>

                        <Col lg="4" md="4">
                            <div className="recent__post mb-4">
                                <h5 className=" fw-bold">Недавние Посты</h5>
                            </div>
                            {blogData.map(({id, imgUrl, title}) => (
                                <div className="recent__blog-post mb-4" key={id}>
                                    <div className="recent__blog-item d-flex gap-3">
                                        <img src={imgUrl} alt="" className="w-25 rounded-2"/>
                                        <h6>
                                            <Link to={`/blogs/${title}`}>{title}</Link>
                                        </h6>
                                    </div>
                                </div>))}
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>);
};

export default BlogDetails;