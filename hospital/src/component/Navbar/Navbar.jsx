import React from 'react'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Box, Modal, Typography } from '@mui/material';
import './navbar.css'


import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  borderRadius:'10px',
  p: 2,
  
};

export default function Navbar() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <nav
  className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target"
  id="ftco-navbar"
>
  <div className="container">
    <a className="navbar-brand" href="index.html">
      MM Hospital
    </a>
    <button
      className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
      type="button"
      data-toggle="collapse"
      data-target="#ftco-nav"
      aria-controls="ftco-nav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="oi oi-menu" /> Menu
    </button>
    <div className="collapse navbar-collapse" id="ftco-nav">
      <ul className="navbar-nav nav ml-auto">
        <li className="nav-item">
          <a href="/userhome" className="nav-link">
            <span>Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/aboutdetails" className="nav-link">
            <span>About</span>
          </a>
        </li>
        {/* <li className="nav-item">
          <a href="#department-section" className="nav-link">
            <span>Department</span>
          </a>
        </li> */}
        <li className="nav-item">
          <a href="/doctordetails" className="nav-link">
            <span>Doctors</span>
          </a>
        </li>
        {/* <li className="nav-item">
          <a href="#blog-section" className="nav-link">
            <span>Blog</span>
          </a>
        </li> */}
        <li className="nav-item">
          <a href="/contactdetails" className="nav-link">
            <span>Contact</span>
          </a>
        </li>
        <li className="nav-item cta mr-md-2">
          <a href="/doctordetails" className="nav-link">
           Appointment
          </a>
        </li>
        <li className="nav-item  mr-md-2">
        
            
       <div onClick={handleOpen} className='text-dark mt-2 ml-5'><LogoutOutlinedIcon/></div> 
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

                  <h3>Are you sure want to Logout?</h3>
                    <div className='logout_btn d-flex'>
                  <div onClick={handleClose} id='logout-cancel-btn' className='btn btn-primary py-2 px-4'>cancel</div>
                    <a href='/' className='nav-link'>
                  <button type="submit"  className="btn btn-danger py-2 px-4">
               logout
              </button>
              </a>
              </div>
              </div>
              </Typography>
             </Box>
             </Modal>
          
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
