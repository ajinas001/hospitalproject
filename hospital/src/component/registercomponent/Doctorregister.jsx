import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import './register.css'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Doctorregister() {
    const navigate = useNavigate();
    const [profileImage, setprofileImage] = useState();
    const [data, setdata] = useState({
        name: "",
        password: "",
        email: "",
        place: "",
        mobileno: "",
        department: "",
        profileImage: "",
        qualification: "",
        // fees: "",
        // startingTime: "",
        // numberOfTokens: "",
        // endTime: "",
        // date:""

    });
    console.log(data);

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const setRegister = (event) => {
        const { name, value } = event.target;
        setdata({ ...data, [name]: value });
    };
console.log(data);
    const validate = (values) => {
        var error = {};

        if (!values.name) {
            error.name = "Enter username";
        }

        if (!values.email) {
            error.email = "Enter email";
        }
        if (!values.place) {
            error.place = "Enter place";
        }
        if (!values.password) {
            error.password = "Enter password";
        }
        if (!values.mobileno) {
            error.mobileno = "Enter mobile no";
        }
        // if (!values.fees) {
        //     error.fees = "Enter fees";
        // }
        if (!values.department) {
            error.department = "Enter department";
        }
        if (!values.qualification) {
            error.qualification = "Enter qualification";
        }
        if (!values.profileImage) {
            error.profileImage = "Upload profile image";
        }
        // if (!values.numberOfTokens) {
        //     error.numberOfTokens = "Enter number of tokens";
        // }
        // if (!values.startingTime) {
        //     error.startingTime = "Enter starting time";
        // }
        // if (!values.endTime) {
        //     error.endTime = "Enter end time";
        // }
        // if (!values.date) {
        //     error.date = "Enter date";
        // }
        return error;
    };

    const validation = (e) => {
        e.preventDefault();
        setFormErrors(validate(data));
        setIsSubmit(true);
        if (Object.keys(formErrors).length === 0 && isSubmit) {

            if (profileImage) {
                const single = new FormData();
                single.append("profileImage", profileImage);
        
                axios
                  .post("http://localhost:4000/save/upload-image", single)
                  .then((res) => {
                    console.log(res);
                  })
                  .catch((err) => {
                    console.log("Error in POST request:", err);
                  });
              }

            axios.post('http://localhost:4000/save/save-registerdoctor', data)
                .then((res) => {
                    console.log("res", res);
                    // swal("Good job!", " Registered successfully ", "success");
                    navigate('/');
                    toast.success(res.data.message)
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-9'>
                    <div className='mt-5 p-5 pageborder'>
                        <form >
                            <h3 className='text-center mb-4'>Doctor Registration</h3>
                            <div className="form-group d-flex">
                                <div className="mr-5">
                                    <label htmlFor="exampleInputEmail1">Username</label>
                                    <input
                                        type="text"
                                        name='name'
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        onChange={setRegister}
                                    />
                                    <span className="text-danger">{formErrors.name}</span>
                                </div>
                                <div>
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input
                                        type="password"
                                        name='password'
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        onChange={setRegister}
                                    />
                                    <span className="text-danger">{formErrors.password}</span>
                                </div>
                            </div>
                            <div className="form-group d-flex">
                                <div className="mr-5">
                                    <label htmlFor="exampleInputEmail2">Email</label>
                                    <input
                                        type="email"
                                        name='email'
                                        className="form-control"
                                        id="exampleInputEmail2"
                                        onChange={setRegister}
                                    />
                                    <span className="text-danger">{formErrors.email}</span>
                                </div>
                                <div>
                                    <label htmlFor="exampleInputPlace">Place</label>
                                    <input
                                        type="text"
                                        name='place'
                                        className="form-control"
                                        id="exampleInputPlace"
                                        onChange={setRegister}
                                    />
                                    <span className="text-danger">{formErrors.place}</span>
                                </div>
                            </div>


                            {/* <div className="form-group d-flex">

                            <div className="mr-5">
                                    <label htmlFor="exampleInputNumberOfTokens">Number of Tokens</label>
                                    <input
                                        type="text"
                                        name='numberOfTokens'
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
                            </div> */}


                            <div className="form-group d-flex">
                            <div className="mr-5">
                                    <label htmlFor="exampleInputMobile">Mobile no</label>
                                    <input
                                        type="text"
                                        name='mobileno'
                                        className="form-control"
                                        id="exampleInputMobile"
                                        onChange={setRegister}
                                    />
                                    <span className="text-danger">{formErrors.mobileno}</span>
                                </div>
                                <div>
                                    <label htmlFor="exampleInputDepartment">Department</label>
                                    <input
                                        type="text"
                                        name='department'
                                        className="form-control"
                                        id="exampleInputDepartment"
                                        onChange={setRegister}
                                    />
                                    <span className="text-danger">{formErrors.department}</span>
                                </div>
                            </div>
                            <div className="form-group d-flex">
                                <div className="mr-5">
                                    <label htmlFor="exampleInputQualification">Qualification</label>
                                    <input
                                        type="text"
                                        name='qualification'
                                        className="form-control"
                                        id="exampleInputQualification"
                                        onChange={setRegister}
                                    />
                                    <span className="text-danger">{formErrors.qualification}</span>
                                </div>


                                <div>
                                    <label htmlFor="exampleInputProfileImage">Profile Image</label>
                                    <input
                                        type="file"
                                        name='profileImage'
                                        className="form-control"
                                        id="exampleInputProfileImage"
                                        onChange={(e) => {
                                            console.log(e.target.files[0]);
                                            setprofileImage(e.target.files[0]);
                                            setdata({ ...data, profileImage: e.target.files[0].name });
                                          }}
                                    />
                                    <span className="text-danger">{formErrors.profileImage}</span>
                                </div>
                            </div>
                           

                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <div className="text-center">
                                <button type="submit" onClick={validation} className="btn btn-primary subbtn py-2">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Doctorregister;
