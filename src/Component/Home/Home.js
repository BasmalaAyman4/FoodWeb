import React from 'react'
import styles from './Home.module.css'
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/slider-01-1920x960.jpg"
import img2 from "../../assets/slider-02-1920x960.jpg"
import "swiper/css";
import "./home.css"
import { Col, Container, Row } from 'react-bootstrap';
import { BsCashCoin } from 'react-icons/bs';
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from 'react-icons/bi';
import { GiReturnArrow } from "react-icons/gi";
import loz from "../../assets/tb-service-img.png"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import imgCategory from "../../assets/separator-img.png"
import cat1 from "../../assets/categories-img-01-450x260.jpg"
import cat2 from "../../assets/categories-img-02-450x260.jpg"
import cat3 from "../../assets/categories-img-03-450x260.jpg"
import cat4 from "../../assets/categories-img-04-450x260.jpg"
import cat5 from "../../assets/categories-img-05-450x260.jpg"
import Product from '../Product/Product';
import Banner from '../Banner/Banner';
import SuperFood from '../SuperFood/SuperFood';
import Testimonial from '../Testimonial/Testimonial';
import Event from "./../Blog/Blog"
export default function Home() {
    return (
        <>
            <div className='mb-5'>
                <Swiper
                    spaceBetween={50}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className={`mySwiper ${styles['swiper-style']}`}>
                    <SwiperSlide className={`${styles.swiperHeader}`}>
                        <img src={img1} className={styles.blur} alt="" />
                        <div className={`${styles['swiperhome__info']}`}>
                            <div className='container'>
                                <h2>Dried Fruits & Nuts</h2>
                                <a className={`${styles.shop}`}>Shop Now</a>
                                <div className='row '>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.swiperHeader}`}>
                        <img src={img2} className={styles.blur} alt="" />
                        <div className={`${styles['swiperhome__info']}`}>
                            <div className='container'>
                                <h2>Dried Fruits & Nuts</h2>
                                <a className={`${styles.shop}`}>Shop Now</a>
                                <div className='row '>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <Container>
                    <Row className={`${styles.row}`}>
                        <Col className='order-xxl-1 order-xl-2 order-sm-2 order-md-2 order-2' md="12" lg="6" xl="6" xxl="4" >
                            <Row className={`${styles.r}`}>
                                <Col lg="6" md="6" sm="6" >
                                    <div className={`${styles.payment}`}>
                                        <TbTruckDelivery className={`${styles.paymentIcon}`} />
                                        <p className={`${styles.paymentPara}`}>Free Delivery</p>
                                        <p className={`${styles.paymentSec}`}>Worldwide75%</p>
                                    </div>
                                </Col>
                                <Col lg="6" md="6" sm="6">
                                    <div className={`${styles.payment}`}>
                                        <BiSupport className={`${styles.paymentIcon}`} />
                                        <p className={`${styles.paymentPara}`}>Support</p>
                                        <p className={`${styles.paymentSec}`}>24*7</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col className=' order-xxl-2 order-xl-1 order-sm-1 order-md-1 order-1' md="12" lg="12" xl="12" xxl="4" >
                            <img src={loz} className={`${styles.loz}`} />
                        </Col>
                        <Col className='order-xxl-3 order-xl-3 order-sm-3 order-md-3 order-3' md="12" lg="6" xl="6" xxl="4"  >
                            <Row >
                                <Col lg="6" md="6" sm="6">
                                    <div className={`${styles.payment}`}>
                                        <GiReturnArrow className={`${styles.paymentIcon}`} />
                                        <p className={`${styles.paymentPara}`}>Return</p>
                                        <p className={`${styles.paymentSec}`}>24*7 return</p>
                                    </div>
                                </Col>
                                <Col lg="6" md="6" sm="6">
                                    <div className={`${styles.payment}`}>
                                        <BsCashCoin className={`${styles.paymentIcon}`} />
                                        <p className={`${styles.paymentPara}`}>Payment</p>
                                        <p className={`${styles.paymentSec}`}>100% Secure</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <div className={`${styles.category__body}`}>
                    <Container>
                        <div className={`${styles.categories}`}>
                            <h2 className={`${styles.category}`}>Categories Features</h2>
                            <img alt="" src={imgCategory} className={`${styles.category__img}`} />
                        </div>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={100}
                            slidesPerView={3}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                360: {
                                    // width: 576,
                                    slidesPerView: 1,
                                },
                                991: {
                                    // width: 768,
                                    slidesPerView: 1,
                                },
                                992: {
                                    // width: 576,
                                    slidesPerView: 2,

                                },
                                1200: {
                                    // width: 768,
                                    slidesPerView: 2,
                                },
                                1434: {
                                    // width: 576,
                                    slidesPerView: 3,

                                },
                                1700: {
                                    // width: 768,
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            <SwiperSlide className={`${styles['swiper__info']}`}>
                                <img src={cat1} alt="" />
                                <div className={`${styles['category__info']}`}>
                                    <div className='container'>
                                        <h2>Cashew</h2>
                                        <p>Carrots</p>
                                        <p>Chana Dhal</p>
                                        <p className={`${styles['category__para']}`}>Walnuts</p>
                                        <a className={`${styles.shop}`}>View All</a>
                                        <div className='row '>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={`${styles['swiper__info']}`}>
                                <img src={cat2} alt="" />
                                <div className={`${styles['category__info']}`}>
                                    <div className='container'>
                                        <h2>Cashew</h2>
                                        <p>Carrots</p>
                                        <p>Chana Dhal</p>
                                        <p className={`${styles['category__para']}`}>Walnuts</p>
                                        <a className={`${styles.shop}`}>View All</a>
                                        <div className='row '>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={`${styles['swiper__info']}`}>
                                <img src={cat3} alt="" />
                                <div className={`${styles['category__info']}`}>
                                    <div className='container'>
                                        <h2>Cashew</h2>
                                        <p>Carrots</p>
                                        <p>Chana Dhal</p>
                                        <p className={`${styles['category__para']}`}>Walnuts</p>
                                        <a className={`${styles.shop}`}>View All</a>
                                        <div className='row '>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={`${styles['swiper__info']}`}>
                                <img src={cat4} alt="" />
                                <div className={`${styles['category__info']}`}>
                                    <div className='container'>
                                        <h2>Cashew</h2>
                                        <p>Carrots</p>
                                        <p>Chana Dhal</p>
                                        <p className={`${styles['category__para']}`}>Walnuts</p>
                                        <a className={`${styles.shop}`}>View All</a>
                                        <div className='row '>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={`${styles['swiper__info']}`}>
                                <img src={cat5} alt="" />
                                <div className={`${styles['category__info']}`}>
                                    <div className='container'>
                                        <h2>Cashew</h2>
                                        <p>Carrots</p>
                                        <p>Chana Dhal</p>
                                        <p className={`${styles['category__para']}`}>Walnuts</p>
                                        <a className={`${styles.shop}`}>View All</a>
                                        <div className='row '>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Container>
                </div>
            </div>
            <Product />
            <Banner />
            <SuperFood />
            <Testimonial />
            <Event />
        </>
    )
}
