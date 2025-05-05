import './OurGallerySection.css'
import Button from '../Button/Button'
import TitleAndDiv from '../TitleAndDiv/TitleAndDiv'
import { Tabs } from '../../Data/Tabs'
import ImageSlider from '../ImageSlider/ImageSlider'
import { useState } from 'react'

export default function OurGallerySection() {
    const [ActiveTab, setActiveTab] = useState()
  return (
    <>
        <section className='gallery-section'>
            <div className='gallery-title'>
                <Button Baio="Our Gallery"/>
                <TitleAndDiv show={true} LqTitle="Our Rooms Gallery" explain="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."/>
            </div>
            <div>
            <div className="tabs-container" >
                {Tabs.map((item)=>(
                    <Button onClick={() => setActiveTab()} className={`${ActiveTab===item.id?"Lq-active": "Lq-disActive"}`} key={item.id} Baio={item.tab} />
                ))}
            </div>
            <div className='kk'>
                <ImageSlider />
               
            </div>
            </div>
        </section>
    </>
  )
}
