
import { GoArrowRight } from "react-icons/go"
import './NavigateCard.css'
export default function NavigateCard({CardHead , CardDescription}) {
  return (
    <>
    <div className="navigate-card">
        <div className="Lq-navigate-title">
        <h3>{CardHead}</h3>
         <img className="fig" src="/assets/images/Navigate Photo/Container.png"/>
        <p className="ppp">{CardDescription}</p>
        </div>
        <button className="learn-btn">Learn More  <GoArrowRight/> </button>
    </div>
    </>
  )
}
