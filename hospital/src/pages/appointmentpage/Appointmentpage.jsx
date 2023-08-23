import React from 'react'
import Appointment from '../../component/user/appointment/Appointment'
import TopBar from '../../component/user/TopBar'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/footer/Footer'

function Appointmentpage() {
  return (
    <>
    <TopBar/>
    <Navbar/>
      <Appointment/>
      <Footer/>
    </>
  )
}

export default Appointmentpage
