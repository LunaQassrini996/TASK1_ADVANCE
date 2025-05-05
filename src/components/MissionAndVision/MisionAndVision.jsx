import'./MissionAndVision.css'
import Button from '../Button/Button'
import TitleAndDiv from '../TitleAndDiv/TitleAndDiv'
import MissionCard from '../MissionCard/MissionCard'
import MissionIconTwo from '../../Data/MissionIconTwo'
import MissionIconOne from '../../Data/MissionIconOne'
export default function MisionAndVision() {
  return (
    <>
        <section className='mission-class'> 
            <div className='mission-title'>
                <Button Baio="Mission & Visions" />
                <TitleAndDiv show={true} LqTitle="Our Mission & Visions" explain="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."/>
            </div>
            <div className='mission-card-container'>
                <MissionCard MissionTitle="Mission" MissionIcon={<MissionIconOne />} MissionContent="At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey." />
                <MissionCard MissionTitle="Vision" MissionIcon={<MissionIconTwo/>} MissionContent="Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity." />
            </div>
        </section>
    </>
  )
}
