import React, { useState } from 'react'
import axios  from 'axios';
import { useNavigate } from 'react-router-dom';


function Appointment() {
  const token = localStorage.getItem("token")
  const [data, setdata] = useState({
    name: "",
    age: "",
    place:"",
    doctor:"",
    phone:"",
    date:"",
    gender:"",

   
    
  })
  console.log(data);

  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata({ ...data, [name]: value })
  }
  const validate = (values) => {

    var error = {}
    if (!values.name) {
      error.name = "Enter username"
    }
   
    if (!values.age) {
      error.age = "please enter your age"
    }

    if (!values.place) {
      error.place = "please enter your place"
    }

    if (!values.doctor) {
      error.doctor = "please select your doctor"
    }

    if (!values.phone) {
      error.phone = "please enter your phone number"
    }

    if (!values.date) {
      error.date = "please enter the date"
    }

    if (!values.gender) {
      error.gender = "please enter your gender"
    }


   
    return error
  }



  const validation = (e) => {
    e.preventDefault();
    setFormErrors(validate(data))
    setIsSubmit(true)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios.post('http://localhost:4000/save/save-appointment', data,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then((res) => {
          console.log("res", res);
         
          navigate('/payment')
         
          // window.location.reload();

         if (res.data.role == 1) {
          localStorage.setItem("role", res.data.role)
          localStorage.setItem("user_id", res.data.login_id)
          localStorage.setItem("token", res)

          navigate('/userhome')
        }
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
  return (
    <>
    <br></br>
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
                 onChange={setRegister}
                 onClick={() => { setFormErrors({ ...formErrors, name: "" }) }}
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name='name'
                />
                <span style={{ color: formErrors.name ? "red" : "" }}> {formErrors.name} </span>
              </div>
              <div className="form-group">
                <input
                onChange={setRegister}
                onClick={() => { setFormErrors({ ...formErrors, age: "" }) }}
                  type="text"
                  name='age'
                  className="form-control"
                  placeholder="Age"
                />
                <span style={{ color: formErrors.age ? "red" : "" }}> {formErrors.age} </span>
              </div>
              <div className="form-group">
                <input
                onChange={setRegister}
                onClick={() => { setFormErrors({ ...formErrors, place: "" }) }}
                  type="text"
                  name='place'
                  className="form-control"
                  placeholder="place"
                />
                <span style={{ color: formErrors.place ? "red" : "" }}> {formErrors.place} </span>
              </div>
            </div>
            <div className="">
              <div className="form-group">
                <div className="form-field">
                  <div className="select-wrap">
                    <div className="icon">
                      <span className="ion-ios-arrow-down" />
                    </div>
                    <select name="doctor" id="" className="form-control"
                    onChange={setRegister}
                    onClick={() => { setFormErrors({ ...formErrors, doctor: "" }) }}
                    >
                      
                      <option value="">Select Your Doctor</option>
                      <option value="DR.ian smith">DR.Ian smith(Dentist)</option>
                      <option value="DR.rachel parker">DR.rachel parker(ophthalmologist)</option>
                      {/* <option value="dental">Dental</option>
                      <option value="ophthalmology">Ophthalmology</option> */}
                      <option value="other services">Other Services</option>
                    </select>
                    <span style={{ color: formErrors.service ? "red" : "" }}> {formErrors.service} </span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input
                onChange={setRegister}
                onClick={() => { setFormErrors({ ...formErrors, phone: "" }) }}
                  type="text"
                  name='phone'
                  className="form-control"
                  placeholder="Phone"
                />
                <span style={{ color: formErrors.phone ? "red" : "" }}> {formErrors.phone} </span>
              </div>
            </div>
            <div className="">
              <div className="form-group">
                <div className="input-wrap">
                  {/* <div className="icon">
                    <span className="ion-md-calendar" />
                  </div> */}
                  <input
                   onChange={setRegister}
                   onClick={() => { setFormErrors({ ...formErrors, date: "" }) }}
                    type="date"
                    name='date'
                    className="form-control appointment_date"
                    placeholder=""
                  />
                   <span style={{ color: formErrors.date ? "red" : "" }}> {formErrors.date} </span>
                </div>
              </div>
              {/* <div className="form-group">
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
              </div> */}
            </div>
            <div className="">
            <div className="form-group">
                <div className="input-wrap">
                  {/* <div className="icon">
                    <span className="ion-ios-clock" />
                  </div> */}
                  <input
                   onChange={setRegister}
                   onClick={() => { setFormErrors({ ...formErrors, gender: "" }) }}
                    type="text"
                    className="form-control appointment_time"
                    placeholder="gender"
                    name='gender'
                  />
                  <span style={{ color: formErrors.gender ? "red" : "" }}> {formErrors.gender} </span>
                </div>
              </div>
              <br></br>
              <div className="form-group">
                <input
                  type="submit"
                  onClick={validation}
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
