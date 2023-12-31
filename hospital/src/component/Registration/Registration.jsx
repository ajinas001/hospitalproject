import React from 'react'
import Logincomponent from '../logincomponent/Logincomponent'

function Registration() {
  return (
    <>
       <section
  className="hero-wrap js-fullheight mt-4"
  style={{ backgroundImage: 'url("images/bg_3.jpg")' }}
  data-section="home"
  data-stellar-background-ratio="0.5"
>
  <div className="overlay" />
  <div className="container">
    <div
      className="row no-gutters slider-text js-fullheight align-items-center justify-content-start"
      data-scrollax-parent="true"
    >
      <div className="col-md-3 pt-5 " data-aos="fade-up">
        <div className="mt-5">
          <span className="subheading">Welcome to Mediplus</span>
          <h1 className="mb-4 ml-5">
          MM Hospital
           
          </h1>
          <p className="mb-4 ml-5">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove.
          </p>
          <p className='ml-5'>
            {/* <a href="/appointment" className="btn btn-primary py-3 px-4">
             Login Now
            </a> */}
            <Logincomponent/>
            
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Registration
