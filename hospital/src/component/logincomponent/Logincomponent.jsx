import React, { useState } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import {useSelector,useDispatch} from 'react-redux'
import { sendPost } from '../../Redux/LoginSlice';








const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  
  bgcolor: 'background.paper',
  border: '0px solid #000',
  borderRadius:'10px',
  boxShadow: 50,
  p: 4,
  
};



function Logincomponent() {



const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [data, setdata] = useState({
    name: "",
    password: "",
    // email:"",
    
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

    // if (!values.email) {
    //   error.email = "Enter email"
    // }
   
    if (!values.password) {
      error.password = "Enter password"
    }
   
    return error
  }



  const validation = (e) => {
    e.preventDefault();
    setFormErrors(validate(data))
    setIsSubmit(true)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // dispatch(sendPost(data))
      axios.post('http://localhost:4000/save/save-login', data)
        .then((res) => {
          console.log("res", res);
        
         
              if (res.data.role == 1) {
         
                localStorage.setItem("role", res.data.role)
                localStorage.setItem("user_id", res.data.login_id)
                localStorage.setItem("token", res.data.token)
                swal("welcome", " login successfully ", "success");
                navigate('/userhome')
                toast.success(res.data.message) 
                
              }
              if (res.data.role == 2) {
                console.log("fdyufvttftuvftyktyvk");
                localStorage.setItem("role", res.data.role)
                localStorage.setItem("user_id", res.data.login_id)
                localStorage.setItem("token", res.data.token)
                navigate('/admin')
                swal("welcome", " login successfully ", "success");
                toast.success(res.data.message) 
              }
              if (res.data.role == 0) {
                console.log("fdyufvttftuvftyktyvk");
                localStorage.setItem("role", res.data.role)
                localStorage.setItem("drid", res.data.login_id)
                localStorage.setItem("profileImage", res.data.profileImage)
                localStorage.setItem("department", res.data.department)
                localStorage.setItem("name", res.data.name)
                localStorage.setItem("user_id", res.data.login_id)
                localStorage.setItem("token", res.data.token)
                navigate('/doctorhome')
                swal("welcome", " login successfully ", "success");
                toast.success(res.data.message) 
              }
          // window.location.reload();

        
        })
        .catch(err => {
          console.log(err);
          toast.error(err.response.data.message) 
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

  

     
<div>
      <Button onClick={handleOpen} ><div className=' btn btn-primary py-3 px-4'>Login now</div> </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         
            <div className="modal-body">
           


              <label htmlFor="inputPassword5" className="form-label">
                Name
              </label>
              <input
                onChange={setRegister}
                onClick={() => { setFormErrors({ ...formErrors, name: "" }) }}
                name='name'
                type="name"
                id="inputPassword5"
                className="form-control"
                aria-describedby="passwordHelpBlock"
              />
              <span style={{ color: formErrors.name ? "red" : "" }}> {formErrors.name} </span>
              <br />
{/* 
              <label htmlFor="inputPassword5" className="form-label">
                Email
              </label>
              <input
                onChange={setRegister}
                onClick={() => { setFormErrors({ ...formErrors, email: "" }) }}
                type="email"
                name='email'
                id="inputPassword5"
                className="form-control"
                aria-describedby="passwordHelpBlock"
              /><span style={{ color: formErrors.name ? "red" : "" }}> {formErrors.name} </span>
              <br /> */}

              <label htmlFor="inputPassword5" className="form-label">
                 Password
              </label>
              <input
                onChange={setRegister}
                onClick={() => { setFormErrors({ ...formErrors, password: "" }) }}
                type="password"
                name='password'
                id="inputPassword5"
                className="form-control"
                aria-describedby="passwordHelpBlock"
              /><span style={{ color: formErrors.name ? "red" : "" }}> {formErrors.name} </span>
              <br />

             
            </div>
            <div className="modal-footer">
              {/* <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button> */}
              <a href='/register' className='mr-5' >Don't have an account?</a>
              <button type="submit" onClick={validation} className="btn btn-primary py-3 px-5 ">
                Submit
              </button>
              </div>
          </Typography>
        </Box>
      </Modal>
    </div>


    </div>
</div>
</>
    
  )
}

export default Logincomponent
