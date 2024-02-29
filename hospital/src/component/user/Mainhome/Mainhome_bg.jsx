import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';


export default function Mainhome_bg() {

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      navigate("/")
    }
  }, [])
  return (
    <>
      <br></br>
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
                <span className="subheading ml-5">Welcome to Mediplus</span>
                <h1 className="mb-4">
                  <span className='ml-5'>We are here </span> <br />
                  <span className='ml-5'>for your Care</span>
                </h1>
                <p className="mb-4 ml-5">
                  Far far away, behind the word mountains, far from the countries
                  Vokalia and Consonantia, there live the blind texts. Separated they
                  live in Bookmarksgrove.
                </p>
                <p>
                  <a href="/doctordetails" className="btn btn-primary py-3 px-4 ml-5">
                    Make an appointment
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
