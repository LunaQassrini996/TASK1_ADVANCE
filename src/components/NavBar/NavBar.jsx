import './NavBar.css'
import { NavItems } from '../../Data/NavData'
import { useState } from 'react'
import Logo from '../../Data/Logo'
import BurgerMenu from '../../Data/BurgerMenu'
export default function NavBar() {
  const[Toogle , setToogle] = useState(false)
  return (
    <>
     <nav className="nav-border">
        <div className='logo-container'>
           <Logo/>
        </div>
        <div className={Toogle?"btn-container2":"btn-container"}>
                {NavItems.map((NavLink,index)=>(
                    <button className={Toogle? "nav-btn2":"nav-btn"} key={index}> <a href={NavLink.linke}>{NavLink.NavLink}</a></button>
                    
            ))}
            <button className='close' onClick={() => setToogle(false)}>close</button>
        </div>
        <button className='burger-menu'  onClick={() => setToogle(true)}>
          <BurgerMenu />
        </button>
     </nav>
    </>
  )
}
