import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Doctordetails from '../../component/user/Doctordetails/Doctordetails'
import Footer from '../../component/footer/Footer'
import TopBar from '../../component/user/TopBar'

function Doctordetailspage() {
  return (
    <>
    <TopBar/>
      <Navbar/>
      <Doctordetails/>
      <Footer></Footer>
    </>
  )
}

export default Doctordetailspage
