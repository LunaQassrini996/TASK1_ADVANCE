import './OurFeature.css'
import Button from '../Button/Button'
import TitleAndDiv from '../TitleAndDiv/TitleAndDiv'
import FeatureCard from '../FeatureCard/FeatureCard'
export default function OurFeature() {
  return (
    <>
        <section className='feature-section'>
            <div className='feature-title'>
                <Button Baio="Our Features"/>
                <TitleAndDiv show={true} LqTitle="What Students Learn" explain="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include" />
            </div>
            <div className='feature-card-container'>
                <div className='card-row-1'>
                <FeatureCard LqPhoto={'/assets/images/Academics page image/photo1.png'} FeatureTitle="Language Arts" FeatureDescription="Reading, writing, storytelling, and communication skills."/>
                <FeatureCard LqPhoto={'/assets/images/Academics page image/Image (38).png'} FeatureTitle="Mathematics" FeatureDescription="Number sense, basic operations, problem-solving, and logic."/>
                <FeatureCard  LqPhoto={'/assets/images/Academics page image/photo3.png'} FeatureTitle="Science" FeatureDescription="Exploring the natural world through hands-on experiments and investigations."/>
                </div>
                <div className='card-row-2'>
                <FeatureCard  LqPhoto={'/assets/images/Academics page image/photo4.png'} FeatureTitle="Social Studies" FeatureDescription="Cultivating an understanding of diverse cultures and communities."/>
                <FeatureCard  LqPhoto={'/assets/images/Academics page image/photo5.png'} FeatureTitle="Arts and Crafts" FeatureDescription="Encouraging creativity through various art forms and crafts."/>
                <FeatureCard  LqPhoto={'/assets/images/Academics page image/photo6.png'} FeatureTitle="Physical Education" FeatureDescription="Promoting physical fitness, coordination, and teamwork."/>
                </div>
            </div>
        </section>
    </>
  )
}
