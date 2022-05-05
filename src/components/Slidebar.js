import React from "react";
import '../styles/slidebar.css'
import slide1 from '../assets/slide-door1.jpg'
import slide2 from '../assets/slide-door2.jpg'
import slide3 from '../assets/slide-door3.jpg'

export const Slidebar = ()=>{
    const sliderArr = [slide1,slide2,slide3,slide1]
    return (
    <section className="slidebar">
        <div className="slide-wrapper">
            {
                sliderArr.map((el,index)=>{
                    return (
                        <div className="slide-box" key={`img-${index+1}`}>
                            <div className="slide-padding">
                                <div className="slide-left">
                                    <span>New Inspiration 2022</span>
                                    <h2>DOORS MADE FOR YOUR HOME!</h2>
                                    <button>SHOP</button>
                                </div>
                                <div className="slide-right">
                                    <img src={el} alt="slide" />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
    )
}