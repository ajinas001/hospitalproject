import React from 'react'
import TopBar from '../component/user/TopBar'
import Navbar from '../component/Navbar/Navbar'
import Mainhome_bg from '../component/user/Mainhome/Mainhome_bg'
import Footer from '../component/footer/Footer'
import About from '../component/user/About/About'
import Doctordetails from '../component/user/Doctordetails/Doctordetails'
import Contact from '../component/user/Contact/Contact'



export default function Home() {
  return (
    <div>
     <TopBar/> 
     <Navbar/>
     <Mainhome_bg/>
     <About/>
    <Doctordetails/>
    <Contact/>

     <Footer/>
    </div>
  )
}
