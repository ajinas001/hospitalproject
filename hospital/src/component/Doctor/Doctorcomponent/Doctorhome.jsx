import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Adddutycomponent from '../Addduty/Adddutycomponent';



function Doctorhome() {

const[data,setData] = useState([]);
  // const {doctor} = useParams(); 
  const drid = localStorage.getItem("user_id")
  console.log(drid);
useEffect(()=>{
  axios.get(`http://localhost:4000/save/view-patients/${drid}`)
  .then((res)=>{
      setData(res.data.data);
      console.log(res);
  })
  .catch((err)=>{
    console.log(err);
  })
},[]);
console.log("patientss",data);
  return (
    <>
     
      <section
        className="hero-wrap js-fullheight"
        style={{ backgroundImage: 'url("images/bgimage2.jpg")' }}
        data-section="home"
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay" />
        <div className="container">
          <div
            className="row no-gutters slider-text js-fullheight align-items-center justify-content-start"
            data-scrollax-parent="true"
          >
            <div className="col-md-6 pt-5 " data-aos="fade-">
              <div className="mt-5">
                <span className="subheading ml-5"><h3>Welcome Doctor</h3></span>
                {/* <h1 className="mb-4">
                  <span className='ml-5'>We are here </span> <br />
                  <span className='ml-5'>for your Care</span>
                </h1> */}
                <p className="mb-4 ml-5">
                  Far far away, behind the word mountains, far from the countries
                  Vokalia and Consonantia, there live the blind texts. Separated they
                  live in Bookmarksgrove.
                </p>
                <p className='d-flex'>
                  <a href="/doctordetails" className="btn btn-primary pt-3 py-2 px-5 ml-5 mr-2">
                    patients
                  </a>
                  <Adddutycomponent/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </>
  )
}

export default Doctorhome
