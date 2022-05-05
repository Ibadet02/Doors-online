// import React from "react";
import { useState, useEffect, useRef } from "react";
import '../styles/products.css'
export const Products = ({allDoors,showProduct}) =>{
    const imgRef = useRef([])
    imgRef.current = []
    const [category,setCategory]=useState("all")
    const trendNumbers=[1,3,4,8,9] // I chose these numbers randomly between 0 and 11
    const specialNumbers=[0,1,5,11] // I chose these numbers randomly between 0 and 11
    const addToRefs = (el) => {
        if(el && !imgRef.current.includes(el)){
            imgRef.current.push(el)
        }
    }
    useEffect(()=>{
        window.addEventListener("resize",()=>{
            imgRef.current.forEach((el,index)=>{
                if(el.offsetWidth === 0){
                    el.style.height = `${imgRef.current.find(el=>{
                                        return el.offsetWidth>0
                                        }).offsetWidth * 1.43}px`
                }
                else{
                    el.style.height = `${el.offsetWidth * 1.43}px`
                }
            })
        })
    })
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
                                        <img ref={addToRefs} src={el[0]} alt="product" />
                                        <span className="product-name">{`${el[1]}`}</span>
                                        <button className="add-to-cart-button" onClick={()=>showProduct(index)}>ADD TO CART</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}