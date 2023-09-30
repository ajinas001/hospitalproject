import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '0px solid #000',
    borderRadius:'10px',
    boxShadow: 24,
    p: 4,
    width: '90%',
    maxWidth: '500px',
  };
  

function Adddoctorcomponent() {

  const [data, setdata] = useState({
    name: "",
    password: "",
    email: "",
    // department: "",
   
  })

  console.log(data);

    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

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
          error.name = "Enter name"
        }
    
        if (!values.email) {
          error.email = "Enter email"
        }
       
        if (!values.password) {
          error.password = "Enter password"
        }
        // if (!values.department) {
        //   error.department = "select department"
        // }

        

        return error
    }
  
    const validation = (e) => {
      e.preventDefault();
      setFormErrors(validate(data))
      setIsSubmit(true)
      
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        axios.post('http://localhost:4000/save/save-registerdoctor', data)
          .then((res) => {
            console.log("res", res);
            // toast.success(res.data.message, {
            //   position: "top-center",
            //   autoClose: 5000,
            //   hideProgressBar: false,
            //   closeOnClick: true,
            //   pauseOnHover: true,
            //   draggable: true,
            //   progress: undefined,
            //   theme: "colored",
            //   })
                // if (res.data.role == 1) {
           
                //   localStorage.setItem("role", res.data.role)
                //   localStorage.setItem("user_id", res.data.login_id)
                //   localStorage.setItem("token", res.data.token)
                //   navigate('/userhome')
                // }
                if (res.data.role == 2) {
                  console.log("fdyufvttftuvftyktyvk");
                  localStorage.setItem("role", res.data.role)
                  localStorage.setItem("user_id", res.data.login_id)
                  // localStorage.setItem("token", res.data.token)
                  swal("Good job!", " ADDED successfully ", "success");
                  navigate('/admin')
                }
            window.location.reload();
  
          
          })
          .catch(err => {
            console.log(err);
            // swal("Error!", err.res.data.message, "error");
            // toast.error(err.response.data.message, {
            //   position: "top-center",
            //   autoClose: 2000,
            //   hideProgressBar: false,
            //   closeOnClick: true,
            //   pauseOnHover: true,
            //   draggable: true,
            //   progress: undefined,
            //   theme: "colored",
            //   });
          })
      }
    }
       
  

  return (
    <>
      <div className='container'>
      <div className='row'>

      
  
    <div className='mt-3 p-3 p-md-5'>

<form onSubmit={validation} className='mx-auto'>  
  <div className="mb-3">
    <h3 className='text-center text-primary'>Add Doctor </h3>
    <label htmlFor="exampleInputEmail1" className="form-label mt-4">
     Doctor name
    </label>

    <input
    placeholder='eg:-Dr.john(dental)'
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
 

  {/* <div className="mb-3">
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
  </div> */}

  {/* <div className="mb-3">
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
  </div> */}

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

export default Adddoctorcomponent
