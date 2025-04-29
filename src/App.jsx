
import './App.css'
import Footer from './components/Footer/Footer'
import FrequentlySection from './components/FrequentlySection/FrequentlySection'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import NavigationSection from './components/NavigationSection/NavigationSection'
import OurBenefitsSection from './components/OurBenefitsSection/OurBenefitsSection'
import OurTestimonailsSection from './components/OurTestimonailsSection/OurTestimonailsSection'
import TopBanner from './components/TopBanner/TopBanner'
function App() {
  return (
    <>
     <div className='pad'> 
      <TopBanner /> 
      <NavBar />
     </div>
      <Hero MiniTitle="Welcome to Little Learners Academy" Title="Where Young Minds Blossom and " SpanContent="Dreams Take Flight." paraghraph="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. 
              Join us as we embark on an exciting educational journey together!"/> 
      <OurBenefitsSection/> 
       <OurTestimonailsSection />
        <FrequentlySection /> 
       <NavigationSection />
     <Footer/>
    </>
  )
}

export default App
