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
import { useSelector, useDispatch } from 'react-redux'









const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    border: '0px solid #000',
    borderRadius: '10px',
    boxShadow: 50,
    p: 4,

};



function Adddutycomponent() {



    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const docid = localStorage.getItem("user_id")
    const profileImage = localStorage.getItem("profileImage")
    const department = localStorage.getItem("department")
    const name = localStorage.getItem("name")

    const [data, setdata] = useState({
        tokens: "",
        fees: "",
        startingTime: "",
        endTime: "",
        date: "",
        docid:docid,
        profileImage:profileImage,
        department:department,
        name:name,

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
        if (!values.tokens) {
            error.tokens = "Enter token count"
        }

        if (!values.fees) {
          error.fees = "Enter fees"
        }

        if (!values.startingTime) {
            error.startingTime = "Enter starting time"
        }
        if (!values.endTime) {
            error.endTime = "Enter ending time"
        }
        if (!values.date) {
            error.date = "Enter  date"
        }

        return error
    }



    const validation = (e) => {
        e.preventDefault();
        setFormErrors(validate(data))
        setIsSubmit(true)
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // dispatch(sendPost(data))
            axios.post('http://localhost:4000/save/save-duty', data)
                .then((res) => {
                    console.log("res", res);
                    toast.success(res.data.message)
                    window.location.reload()
                })
                .catch(err => {
                    console.log(err);
                    toast.error(err.response.data.Response)
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
                        <Button onClick={handleOpen} ><div className=' btn btn-warning py-3 px-4'>Add Duty</div> </Button>
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



                                           <div className="form-group d-flex">

                            <div className="mr-5">
                                    <label htmlFor="exampleInputNumberOfTokens">Number of Tokens</label>
                                    <input
                                        type="text"
                                        name='tokens'
                                        className="form-control"
                                        id="exampleInputNumberOfTokens"
                                        onChange={setRegister}
                                    />
                                    <span className="text-danger">{formErrors.numberOfTokens}</span>
                                </div>
                               
                                <div>
                                    <label htmlFor="exampleInputFees">Fees</label>
                                    <input
                                        type="text"
                                        name='fees'
                                        className="form-control"
                                        id="exampleInputFees"
                                        onChange={setRegister}
                                    />
                                    <span className="text-danger">{formErrors.fees}</span>
                                </div>
                            </div>

                                        <br />
                

                                        <div className="form-group d-flex">
                                <div className="mr-2">
                                    <label htmlFor="exampleInputEndTime">Starting Time</label>
                                    <input
                                        type="time"
                                        name='startingTime'
                                        className="form-control"
                                        id="exampleInputEndTime"
                                        onChange={setRegister}
                                    />
                                    <span className="text-danger">{formErrors.startingTime}</span>
                                </div>

                                <div>
                                    <label htmlFor="exampleInputStartingTime">Ending Time</label>
                                    <input
                                        type="time"
                                        name='endTime'
                                        className="form-control"
                                        id="exampleInputStartingTime"
                                        onChange={setRegister}
                                    />
                                    <span className="text-danger">{formErrors.endTime}</span>
                                </div>
                                <div>
                                    <label htmlFor="exampleInputProfileImage" className='ms-5'>Date</label>
                                    <input
                                        type="date"
                                        name='date'
                                        className="form-control ms-4"
                                        id="exampleInputProfileImage"
                                        onChange={setRegister}
                                    />
                                    <span className="text-danger">{formErrors.date}</span>
                                </div>

                            </div>

                                    </div>
                                    <div className="modal-footer">
                        
                                        
                                        <button type="submit" onClick={handleClose} className="btn btn-danger py-3 px-5 ">
                                            Cancel
                                        </button>
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

export default Adddutycomponent
