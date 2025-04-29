import'./BenefitsCards.css'
export default function BenefitsCards({TitleContent,icon,CardInfo,CardHeight}) {
  return (
    <>
    <div className={`Card ${CardHeight}`} >
    <div className='Lq-icon'>{icon}</div>
        <h4>{TitleContent}</h4>
        <p>{CardInfo}</p>
    </div>
    </>
  )
}
