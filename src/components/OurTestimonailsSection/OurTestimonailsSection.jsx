import Slider from '../Slider/Slider'
import TitleAndDiv from '../TitleAndDiv/TitleAndDiv'
import'./OurTestimonailsSection.css'
export default function OurTestimonailsSection() {
  return (
   <>
    <section className='testimonails-container'>
        <div className='testimonails-title'>
            <TitleAndDiv Baio="Their Happy Words 🤗" LqTitle="Our Testimonials" explain="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally." />
        </div>
        <Slider/>
    </section>
   </>
  )
}
