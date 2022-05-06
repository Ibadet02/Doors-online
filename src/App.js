import './App.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Products } from './components/Products';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Slidebar } from './components/Slidebar';
import { Basket } from './components/Basket';
import './styles/responsive.css';
import p1 from './assets/slide-door1.jpg'
import p2 from './assets/slide-door2.jpg'
import p3 from './assets/slide-door3.jpg'
import p4 from './assets/product1.jpg'
import p5 from './assets/product2.jpg'
import p6 from './assets/product3.jpg'
import p7 from './assets/product4.jpg'
import p8 from './assets/product5.jpg'
import p9 from './assets/product6.jpg'
import p10 from './assets/product7.jpg'
import p11 from './assets/product8.jpg'
import p12 from './assets/product9.jpg'
export const App = () => {
  const allDoors=[[p1,"1254$"],[p2,"1250$"],[p3,"1159$"],[p4,"2000$"],[p5,"1598$"],[p6,"1133$"],[p7,"1477$"],[p8,"1875$"],[p9,"1791$"],[p10,"1666$"],[p11,"2254$"],[p12,"1300$"]]

  const [displayProduct, setDisplayProduct] = useState(Array(allDoors.length).fill(false))
  const [inputData,setInputData] = useState(
        {
            productCount1:"0",
            productCount2:"0",
            productCount3:"0",
            productCount4:"0",
            productCount5:"0",
            productCount6:"0",
            productCount7:"0",
            productCount8:"0",
            productCount9:"0",
            productCount10:"0",
            productCount12:"0",
            productCount13:"0"
        }
  )
  const handleChange = (event) =>{
    setInputData(prev=>{
        event.target.value = (/^(0|[1-9][0-9]*)$/g).test(event.target.value)?event.target.value:event.target.value.slice(0,-1)
        return {
            ...prev,
            [event.target.name]:event.target.value
        }
    })
  }
const handleButton = (number,index) =>{
  setInputData(prev=>{
      return {
          ...prev,
          [Object.keys(prev)[index]] : Number(Object.values(prev)[index])+number >= 0? Number(Object.values(prev)[index])+number:"0"
      }
  })
}
  const [numberOfProducts,setNumberOfProducts] = useState(0)
  useEffect(()=>{
    setNumberOfProducts(()=>{
      return Object.values(inputData).reduce((a,b)=>Number(a)+Number(b))
    })
  },Object.values(inputData))
  // const [productNumber,setProductNumber] = useState(0)
  const addToChartClicked = (index)=>{
    setInputData(prev=>{
        return {
        ...prev,
        [Object.keys(prev)[index]] : Number(Object.values(prev)[index])+1
      }
    })
    setDisplayProduct(prev=>{
      let copyPrev=[...prev]
      copyPrev[index]=true
      return copyPrev
    })
  }
  const deleteProduct = (index) =>{
    setInputData(prev=>{
      return {
      ...prev,
      [Object.keys(prev)[index]] : ""
    }
  })
    setDisplayProduct(prev=>{
      let copyPrev=[...prev]
      copyPrev[index]=false
      return copyPrev
    })
  }
  return (
    <>
      <Router>
        <Navbar numberOfProducts={numberOfProducts}  />
        <Routes>
          <Route path='/' element={<><Slidebar /><Products allDoors={allDoors} showProduct={index=> addToChartClicked(index)} /></>}/>
          <Route path='/basket' element={
          <Basket 
            // productCount={inputData}
            allDoors={allDoors}
            showThisItem={displayProduct}
            throwToTrash={index=>deleteProduct(index)}
            // numberOfProducts={number=>setProductNumber(number)}
            handleButton={(number,index)=>handleButton(number,index)}
            handleChange={(number,index)=>handleChange(number,index)}
            inputData={inputData}
          />
          }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
