import FrequentlySection from "../../components/FrequentlySection/FrequentlySection";
import Hero from "../../components/Hero/Hero";
import NavigationSection from "../../components/NavigationSection/NavigationSection";
import OurBenefitsSection from "../../components/OurBenefitsSection/OurBenefitsSection";
import OurTestimonailsSection from "../../components/OurTestimonailsSection/OurTestimonailsSection";
import'./Home.css'
export default function Home() {
  return (
    <>
      <Hero
        MiniTitle="Welcome to Little Learners Academy"
        Title="Where Young Minds Blossom and "
        SpanContent="Dreams Take Flight."
        paraghraph="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. 
              Join us as we embark on an exciting educational journey together!"
      />
      <OurBenefitsSection />
      <OurTestimonailsSection />
      <FrequentlySection />
      <NavigationSection />
    </>
  );
}
