import React, { useEffect, useState } from 'react'
import './Payment.css'

import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Payment() {

  const navigate = useNavigate();
  const [data, setdata] = useState({
    name: "",
    cardno: "",
    expmonth: "",
    expyear: "",
    cvv: ""
  })
  console.log(data);


  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata({ ...data, [name]: value })
  }

  const validate = (values) => {

    var error = {}

    var regname = /^([A-Za-z\.]+)$/;
    if (!regname.test(values.name)) {
    }
    else {
      error.name = "Please enter valid Name";
    };

    var regcardno = /^([A-Za-z\.]+)$/;
    if (!regcardno.test(values.cardno)) {
    }
    else {
      error.cardno = "Please enter valid card number";
    };

    var regexpmonth= /^([A-Za-z\.]+)$/;
    if (!regexpmonth.test(values.expmonth)) {
    }
    else {
      error.expmonth = "Please correct the data";
    };
    var regexpyear= /^([A-Za-z\.]+)$/;
    if (!regexpyear.test(values.expyear)) {
    }
    else {
      error.expyear = "Please correct the data";
    };
    var regcvv= /^([A-Za-z\.]+)$/;
    if (!regcvv.test(values.cvv)) {
    }
    else {
      error.cvv = "Please correct the data";
    };
   
    return error
  }
  console.log(formErrors);



  console.log(data);
  const itemId = localStorage.getItem('user_id')

  console.log(itemId);

  const validation = (e) => {
    console.log("tsrd");
    e.preventDefault();
    setFormErrors(validate(data))
    setIsSubmit(true)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios.get('http://localhost:4000/save/view-appointment', data)
        .then((res) => {
          console.log("res", res);

          navigate('/')




        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  useEffect(() => {
    axios.get('http://localhost:4000/save/view-appointment')
      .then((res) => {
        console.log('response view appointment', res);
        setdata(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])


  return (
    <>
      <>

        <div className="container div1 mt-4">
          <form action="" >
            <div className="row " >
              <div className="col">
                <h3 className="title">Appointment details</h3>
                <div className="inputBox">
                  <h5>patient name : {data.name}</h5>
                </div>
                <div className="inputBox">
                  <h5>place : {data.place}</h5>

                </div>
                <div className="inputBox">
                  <h5>Age : {data.age}</h5>
                  <h5>mobileno : {data.phone}</h5>
                </div>
                <hr className='line'></hr>
                <div className="inputBox">
                  <h3 className="title">payment summary</h3><hr></hr>
                  <h5>no of patient : 1</h5>
                </div>

                <div className="inputBox">
                  {/* <h5>Amount : Rs.250</h5> */}
                </div>
                <div className="inputBox">
                  {/* <span>zip code :</span>
              <input type="text" placeholder="123 456" /> */}
                  <h5>Total amount to pay = Rs.250</h5>

                </div>
              </div>
              <div className="col">
                <h3 className="title">payment</h3>
                <div className="inputBox">
                  <span>cards accepted :</span>
                  <img src="images/cards.jpg" alt="" />
                </div>
                <div className="inputBox">
                  <span>name on card :</span>
                  <input type="text" name='name' placeholder="mr. john deo"
                    onChange={setRegister}
                    onClick={() => { setFormErrors({ formErrors, name: "" }) }}

                  />
                  <p style={{ color: formErrors.name ? "red" : "" }}>{formErrors.name}</p>
                </div>
                <div className="inputBox">
                  <span>credit card number :</span>
                  <input type="text" name='cardno' placeholder="1111-2222-3333-4444"
                    onChange={setRegister}
                    onClick={() => { setFormErrors({ formErrors, cardno: "" }) }} />
                  <p style={{ color: formErrors.cardno ? "red" : "" }}>{formErrors.cardno}</p>
                </div>
                <div className="inputBox">
                  <span>exp month :</span>
                  <input type="text" name='expmonth' placeholder="january"
                  onChange={setRegister}
                  onClick={() => { setFormErrors({ formErrors, expmonth: "" }) }} />
                   <p style={{ color: formErrors.expmonth ? "red" : "" }}>{formErrors.expmonth}</p>
                </div>
                <div className="flex">
                  <div className="inputBox">
                    <span>exp year :</span>
                    <input type="number" name='expyear' placeholder={2022}
                     onChange={setRegister}
                     onClick={() => { setFormErrors({ formErrors, expyear: "" }) }} />
                      <p style={{ color: formErrors.expyear ? "red" : "" }}>{formErrors.expyear}</p>
                  </div>
                  <div className="inputBox">
                    <span>CVV :</span>
                    <input type="text" name='cvv' placeholder={1234}
                      onChange={setRegister}
                      onClick={() => { setFormErrors({ formErrors, cvv: "" }) }} />
                       <p style={{ color: formErrors.cvv ? "red" : "" }}>{formErrors.cvv}</p>
                   </div>
                </div>
              </div>
            </div>
            <div className='flex'>
              <a href='/userhome' className='btn btn-danger submit-btn'>cancel</a>
              {/* <a href='#' type='submit' className=''>submit</a> */}
              <button type='button' className='btn btn-success submit-btn ml-2' onClick={validation} >submit</button>
            </div>


          </form>
        </div>
      </>

    </>

  )
}

export default Payment
