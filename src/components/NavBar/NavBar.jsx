import './NavBar.css'
import { NavItems } from '../../Data/NavData'
import { useState } from 'react'
import Logo from '../../Data/Logo'
import BurgerMenu from '../../Data/BurgerMenu'
import {  NavLink } from 'react-router-dom'
export default function NavBar() {
  const[Toogle , setToogle] = useState(false)
  // const [active , setActive] = useState(NavItems[0]?.NavLink)
  return (
    <>
     <nav className="nav-border">
        {/* <div className='logo-container'>
           <Logo/>
        </div>
        <div className={Toogle?"btn-container2":"btn-container"}>
                {NavItems.map((NavLinks,index)=>(
                    <button className={Toogle? "nav-btn2":"nav-btn"} key={index}> <NavLink to={NavLinks.linke}>{NavLinks.NavLink}</NavLink></button>
                    
            ))}
            <button className='close' onClick={() => setToogle(false)}>close</button>
        </div>
        <button className='burger-menu'  onClick={() => setToogle(true)}>
          <BurgerMenu />
        </button> */}
         <div className='logo-container'>
           <Logo/>
        </div>
        <div>
          <ul className= {Toogle?"nav-item2":"nav-item"}>
            {NavItems.map((item ,index)=>{
              return(
                <li key={index}><NavLink  className={({isActive})=> isActive?"Active":""}to={item?.linke}>{item?.NavLink}</NavLink></li>
              )
            })}
            <button className='close' onClick={() => setToogle(false)}>close</button>
          </ul>
        </div>
         <button className='burger-menu'  onClick={() => setToogle(true)}>
          <BurgerMenu />
        </button>
     </nav>
    </>
  )
}
