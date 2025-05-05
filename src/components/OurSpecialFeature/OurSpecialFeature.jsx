import './OurSpecialFeature.css'
import Button from '../Button/Button'
import TitleAndDiv from '../TitleAndDiv/TitleAndDiv'
import BookIcon from '../../Data/BookIcon'
import { AiFillSignal } from 'react-icons/ai'
import PlazerIcon from '../../Data/PlazerIcon'
import BenefitsCards from '../BenefitsCards/BenefitsCards'
import BrushIcon from '../../Data/BrushIcon'
import SunIcon from '../../Data/SunIcon'
import StarIcon from '../../Data/StarIcon'

export default function OurSpecialFeature() {
  return (
    <>
    <section className='special-feature'>
        <div className='special-title'>
        <Button Baio="Our Features"/>
          <TitleAndDiv show={true} LqTitle="Our Special Features" explain="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!" />
        </div>
        <div className='top-card-row top-margin'>
        <BenefitsCards TitleContent="Thematic Learning" icon={<BookIcon/>} CardInfo="Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant." />
        <BenefitsCards TitleContent="STEAM Education" icon={<AiFillSignal/>} CardInfo="We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills." />
        <BenefitsCards TitleContent="Language Immersion" icon={<PlazerIcon />} CardInfo="Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness." />
        </div>
        <div className="top-card-row">
        <BenefitsCards TitleContent="Art and Creativity" icon={<BrushIcon/>} CardHeight={"card-height"} CardInfo="Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms."/>
        <BenefitsCards TitleContent="Outdoor Education" icon={<SunIcon />} CardHeight={"card-height"}  CardInfo="Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment." />
        <BenefitsCards TitleContent="Play-Based Learning" icon={<StarIcon/>} CardHeight={"card-height"} CardInfo="Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking." />
        </div>
    </section>
    </>
  )
}
