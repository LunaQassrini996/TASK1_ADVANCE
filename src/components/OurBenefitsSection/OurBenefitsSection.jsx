import BenefitsCards from "../BenefitsCards/BenefitsCards";
import TitleAndDiv from "../TitleAndDiv/TitleAndDiv";
import { FaGraduationCap } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa";
import { FaMaskFace } from "react-icons/fa6";
import { HiMiniFlag } from "react-icons/hi2";
import { RiFootballFill } from "react-icons/ri";
import { RiParentFill } from "react-icons/ri";
import'./OurBenefitsSection.css'
import Button from "../Button/Button";
export default function OurBenefitsSection() {
  return (
    <>
    <section className="Benefit-container">
        <div className="title-baio">
           <Button Baio="Children Deserve Bright Future"/>
          <TitleAndDiv show={true} LqTitle="Our Benefits" explain="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future." />
        </div>
    
      
      <div className="card-top with-margin">
        <BenefitsCards TitleContent="Holistic Learning Approach" icon={<FaGraduationCap />} CardInfo="Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education." />
        <BenefitsCards TitleContent="Experienced Educators" icon={<FaCrown />} CardInfo="Our passionate and qualified teachers create a supportive and stimulating learning environment." />
        <BenefitsCards TitleContent="Nurturing Environment" icon={<FaMaskFace />} CardInfo="We prioritize safety and provide a warm and caring atmosphere for every child." />
        </div>
        <div className="card-top">
        <BenefitsCards TitleContent="Play-Based Learning" icon={<HiMiniFlag />} CardHeight={"card-height"} CardInfo="We believe in the power of play to foster creativity, problem-solving skills, and imagination." />
        <BenefitsCards TitleContent="Individualized Attention" icon={<RiFootballFill />} CardHeight={"card-height"} CardInfo="Our small class sizes enable personalized attention, catering to each child's unique needs." />
        <BenefitsCards TitleContent="Parent Involvement" icon={<RiParentFill />} CardHeight={"card-height"} CardInfo="We foster a strong parent-school partnership to ensure seamless communication and collaboration." />
        </div>
      

    </section>
   
    </>
  )
}
