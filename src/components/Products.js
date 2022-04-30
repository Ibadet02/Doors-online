// import React from "react";
import { useState } from "react";
import '../styles/products.css'
import p1 from '../assets/slide-door1.jpg'
import p2 from '../assets/slide-door2.jpg'
import p3 from '../assets/slide-door3.jpg'
import p4 from '../assets/product1.jpg'
import p5 from '../assets/product2.jpg'
import p6 from '../assets/product3.jpg'
import p7 from '../assets/product4.jpg'
import p8 from '../assets/product5.jpg'
import p9 from '../assets/product6.jpg'
import p10 from '../assets/product7.jpg'
import p11 from '../assets/product8.jpg'
import p12 from '../assets/product9.jpg'

export const Products = () =>{
    const [category,setCategory]=useState("all")
    const allDoors=[p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12]
    const trendNumbers=[1,3,4,8,9] // I chose these numbers randomly between 0 and 11
    const specialNumbers=[0,1,5,11] // I chose these numbers randomly between 0 and 11
    return (
        <section className="products">
            <div className="categories">
                <span onClick={()=>setCategory("all")} className={`${category === "all"?"active-category":""}`}>All products</span>
                <span onClick={()=>setCategory("trend")} className={`${category === "trend"?"active-category":""}`}>Trending products</span>
                <span onClick={()=>setCategory("special")} className={`${category === "special"?"active-category":""}`}>Special products</span>
            </div>
            <div className="category-grid-container">
                <div className="category-grid">
                    {
                        allDoors.map((el,index)=>{
                            return (
                                <div key={`product-${index+1}`} className={`${category === "all"?"show-product":category === "trend"?trendNumbers.includes(index)?"show-product":"hide-product":specialNumbers.includes(index)? "show-product": "hide-product"}`}>
                                        <img src={el}/>
                                        <span className="product-name">{`Door-${index+1}`}</span>
                                        <button className="add-to-cart-button">ADD TO CART</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}