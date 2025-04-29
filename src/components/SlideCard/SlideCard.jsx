import './SlideCard.css'
export default function SlideCard({photo,name,star,profileInfo}) {
  return (
    <>
        <div className='profile-card'>
          <div className='profile-name'>
            <img src={photo}/>
            <p>{name}</p>
            </div> 
            <div>{star}</div>
            <p className='card-profile-info'>{profileInfo}</p> 
        </div>
        
    </>
  )
}
