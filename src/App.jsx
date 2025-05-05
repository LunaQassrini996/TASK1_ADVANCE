
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import TopBanner from './components/TopBanner/TopBanner'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Academics from './Pages/Academics/Academics'
function App() {
  return (
    <>
     <div className='pad'> 
      <TopBanner /> 
      <NavBar/>
     </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/academics' element={<Academics/>} />
      </Routes>
     <Footer/>
    </>
  )
}

export default App
