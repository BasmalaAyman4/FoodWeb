import React from 'react'
import style from "./Blog.module.css"
import { Col, Container, Row } from 'react-bootstrap'
import img1 from "../../assets/blog-04-690x457.jpg"
import img2 from "../../assets/blog-05-690x457.jpg"
import img from "../../assets/separator-img.png"
import { BsFillCalendarDayFill } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";

export default function Blog() {
    return (
        <>
            <Container>
                <div className={`${style.blog}`}>
                    <h2 className={`${style.blog__title}`}>Blog</h2>
                    <img alt="" src={img} className={`${style.blog__img}`} />
                </div>
                <Row>
                    <Col>
                        <div className={`${style.card}`}>
                            <div className={`${style.card__image}`}>
                                <img alt="" src={img1} />
                            </div>
                            <div className={`${style.card__content}`}>
                                <p className={`${style.card__title}`}>Eodem modo typi qui nunc</p>
                                <div className={`${style.blog__body}`}>
                                    <div className={`${style.blog__event}`}>
                                        <p> <BsFillCalendarDayFill /> 16 Sep-2024 </p>
                                    </div>
                                    <div>
                                        <p> <BiCommentDetail /> 0 Comments </p>
                                    </div>
                                </div>
                                <p className={`${style.card__text}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <a className={`${style.card__button}`} href="#">Read More</a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={`${style.card}`}>
                            <div className={`${style.card__image}`}>
                                <img alt="" src={img2} />
                            </div>
                            <div className={`${style.card__content}`}>
                                <p className={`${style.card__title}`}>Eodem modo typi qui nunc</p>
                                <div className={`${style.blog__body}`}>
                                    <div className={`${style.blog__event}`}>
                                        <p> <BsFillCalendarDayFill /> 16 Sep-2024 </p>
                                    </div>
                                    <div>
                                        <p> <BiCommentDetail /> 0 Comments </p>
                                    </div>
                                </div>
                                <p className={`${style.card__text}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <a className={`${style.card__button}`} href="#">Read More</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
