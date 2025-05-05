import React from 'react'
import './Button.css'
export default function Button({Baio}) {
  return (
    <>
    <div className='btn-cont'>
    <div className='rectangle'>
            <p className='baio'>{Baio}</p>
        </div>
    </div>
    </>
  )
}
