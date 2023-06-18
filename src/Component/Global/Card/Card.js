import React from "react";
import style from "./Card.module.css"
import { Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Card = ({ ProdItem }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
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

            <div className={` container-fluid`}>

                <div className="mt-5">
                    <Carousel responsive={responsive}
                        autoPlay={true}
                        infinite={true}
                        arrows={false}
                        dotListClass="custom-dot-list-style">
                        {ProdItem.map((Val) => {
                            return (
                                <Col className={`${style.card}`} lg="4" >
                                    <div className={`${style.image}`}>
                                        <div className={`${style.flipCard}`}>
                                            <div className={`${style.flipCard__inner}`}>
                                                <div className={`${style.flipCard__front}`}>
                                                    <img src={Val.img1} alt=""
                                                    />
                                                </div>
                                                <div className={`${style.flipCard__back}`}>
                                                    <img src={Val.img2} alt="" />
                                                </div>
                                            </div>
                                            <div className={`${style.acutionEnded}`}>
                                                <div >
                                                    {/*  {((new Date(moment(acutionCard.end_date).format('LL') + " " + acutionCard.end_time).getTime()) - (new Date().getTime())) < 0
                                                    ?
                                                    <p className={`${style.ended}`}> {t("انتهى المزاد")}</p>
                                                    :
                                                    ""
                                                } */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${style.cardBody}`}>
                                        <h4 className={`${style.card__title}`}>{Val.title}</h4>
                                        <p className={`${style.card__price}`}>{Val.price}</p>
                                    </div>
                                </Col>
                            );
                        })}
                    </Carousel>
                </div>

            </div>

        </>
    );
};

export default Card;