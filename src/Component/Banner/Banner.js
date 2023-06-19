import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import banner1 from "../../assets/banner-01.jpg"
import banner2 from "../../assets/banner-02.jpg"
import style from "./Banner.module.css"
export default function Banner() {
    return (
        <>
            <Container>
                <Row className={`${style.banner}`}>
                    <Col md="6">
                        <div className={`${style.banner__body}`}>
                            <img alt="" src={banner1} className={`${style.banner__img} img-fluid`} />
                            <div className={`${style['category__info']}`}>
                                <div className='container'>
                                    <h2>Organic Almonds</h2>
                                    <p className={`${style['category__para']}`}>Nourish your with these delectable, Convenient treats</p>
                                    <a className={`${style.shop}`}>Shop Now</a>
                                    <div className='row '>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className={`${style.banner__body}`}>
                            <img alt="" src={banner2} className={`${style.banner__img} img-fluid`} />
                            <div className={`${style['category__info']}`}>
                                <div className='container'>
                                    <h2>Nutritious Gems</h2>
                                    <p className={`${style['category__para']}`}>Nourish your with these delectable, Convenient treats</p>
                                    <a className={`${style.shop}`}>Shop Now</a>
                                    <div className='row '>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
