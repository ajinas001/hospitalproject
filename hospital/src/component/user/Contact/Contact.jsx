import React from 'react'

function Contact() {
  return (
    <>
      <section className="ftco-section contact-section" id="contact-section">
  <div className="container">
    <div className="row justify-content-center mb-5 pb-3">
      <div className="col-md-7 heading-section text-center ">
        <h2 className="mb-4">Contact <span className='text-primary'>Us</span></h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </div>
    </div>
    <div className="row d-flex contact-info mb-5">
      <div className="col-md-6 col-lg-3 d-flex ">
        <div className="align-self-stretch box p-4 text-center bg-light">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="icon-map-signs" />
          </div>
          <h3 className="mb-4">Address</h3>
          <p>198 West 21th Street, Suite 721 New York NY 10016</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 d-flex ">
        <div className="align-self-stretch box p-4 text-center bg-light">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="icon-phone2" />
          </div>
          <h3 className="mb-4">Contact Number</h3>
          <p>
            <a href="tel://1234567920">+ 1235 2355 98</a>
          </p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 d-flex ">
        <div className="align-self-stretch box p-4 text-center bg-light">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="icon-paper-plane" />
          </div>
          <h3 className="mb-4">Email Address</h3>
          <p>
            <a href="mailto:info@yoursite.com">info@yoursite.com</a>
          </p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 d-flex ">
        <div className="align-self-stretch box p-4 text-center bg-light">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="icon-globe" />
          </div>
          <h3 className="mb-4">Website</h3>
          <p>
            <a href="#">yoursite.com</a>
          </p>
        </div>
      </div>
    </div>
    {/* <div className="row no-gutters block-9">
      <div className="col-md-6 order-md-last d-flex">
        <form action="#" className="bg-light p-5 contact-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Subject" />
          </div>
          <div className="form-group">
            <textarea
              name=""
              id=""
              cols={30}
              rows={7}
              className="form-control"
              placeholder="Message"
              defaultValue={""}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              defaultValue="Send Message"
              className="btn btn-secondary py-3 px-5"
            />
          </div>
        </form>
      </div>
      <div className="col-md-6 d-flex">
        <div id="map" className="bg-white" />
      </div>
    </div> */}
  </div>
</section>

    </>
  )
}

export default Contact
