import'./AwardsAndRecognitionsSection.css'
import Button from '../Button/Button'
import TitleAndDiv from '../TitleAndDiv/TitleAndDiv'
import Slider from '../Slider/Slider'
import { AwardsAndRecognitionsDataCard } from '../../Data/AwardsAndRecognitionsDataCard'
import BenefitsCards from '../BenefitsCards/BenefitsCards'

export default function AwardsAndRecognitionsSection() {
  return (
    <>
     <section className='awards-section'>
        <div className="awards-title">
            <Button Baio='Our Achievements' />
            <TitleAndDiv show={true} LqTitle="Our Awards and Recognitions" explain="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."/>
        </div>
        
         <Slider Card={BenefitsCards} data={AwardsAndRecognitionsDataCard} PrevBtn1={"prev-btn1"} NextBtn1={"next-btn1"} />
         <span className='shape-paraghraph'>8 More Awards</span> 
     </section>
    </>
  )
}
