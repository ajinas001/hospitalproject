import React from 'react'

function Appointment() {
  return (
    <>
     <section className="ftco-section ftco-no-pt ftco-no-pb ftco-services-2 bg-light mt-5">
  <div className="container">
    <div className="row d-flex">
      <div className="col-md-7 py-5">
        <div className="py-lg-5">
          <div className="row justify-content-center pb-5">
            <div className="col-md-12 heading-section "  data-aos="fade-up">
              <h2 className="mb-3 text-center">Our Services</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 d-flex align-self-stretch "  data-aos="fade-up">
              <div className="media block-6 services d-flex">
                <div className="icon justify-content-center align-items-center d-flex">
                  <span className="flaticon-ambulance" />
                </div>
                <div className="media-body pl-md-4">
                  <h3 className="heading mb-3">Emergency Services</h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-self-stretch "  data-aos="fade-up">
              <div className="media block-6 services d-flex">
                <div className="icon justify-content-center align-items-center d-flex">
                  <span className="flaticon-doctor" />
                </div>
                <div className="media-body pl-md-4">
                  <h3 className="heading mb-3">Qualified Doctors</h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-self-stretch "  data-aos="fade-up">
              <div className="media block-6 services d-flex">
                <div className="icon justify-content-center align-items-center d-flex">
                  <span className="flaticon-stethoscope" />
                </div>
                <div className="media-body pl-md-4">
                  <h3 className="heading mb-3">Outdoors Checkup</h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-self-stretch "  data-aos="fade-up">
              <div className="media block-6 services d-flex">
                <div className="icon justify-content-center align-items-center d-flex">
                  <span className="flaticon-24-hours" />
                </div>
                <div className="media-body pl-md-4">
                  <h3 className="heading mb-3">24 Hours Service</h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-5 d-flex mt-5">
        <div className="appointment-wrap bg-white p-5 d-flex align-items-center">
          <form action="#" className="appointment-form "  data-aos="fade-up">
            <h3>For Appointment</h3>
            <div className="">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="">
              <div className="form-group">
                <div className="form-field">
                  <div className="select-wrap">
                    <div className="icon">
                      <span className="ion-ios-arrow-down" />
                    </div>
                    <select name="" id="" className="form-control">
                      <option value="">Select Your Services</option>
                      <option value="">Neurology</option>
                      <option value="">Cardiology</option>
                      <option value="">Dental</option>
                      <option value="">Ophthalmology</option>
                      <option value="">Other Services</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="">
              <div className="form-group">
                <div className="input-wrap">
                  <div className="icon">
                    <span className="ion-md-calendar" />
                  </div>
                  <input
                    type="text"
                    className="form-control appointment_date"
                    placeholder="Date"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-wrap">
                  <div className="icon">
                    <span className="ion-ios-clock" />
                  </div>
                  <input
                    type="text"
                    className="form-control appointment_time"
                    placeholder="Time"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div className="form-group">
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={2}
                  className="form-control"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  defaultValue="Appointment"
                  className="btn btn-secondary py-3 px-4"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
 
    </>
  )
}

export default Appointment
