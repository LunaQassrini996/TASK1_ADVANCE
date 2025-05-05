import { DataCard } from '../../Data/DataCard'
import Button from '../Button/Button'
import SlideCard from '../SlideCard/SlideCard'
import Slider from '../Slider/Slider'
import TitleAndDiv from '../TitleAndDiv/TitleAndDiv'
import'./OurTestimonailsSection.css'
export default function OurTestimonailsSection() {
  console.log("slideis", SlideCard)
  return (
   <>
    <section className='testimonails-container'>
        <div className='testimonails-title'>
          <Button Baio="Their Happy Words 🤗" />
            <TitleAndDiv font={true} show={true} LqTitle="Our Testimonials" explain="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally." />
        </div>
        <Slider PrevBtn1="prev-btn2" NextBtn1="next-btn2" Card={SlideCard} data={DataCard} />
    </section>
   </>
  )
}
