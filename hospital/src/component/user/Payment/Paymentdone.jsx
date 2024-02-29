import React, { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'
import './Payment.css'
import axios from 'axios'




function Paymentdone() {



const id = localStorage.getItem("user_id")
console.log("id",id);
  const[data,setdata] = useState();
useEffect(()=>{
  axios.get(`http://localhost:4000/save/view-qrdata/:${id}`)
  .then((res)=>{
    console.log("qrdata");
    setdata(res.data.data)
    console.log("dataaaaas",data);
  })
  .catch((err)=>{
    console.log("error no qrdata");
  })
},[])


  return (
    <>
      <div className='container'>
        <div className='row'>
          <h1 className='mt-5 text-center text-success'>Your Appointment booked successfully</h1>
          <p className='text-center'>Here is your Qrcode</p>
          <div style={{ height: "auto", margin: "auto", maxWidth: 200, width: "100%" }}>
    <QRCode
   
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={'name'}
    // viewBox={`0 0 256 256`}
    />
</div>
          
        </div>
      </div>
    </>
  )
}

export default Paymentdone
