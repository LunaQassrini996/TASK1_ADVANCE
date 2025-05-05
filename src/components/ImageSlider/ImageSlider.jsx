import { useEffect, useState } from 'react';
import { ImagesSliderData } from '../../Data/ImagesSliderData';
import './ImageSlider.css'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
export default function ImageSlider() {
  const [TheIndex,setTheIndex]= useState(0)
  const[ImagesPerSlide,setImagesPerSlide]=useState(4)

  useEffect(()=>{
    const update =() =>{
      if(window.innerWidth <= 992){
        setImagesPerSlide(1)
      }else{
        setImagesPerSlide(4)
      }
    };
    update();
    window.addEventListener("resize",update);
    return () => window.removeEventListener("resize",update)
  },[]);

  const HandlePrevImage=()=>{
    setTheIndex((prev) => prev - 1);
  };

  const HandleNextImage=()=>{
    setTheIndex((prev) => prev + 1);
  };
  return (
    <>
        <div className='image-slider-container'>
            <div className='images-container'>
                {ImagesSliderData.slice(TheIndex,TheIndex+ImagesPerSlide).map((item)=>(
                     <img key={item.id} className='photo-slider' src={item.pic}/>
                ))}
            </div>
            <div className='btn-title'>

            <div>
              <p className='image-lq-title'>ClassRooms</p>
              <p>niwbegf'prdnvgolnrdekrgnikrngporijmfwihoklf bvd;k</p>
            </div>
            <div className='control-btn-container'>
              
              <button className='left-btn' onClick={HandlePrevImage}disabled={TheIndex===0}><GoArrowLeft/></button>
              <button className='right-btn' onClick={HandleNextImage} disabled={TheIndex+ImagesPerSlide >= ImagesSliderData.length }><GoArrowRight/></button>
            </div>
            </div>
        </div>
    </>
  )
}
