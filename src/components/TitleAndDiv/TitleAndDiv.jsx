import './TitleAndDiv.css'
export default function TitleAndDiv({ LqTitle , explain , show , font}) {
  return (
    <>
    <section className='Lq-container'>
        <h2 className={`h2-title ${font}`}>{LqTitle}</h2>
      {show&&<p className='exp-design'>{explain}</p>}
    </section>
    </>
  )
}
