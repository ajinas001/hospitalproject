import React, { useState } from 'react'
import axios from 'axios'
import './register.css'
import { useNavigate } from 'react-router-dom'





function Registercomponent() {

  
  const navigate = useNavigate();
  const [data, setdata] = useState({
    name: "",
    password: "",
    email: "",
    place: "",
    mobileno: ""
  })
  console.log(data);


  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata({ ...data, [name]: value })
  }
  console.log("data",data);
  const validate = (values) => {

    var error = {}
    
    if (!values.name) {
      error.name = "Enter username"
    }

    if (!values.email) {
      error.email = "Enter email"
    }
    if (!values.place) {
      error.place = "Enter place"
    }
    if (!values.password) {
      error.password = "Enter password"
    }
    if (!values.mobileno) {
      error.mobileno = "Enter mobile no"
    }
    return error
  }



  const validation = (e) => {
    e.preventDefault();
    setFormErrors(validate(data))
    setIsSubmit(true)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios.post('http://localhost:4000/save/save-register', data)
        .then((res) => {
          console.log("res", res);
          
          navigate('/')
        

        
         
        })
        .catch(err => {
          console.log(err);
        })
    }
  }



  return (
    <>
    <div className='container'>
      <div className='row'>

      
   
    <div className='loginpageborder p-5 '>

<form onSubmit={validation}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Username
    </label>

    <input
      type="text"
      name='name'
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"

      onChange={setRegister}
      onClick={() => { setFormErrors({ formErrors, name: "" }) }}
    />
    <span style={{ color: formErrors.name ? "red" : "" }}>{formErrors.name}</span>
    <div id="emailHelp" className="form-text">

    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>


    <input
      type="password"
      name='password'
      className="form-control"
      id="exampleInputPassword1"
      onChange={setRegister}
      onClick={() => { setFormErrors({ formErrors, password: "" }) }}
    />
    <span style={{ color: formErrors.password ? "red" : "" }}>{formErrors.password}</span>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email
    </label>


    <input
      type="email"
      name='email'
      className="form-control"
      id="exampleInputEmail1"
      onChange={setRegister}
      onClick={() => { setFormErrors({ formErrors, email: "" }) }}
    />
    <span style={{ color: formErrors.email ? "red" : "" }}>{formErrors.email}</span>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
    Mobile no
    </label>


    <input
      type="text"
      name='mobileno'
      className="form-control"
      id="exampleInputEmail1"
      onChange={setRegister}
      onClick={() => { setFormErrors({ formErrors, mobileno: "" }) }}
    />
    <span style={{ color: formErrors.mobileno ? "red" : "" }}>{formErrors.mobileno}</span>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
    Place
    </label>


    <input
      type="text"
      name='place'
      className="form-control"
      id="exampleInputEmail1"
      onChange={setRegister}
      onClick={() => { setFormErrors({ formErrors, place: "" }) }}
    />
    <span style={{ color: formErrors.place ? "red" : "" }}>{formErrors.place}</span>
  </div>

  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Check me out
    </label>
  </div>
  <button type="submit" className="btn btn-primary py-2 px-4">
    Submit
  </button>
</form>

</div>
</div>
    </div>
           

         </>
  )
}

export default Registercomponent


