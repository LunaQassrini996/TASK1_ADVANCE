import Button from '../Button/Button'
import NavigateCard from '../NavigateCard/NavigateCard'
import TitleAndDiv from '../TitleAndDiv/TitleAndDiv'
import'./NavigationSection.css'
export default function NavigationSection() {
  return (
    <>
    <section className="navigate-section">
        <div className='navigate-title'>
          <Button  Baio="Explore More"/>
            <TitleAndDiv   show={true} LqTitle="Navigate through our Pages" explain="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"/>
        </div>
        <div className='father-card-container'>
            <div className='navigate-card-container'>
            <NavigateCard CardHead="About Us"  CardDescription="Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education."/>
            <NavigateCard CardHead="Academics" CardDescription="Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development."/>
            </div>
            <div className='navigate-card-container'>
            <NavigateCard CardHead="Student Life" CardDescription="Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable."/>
            <NavigateCard CardHead="Admissions" CardDescription="Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces." />
            </div>
        </div>
    </section>
    </>
  )
}
