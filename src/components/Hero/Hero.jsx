import { Details } from '../../Data/HeroDetails'
import './Hero.css'
export default function Hero({MiniTitle , Title,SpanContent,paraghraph}) {
  return (
    <>
      <section className='hero-container'>
        <div className='img-container'>
            <img src="/assets/images/Hero images/kids.png"/>
            <img src="/assets/images/Hero images/Abstract Design (5).png"/>
            <div className='shape top-left'></div>
            <div className='shape top-right'></div>
            <div className='shape bottom-left'></div>
            <div className='shape bottom-right'></div>
        </div>
        <div className='right-section'>
        <div className='titles-container'>
          <div className='Luna-title'>
          <div>
            <p className='mini-title'>{MiniTitle}</p>
            <h1>{Title}<span>{SpanContent}</span></h1>
          </div>
            <p>{paraghraph}</p>
          </div>
        </div>
        <div className='information'>
             {
                Details.map((item)=>(
                    <div className='info'>
                        <p className='title-num'>{item.number}</p>
                        <p>{item.info}</p>
                    </div>
            ))}
        </div>
        </div>
      </section>
    </>
  )
}
