import'./OurTeamMembers.css'
import Button from '../Button/Button'
import TitleAndDiv from '../TitleAndDiv/TitleAndDiv'
import TeamCard from '../TeamCard/TeamCard'
import { MdEmail } from "react-icons/md";
export default function OurTeamMembers() {
  return (
    <>
      <section className='team-section'>
        <div className='team-title'>
            <Button Baio="Our Teachers With Experties" />
            <TitleAndDiv  show={true} LqTitle="Our Team Members" explain="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."/>
        </div>
        <div className='group-card'>
           <div className='team-card-container'>
            <TeamCard figure={'/assets/images/About page image/Image (18).png'} member="Ms. Sarah Anderson" email={<MdEmail/>} titleDetail="Qualification:Bachelor's Degree in Early Childhood Education" memberDetail="Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn." />
            <TeamCard figure={'/assets/images/About page image/David.png'} member="Mr. David Roberts" email={<MdEmail/>} titleDetail="Qualification: Master's Degree in Elementary Education" memberDetail="With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically." />
           </div>
           <div className='team-card-container'>
            <TeamCard figure={'/assets/images/About page image/Emily.png'} member="Ms. Emily Hernandez" email={<MdEmail/>}  titleDetail="Qualification: Diploma in Child Psychology" memberDetail="Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students." />
            <TeamCard  figure={'/assets/images/About page image/Image (19).png'} member="Mr. Michael Turner"email={<MdEmail/>} titleDetail="Qualification: Bachelor's Degree in Physical Education" memberDetail="Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle." />
           </div>
           <div className='team-card-container'>
            <TeamCard  figure={'/assets/images/About page image/Image (21).png'}  member="Ms. Jessica Lee" email={<MdEmail/>} titleDetail="Qualification: Master's Degree in Special Education" memberDetail="Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential." />
            <TeamCard  figure={'/assets/images/About page image/Image (22).png'} member="Mr. William Parker"email={<MdEmail/>} titleDetail="Qualification: Bachelor's Degree in Fine Arts" memberDetail="Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students." />
           </div>
        </div>
      </section>
    </>
  )
}
