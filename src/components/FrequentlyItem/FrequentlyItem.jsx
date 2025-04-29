import'./FrequentlyItem.css'
export default function FrequentlyItem({id,IsOpen , onClick , Question , Answer}) {
  return (
    <>
        <div className={IsOpen? "freq-container1":"freq-container"}>
            <div className='heading-Accord'>
                <h6 className={IsOpen?"with-space":"with-out-space"}>{Question}</h6>
                {IsOpen && (
                    <div>
                    <div className='an-border'></div>
                    <p>{Answer}</p>
                    </div>
                )}
            </div>
            <button className='Accord-btn' onClick={()=>onClick(id)}>{IsOpen?"-":"+"}</button>
        </div>
    </>
  )
}
