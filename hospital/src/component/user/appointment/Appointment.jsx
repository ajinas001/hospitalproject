import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


function Appointment() {

  const [selectedDate, setSelectedDate] = useState('');
  const [showTokenSelection, setShowTokenSelection] = useState(false);
  const [bookedtokens, setbookedtokens] = useState([])
  // const [occupiedtoken , setOccupiedtoken] = useState()
  // ...

  const { docid } = useParams()


  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setSelectedDate(value);
    console.log("date", value);

    axios.post('http://localhost:4000/save/view_token', { date: value, docid: docid })
      .then((res) => {
        if (res.data && res.data.success) {
          const tokens = res.data.data.map(item => item.token);
          console.log(tokens); // Array containing all token values
          setbookedtokens(tokens)
          // setOccupiedtoken(tokens); // Set occupied tokens
          setShowTokenSelection(true);
        } else {
          console.log("Error fetching occupied tokens: No data returned from the backend");
          // setOccupiedtoken(null); // Reset occupied token state on error
          setShowTokenSelection(true);
        }
      })
      .catch((error) => {
        console.log("Error fetching occupied tokens:", error);
        // setOccupiedtoken(null); // Reset occupied token state on error
        setShowTokenSelection(false);
      });

    setdata({ ...data, [name]: value });
  };



  // ...




  const today = new Date().toISOString().split('T')[0];
  // const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const numberOfTokens = 20;

  const token = localStorage.getItem("token")
  const [data, setdata] = useState({
    name: "",
    age: "",
    place: "",
    doctor: docid,
    phone: "",
    date: "",
    token: "",
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

    if (!values.phone) {
      error.phone = "please enter your phone number"
    }

    if (!values.date) {
      error.date = "please select the date"
    }
    if (!values.token) {
      error.token = "please select the available token"
    }

    // if (!values.gender) {
    //   error.gender = "please enter your gender"
    // }



    return error
  }

  const [name, setname] = useState([])

  // Inside your Appointment component

  // useEffect(() => {
  //   // Fetch the list of selected tokens for the selected date
  //   axios.get('http://localhost:4000/save/view')
  //     .then((res) => {
  //       const selectedTokens = res.data.selectedTokens;

  //       // Disable/hide the selected tokens
  //       const tokenOptions = document.querySelectorAll('select[name="token"] option');
  //       tokenOptions.forEach((option) => {
  //         const tokenNumber = parseInt(option.value);
  //         if (selectedTokens.includes(tokenNumber)) {
  //           option.disabled = true;
  //           // Optionally, hide the option
  //           option.style.display = 'none';
  //         }
  //       });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, [selectedDate]);



  // useEffect(() => {
  //   console.log(docid,"doc");
  //   axios.get('http://localhost:4000/save/view-doctor')

  //     .then((res) => {
  //       console.log("res", res);
  //       setname(res.data.data)
  //     })
  //     .catch((err) => {
  //       console.log("error", err);
  //     })
  // }, [])


  const validation = (e) => {
    e.preventDefault();
    setFormErrors(validate(data))
    setIsSubmit(true)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios.post('http://localhost:4000/save/save-appointment', data, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then((res) => {
          console.log("res", res);
          navigate('/payment')

          window.location.reload();

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
                  <div className="col-md-12 heading-section " data-aos="fade-up">
                    <h2 className="mb-3 text-center">Our Services</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 d-flex align-self-stretch " data-aos="fade-up">
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
                  <div className="col-md-6 d-flex align-self-stretch " data-aos="fade-up">
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
                  <div className="col-md-6 d-flex align-self-stretch " data-aos="fade-up">
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
                  <div className="col-md-6 d-flex align-self-stretch " data-aos="fade-up">
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
                <form action="#" className="appointment-form " data-aos="fade-up">
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
                    {/* <div className="form-group">
                      <div className="input-wrap">
                        <div className="select-wrap">
                          <div className="icon">
                            <span className="ion-ios-arrow-down" />
                          </div>
                          <select
                            name="doctor"
                            id=""
                            className="form-control"
                            onChange={setRegister}
                            onClick={() => { setFormErrors({ ...formErrors, doctor: "" }) }}
                            style={{ height: '50px', overflowY: 'auto' }}
                            defaultValue=""
                          >
                            <option value="" disabled hidden>Select Your Doctor</option>
                            {name.map((doc, key) => (
                              <option value={doc.loginId} key={key}>
                                {doc.name}
                              </option>
                            ))}
                          </select>



                          <span style={{ color: formErrors.doctor ? "red" : "" }}> {formErrors.doctor} </span>
                        </div>
                      </div>
                    </div> */}


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



                        <div className="form-group">
                          <label className="m-3">
                            Select date :
                            <input type="date" name="date" className="ms-3" value={selectedDate} min={today} max={today} onChange={handleDateChange} />
                          </label>
                          <span style={{ color: formErrors.date ? 'red' : '' }}> {formErrors.date} </span>


                          
                          {showTokenSelection && (
                            <div>
                              <select
                                name="token"
                                id=""
                                className="form-control mt-3"
                                onChange={setRegister}
                                onClick={() => { setFormErrors({ ...formErrors, doctor: '' }) }}
                                defaultValue=""
                              >
                                <option value="" disabled hidden>
                                  Select the token
                                </option>
                                {bookedtokens === null || bookedtokens === undefined ? (
                                  // Display all tokens when bookedtokens is null or undefined
                                  [...Array(numberOfTokens)].map((_, index) => (
                                    <option value={index + 1} key={index}>
                                      {index + 1}
                                    </option>
                                  ))
                                ) : (
                                  // Otherwise, display only available tokens
                                  [...Array(numberOfTokens)].map((_, index) => (
                                    !bookedtokens.includes(index + 1) && (
                                      <option value={index + 1} key={index}>
                                        {index + 1}
                                      </option>
                                    )
                                  ))
                                )}
                              </select>
                              <span style={{ color: formErrors.token ? 'red' : '' }}> {formErrors.token} </span>
                            </div>
                          )}


                        </div>                        {/* <input
                          onChange={setRegister}
                          onClick={() => { setFormErrors({ ...formErrors, gender: "" }) }}
                          type="text"
                          className="form-control appointment_time"
                          placeholder="gender"
                          name='gender'
                        />
                        <span style={{ color: formErrors.gender ? "red" : "" }}> {formErrors.gender} </span> */}
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
