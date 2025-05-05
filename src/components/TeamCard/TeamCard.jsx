import './TeamCard.css';
export default function TeamCard({figure , member , email , titleDetail,memberDetail}) {
  return (
    <>
      <div className='team-card'>
        <div className='top-container'>
          <div className='picture-name'>
            <img src={figure}/>
            <p>{member}</p>
          </div>
          <div className='email-container'>{email}</div>
        </div>
        <div className='qualificate-container'>
            <h5 className='qualificate'>{titleDetail}</h5>
            <p>{memberDetail}</p>
        </div>
      </div>
    </>
  );
}
