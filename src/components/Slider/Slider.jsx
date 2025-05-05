import './Slider.css'

import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import { useEffect, useState } from 'react';


export default function Slider({Card,data,PrevBtn1,NextBtn1}) {
    const [CurrentIndex,setCurrentIndex]= useState(0)
    const[CardsPerSlide,setCardsPerSlide]=useState(3)

   
useEffect(()=>{
  const update =() =>{
    if(window.innerWidth <= 992){
      setCardsPerSlide(1)
    }else{
      setCardsPerSlide(3)
    }
  };
  update();
  window.addEventListener("resize",update);
  return () => window.removeEventListener("resize",update)
},[]);


const HandlePrev=()=>{
  setCurrentIndex((prev) => prev - 1);
};

const HandleNext=()=>{
  // const MaxIndex = data.length -CardsPerSlide;
  setCurrentIndex((prev) => prev + 1);
};

  return (
  <>
  <section className='slider-container'>   
    <div className='slider-body'>
      {
        data.slice(CurrentIndex,CurrentIndex+CardsPerSlide).map((item)=>(
        <Card key= {item.id} {...item} /> 
         ))}
    </div>
    <button className={`prev-btn  ${PrevBtn1}`}  onClick={HandlePrev} disabled={CurrentIndex===0}><GoArrowLeft /></button>
    <button className={`prev-btn ${NextBtn1}`} onClick={HandleNext} disabled={CurrentIndex+CardsPerSlide >= data.length }><GoArrowRight /></button>
  </section>
  </>
  )
}
