import './TitleAndDiv.css'
export default function TitleAndDiv({Baio , LqTitle , explain}) {
  return (
    <>
    <section className='Lq-container'>
        <div className='rectangle'>
            <p className='baio'>{Baio}</p>
        </div>
        <h2 className='h2-title'>{LqTitle}</h2>
        <p className='exp-design'>{explain}</p>
    </section>
    </>
  )
}
