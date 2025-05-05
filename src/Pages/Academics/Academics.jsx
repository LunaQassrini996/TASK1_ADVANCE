import React from 'react'
import HeroTwo from '../../components/HeroTwo/HeroTwo'
import OurFeature from '../../components/OurFeature/OurFeature'
import OurGallerySection from '../../components/OurGallerySection/OurGallerySection'
import OurSpecialFeature from '../../components/OurSpecialFeature/OurSpecialFeature'

export default function Academics() {
  return (
    <>
      <HeroTwo baio="Academics" HeroTitle="Nurturing Young Minds for Success" content="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration." />
      <OurSpecialFeature />
      <OurFeature />
      <OurGallerySection/>
    </>
  )
}
