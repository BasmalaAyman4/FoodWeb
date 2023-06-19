import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from "./Testimonial.module.css"
import img1 from "../../assets/tb-testimonial-img-03.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import img from "../../assets/separator-img.png"
export default function Testimonial() {
    return (
        <>
            <Container>
                <div className={`${style.blog}`}>
                    <h2 className={`${style.blog__title}`}>Testimonial</h2>
                    <img alt="" src={img} className={`${style.blog__img}`} />
                </div>

                <section className={`${style.testimonial}`}>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper">
                        <SwiperSlide>
                            <Row>
                                <Col lg="4" className={`${style.testimonial__col}`}>
                                    <div className={`${style.user}`}>
                                        <img alt="" src={img1} className={`${style.testimonial__img}`} />
                                        <div>
                                            <h3 className={`${style.user__title}`}>Daly Harry</h3>
                                            <p className={`${style.user__para}`}>Web Designer</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="8">
                                    <p className={`${style.desc}`}>""Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower, omar sharif old man in pub burt reynolds alpha trion sportacus villain Refined gentlemen.""</p>
                                </Col>
                            </Row>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Row>
                                <Col lg="4" className={`${style.testimonial__col}`}>
                                    <div className={`${style.user}`}>
                                        <img alt="" src={img1} className={`${style.testimonial__img}`} />
                                        <div>
                                            <h3 className={`${style.user__title}`}>Daly Harry</h3>
                                            <p className={`${style.user__para}`}>Web Designer</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="8">
                                    <p className={`${style.desc}`}>""Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower, omar sharif old man in pub burt reynolds alpha trion sportacus villain Refined gentlemen.""</p>
                                </Col>
                            </Row>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Row>
                                <Col lg="4" className={`${style.testimonial__col}`}>
                                    <div className={`${style.user}`}>
                                        <img alt="" src={img1} className={`${style.testimonial__img}`} />
                                        <div>
                                            <h3 className={`${style.user__title}`}>Daly Harry</h3>
                                            <p className={`${style.user__para}`}>Web Designer</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="8">
                                    <p className={`${style.desc}`}>""Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower, omar sharif old man in pub burt reynolds alpha trion sportacus villain Refined gentlemen.""</p>
                                </Col>
                            </Row>
                        </SwiperSlide>

                    </Swiper>
                </section>

            </Container>
        </>
    )
}
