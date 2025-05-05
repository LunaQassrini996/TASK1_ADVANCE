import './MissionCard.css'
export default function MissionCard({MissionTitle,MissionIcon , MissionContent}) {
  return (
    <div className='mission-card'>
        <div className='photo-icon'>
            {/* <TitleAndDiv font="title-size" show={false} LqTitle={MissionTitle}/> */}
            <h2 className='title-size'>{MissionTitle}</h2>
          {MissionIcon}
        </div>
         
            <p className='card-mission-desc'>{MissionContent}</p>
        
    </div>
  )
}
