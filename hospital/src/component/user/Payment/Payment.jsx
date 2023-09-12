import React, { useEffect, useState } from 'react'
import './Payment.css'

import axios from 'axios'

function Payment() {

  const [data, setData] = useState({});

  console.log(data);
  const itemId = localStorage.getItem('user_id')

  console.log(itemId);

  useEffect(() => {
    axios.get('http://localhost:4000/save/view-appointment')
      .then((res) => {
        console.log('response view appointment', res);
        setData(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <>
      <>

        <div className="container div1 mt-4">
          <form action="">
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
                  <h3 className="title">payment summary</h3>
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
                  <input type="text" placeholder="mr. john deo" />
                </div>
                <div className="inputBox">
                  <span>credit card number :</span>
                  <input type="text" placeholder="1111-2222-3333-4444" />
                </div>
                <div className="inputBox">
                  <span>exp month :</span>
                  <input type="text" placeholder="january" />
                </div>
                <div className="flex">
                  <div className="inputBox">
                    <span>exp year :</span>
                    <input type="number" placeholder={2022} />
                  </div>
                  <div className="inputBox">
                    <span>CVV :</span>
                    <input type="text" placeholder={1234} />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex'>
                <a href='/userhome' className='btn btn-danger submit-btn'>cancel</a>
                <a href='#' className='btn btn-success ml-2 submit-btn'>submit</a>
            </div>


          </form>
        </div>
      </>

    </>

  )
}

export default Payment
