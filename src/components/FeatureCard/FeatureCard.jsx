import './FeatureCard.css'
export default function FeatureCard({LqPhoto , FeatureTitle,FeatureDescription}) {
  return (
    <>
        <div className='feature-card'>
            <div className='feature-shape'>
            </div>
            <div>
                 <img src={LqPhoto}/> 
                </div>
                <div className='feature-card-title'>
                    <p className='f-card-title'>{FeatureTitle}</p>
                    <p className='feature-desc'>{FeatureDescription}</p>
                </div>
        </div>
    </>
  )
}
