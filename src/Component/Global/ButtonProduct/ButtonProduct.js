import React from "react";
import style from "./../Card/Card.module.css"
const ButtonProduct = ({ filterItem, menuItems }) => {
    return (
        <>
            <div className={`${style.filter__btn}`}>
                {menuItems.map((Val, id) => {
                    return (
                        <button
                            className={`${style.product__btn}`}
                            onClick={() => filterItem(Val)}
                            key={id}
                        >
                            {Val}
                        </button>
                    );
                })}
            </div>
        </>
    );
};

export default ButtonProduct;