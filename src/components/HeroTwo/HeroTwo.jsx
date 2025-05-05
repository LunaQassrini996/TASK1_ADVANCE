import'./HeroTwo.css'
import TitleAndDiv from '../TitleAndDiv/TitleAndDiv'
import Button from '../Button/Button'
export default function HeroTwo({content , baio , HeroTitle}) {
  return (
    <>
       <section className='about-hero'>
            <div className='hero2'>
              <div className='pattern-container'>
               <img src='/assets/images/About page image/Abstract Design (6).png'/>
              </div>
            <div className='about-title'>
              <Button Baio={baio}/>
              <TitleAndDiv show={false} LqTitle={HeroTitle} font={"font-title"}/>
            </div>
                <p className='content'>{content}</p>  
            </div>
        </section> 
    </>
  )
}
