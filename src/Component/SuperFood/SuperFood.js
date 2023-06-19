import React from 'react'
import style from "./SuperFood.module.css"

export default function SuperFood() {
    return (
        <>
            <section className={`${style["home-counting"]}  `}>
                <div className={`${style["home-counting__container"]}  `}>
                    <div className={`${style["home-counting__content"]} `}>
                        <div className='container'>
                            <div className={`${style['category__info']}`}>
                                <div className='container'>
                                    <h2>Super Food For Your Super Brain</h2>
                                    <p className={`${style['category__para']}`}>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which </p>
                                    <a className={`${style.shop}`}>Shop Now</a>
                                    <div className='row '>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
