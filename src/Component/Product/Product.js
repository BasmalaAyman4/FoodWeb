import React, { useState, useEffect } from 'react'
import style from "./Product.module.css"
import { Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { Button } from 'react-bootstrap';
const Product = ({ productItems, handleAddProduct }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 767, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className={`${style.allProd}`}>
                        <div className={` container`}>

                            <div className="mt-5">
                                <Carousel responsive={responsive}
                                    autoPlay={true}
                                    infinite={true}
                                    arrows={false}
                                >
                                    {productItems.map(Val => (
                                        <Col className={`${style.card}`}  >

                                            <div className={`${style.flipCard__front}`}>
                                                <img src={Val.img1} alt=""
                                                />
                                            </div>
                                            <div className={`${style.cardBody}`}>
                                                <h4 className={`${style.card__title}`}>{Val.title}</h4>
                                                <p className={`${style.card__para}`}>{Val.describtion}</p>
                                                <div className={`${style.product__review}`}> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></div>
                                                <p className={`${style.card__price}`}>{Val.price} EGP</p>
                                                <div>
                                                    <Button className={`${style.buy__btn}`} onClick={() => handleAddProduct(Val)}>add to cart</Button>
                                                    <AiOutlineHeart className={`${style.social__icon}`} />
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default Product