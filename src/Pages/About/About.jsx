import AwardsAndRecognitionsSection from '../../components/AwardsAndRecognitionsSection/AwardsAndRecognitionsSection'
import HeroTwo from '../../components/HeroTwo/HeroTwo'
import MisionAndVision from '../../components/MissionAndVision/MisionAndVision'
import OurHistorySection from '../../components/OurHistorySection/OurHistorySection'
import OurTeamMembers from '../../components/OurTeamMembers/OurTeamMembers'
export default function About() {
  return (
    <>
    <HeroTwo baio="Overviews" HeroTitle="Welcome to Little Learners Academy" content="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential." />
     <MisionAndVision />
     <AwardsAndRecognitionsSection />
     <OurHistorySection />
     <OurTeamMembers />
    </>
  )
}
