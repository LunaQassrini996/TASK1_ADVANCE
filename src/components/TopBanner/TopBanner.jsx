import './TopBanner.css'
import { GoArrowRight } from "react-icons/go"
export default function TopBanner() {
  return (
    <>
     <div className='Banner'>
     <img src='/assets/images/Top Banner and Navbar/Abstract Design (2).png'/>
     <img src="/assets/images/Top Banner and Navbar/ball.png" alt="an Shape" />
        <span>Admission is Open, Grab your seat now </span>
        <GoArrowRight className='arrow'/>
        <img src="/assets/images/Top Banner and Navbar/ball2.png" alt="an Shape" />
     <img src='/assets/images/Top Banner and Navbar/photo in top banner.png'/>
         
     </div>
    </>
  )
}
