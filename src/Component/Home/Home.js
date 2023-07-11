import React, { useState } from 'react'
import styles from './Home.module.css'
import "swiper/css";
import "./home.css"
import { Button, Col, Container, Row } from 'react-bootstrap';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Product from '../Product/Product';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { Tb360View } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { TbShare3 } from "react-icons/tb";
import { BiVideo } from "react-icons/bi";
const Home = ({ productItems, handleAddProduct }) => {
    const [active, setActive] = useState("first")
    const [activeColor, setActiveColor] = useState("white")
    const [increment, setIncrement] = useState(1)
    const [count, setCount] = useState(0);
    const images = [
        {
            original: "https://templatebunch.com/Opencart/OPC004/OPCTB35/OPC01/image/cache/catalog/demo/product/03-870x1140.jpg",
            thumbnail: "https://templatebunch.com/Opencart/OPC004/OPCTB35/OPC01/image/cache/catalog/demo/product/13-330x432.jpg",
        },
        {
            original: "https://templatebunch.com/Opencart/OPC004/OPCTB35/OPC01/image/cache/catalog/demo/product/03-870x1140.jpg",
            thumbnail: "https://templatebunch.com/Opencart/OPC004/OPCTB35/OPC01/image/cache/catalog/demo/product/12-870x1140.jpg",
        },
        {
            original: "https://templatebunch.com/Opencart/OPC004/OPCTB35/OPC01/image/cache/catalog/demo/product/03-870x1140.jpg",
            thumbnail: "https://templatebunch.com/Opencart/OPC004/OPCTB35/OPC01/image/cache/catalog/demo/product/04-870x1140.jpg",
        },
    ];
    return (
        <>
            <div className={`${styles.path}`}>
                <Container>
                    <Breadcrumb className={`${styles.path__body}`}>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/">All Rugs</Breadcrumb.Item>
                        <Breadcrumb.Item href="/">Kilim & Tulu</Breadcrumb.Item>
                        <Breadcrumb.Item active>Name Of Product</Breadcrumb.Item>
                    </Breadcrumb>

                </Container>
            </div>
            <Container>
                <Row className={`${styles.gallery}`}>
                    <Col>
                        <ImageGallery
                            items={images}
                            thumbnailPosition={'left'}
                            showNav={false}
                            showPlayButton={false}
                            className={`${styles.rugs__img}`}>
                        </ImageGallery>

                    </Col>
                    <Col>
                        <div>
                            <div className={`${styles.product__body}`}>
                                <div>
                                    <h2 className={`${styles.product__title}`}>Name Of Product</h2>
                                    <div className={`${styles.product__review}`}> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></div>
                                </div>
                                <div className={`${styles.product__review} ${styles.degree}`}>
                                    <Tb360View />
                                </div>
                            </div>
                            <p className={`${styles.product__price}`}>3000 EP <del> 3560 EGP</del></p>
                            <p className={`${styles.product__para}`}>lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                            <h4 className={`${styles.product__size}`}>Size</h4>
                            <div className={`${styles.size}`}>
                                <Link to='' className={`${active === "first" ? styles.size__color : styles.size__form}`} onClick={() => { setActive("first") }}>2*3 M</Link>
                                <Link to='' className={`${active === "second" ? styles.size__color : styles.size__form}`} onClick={() => { setActive("second") }}>4*4 M</Link>
                                <Link to='' className={`${active === "third" ? styles.size__color : styles.size__form}`} onClick={() => { setActive("third") }}>3*4 M</Link>
                            </div>
                            <h4 className={`${styles.product__size}`}>Color</h4>
                            <div className={`${styles.size}`}>
                                <Link to='' className={`${activeColor === "white" ? styles.product__color : styles.color__form}`} onClick={() => { setActiveColor("white") }}><p className={`${styles.color}`} ></p></Link>
                                <Link to='' className={`${activeColor === "black" ? styles.product__color : styles.color__form}`} onClick={() => { setActiveColor("black") }}><p className={`${styles.colorb}`} ></p></Link>
                                <Link to='' className={`${activeColor === "blue" ? styles.product__color : styles.color__form}`} onClick={() => { setActiveColor("blue") }}><p className={`${styles.colorbl}`} ></p></Link>
                                <Link to='' className={`${activeColor === "yellow" ? styles.product__color : styles.color__form}`} onClick={() => { setActiveColor("yellow") }}><p className={`${styles.colory}`} ></p></Link>
                            </div>
                            <div className={`${styles.cart}`}>
                                <div className={`${styles.price}`} >
                                    <button className={`${styles.decrement__btn}`} onClick={() => setCount(count - increment)}>-</button>
                                    <input value={count} className={`${styles.count}`} />
                                    <button onClick={() => setCount(count + increment)} className={`${styles.increment__btn}`} >+</button>
                                </div>
                                <div>
                                    <Button className={`${styles.buy__btn}`}>buy now</Button>
                                </div>
                            </div>
                            <div className={`${styles.social}`}>
                                <div>
                                    <p> <AiOutlineHeart className={`${styles.social__icon}`} /> add to wishlist</p>
                                </div>
                                <div>
                                    <p> <BiVideo className={`${styles.social__icon}`} /> video call</p>
                                </div>
                                <div>
                                    <p> <TbShare3 className={`${styles.social__icon}`} /> share</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className={`${styles.allprod}`}>
                    <h2 className={`${styles.allprod__title}`}>you may also like</h2>
                    <Product productItems={productItems} handleAddProduct={handleAddProduct} />
                </div>
            </Container>

        </>
    )
}
export default Home;