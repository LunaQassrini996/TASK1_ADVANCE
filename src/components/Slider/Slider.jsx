import './Slider.css'
import SlideCard from '../SlideCard/SlideCard'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { DataCard } from '../../Data/DataCard';
import { useEffect, useState } from 'react';
export default function Slider() {
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
  setCurrentIndex((prev) => Math.max(prev - 1,0));
};

const HandleNext=()=>{
  const MaxIndex = DataCard.length -CardsPerSlide;
  setCurrentIndex((prev) => Math.min(prev + 1,MaxIndex));
};

  return (
  <>
  <section className='slider-container'>
    
       
    <div className='slider-body'>
      {
        DataCard.slice(CurrentIndex,CurrentIndex+CardsPerSlide).map((item)=>(
        <SlideCard key={item.id} photo={item.photo} name={item.name} star={item.star} profileInfo={item.profileInfo}/>
         ))}
    </div>
    <button className='prev-btn' onClick={HandlePrev} disabled={CurrentIndex===0}><GoArrowLeft /></button>
       <button className='next-btn' onClick={HandleNext} disabled={CurrentIndex+3>=DataCard.length - CardsPerSlide}><GoArrowRight /></button>
  </section>
  </>
  )
}
