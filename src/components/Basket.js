import {useState, useEffect} from "react";
import '../styles/basket.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
export const Basket = ({allDoors, showThisItem, productCount,throwToTrash,numberOfProducts,handleButton, handleChange, inputData}) =>{
    const isEmpty = showThisItem.every(el=>{
        return el===false
    })
    return (
        <section className="basket" style={{paddingTop:"4.5rem"}}>
        {!isEmpty?
            <div className="basket-wrapper">
                {
                    allDoors.map((el,index)=>{
                        return (
                            <div style={{display: showThisItem[index]?"flex":"none"}} className="basket-product" key={`p${index}`}>
                                <div className="img-wrapper">
                                    <img src={`${el[0]}`} />
                                </div>
                                <span className="price">
                                    {
                                        Number(el[1].slice(0,-1))*Object.values(inputData)[index]+"$"
                                    }
                                </span>
                                <div className="button-wrapper">
                                    <button onClick={()=>handleButton(-1,index)}>
                                        <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                                    </button>
                                    <input 
                                        type="text"
                                        name={`productCount${index+1}`}
                                        onChange={handleChange}
                                        value={Object.values(inputData)[index]}
                                    />
                                    <button onClick={()=>handleButton(1,index)}>
                                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                    </button>
                                </div>
                                <button onClick={()=>throwToTrash(index)} className="trash-button">
                                    <FontAwesomeIcon className="trash" size="2x" width={"2.2rem"} height={"2.4rem"} icon={faTrash}></FontAwesomeIcon>
                                </button>
                            </div>
                        )
                    })
                }
            </div>
            :<div className="empty-basket">
                <p className="basket-text">
                    You have not chosen any product!
                </p>
            </div>
        }
        </section>
    )
}