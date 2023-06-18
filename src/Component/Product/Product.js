import React, { useState } from 'react'
import Data from "../../Data";
import Card from "../Global/Card/Card";
import Buttons from "../Global/ButtonProduct/ButtonProduct";
import style from "../Global/Card/Card.module.css"
import img from "../../assets/separator-img.png"

export default function Product() {
    const [product, setProduct] = useState(Data);
    const menuItems = [...new Set(Data.map((Val) => Val.category))];

    const filterItem = (prod) => {
        const newProduct = Data.filter((newVal) => {
            return newVal.category === prod;
        });
        setProduct(newProduct);
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <h1 className={`${style.category__title}`}>Categories Products</h1>
                    <img alt="" src={img} className={`${style.category__img}`} />
                    <Buttons
                        filterItem={filterItem}
                        menuItems={menuItems}
                    />

                    <div className={`${style.allProd}`}>

                        <Card ProdItem={product} />

                    </div>

                </div>
            </div >
        </>
    )
}
