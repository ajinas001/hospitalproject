import React from 'react'
import QRCode from 'react-qr-code'
import './Payment.css'

function Paymentdone() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <h1 className='mt-5 text-center text-success'>Your Appointment booked successfully</h1>
          <p className='text-center'>Here is your Qrcode</p>
          <div style={{ height: "auto", margin: "auto", maxWidth: 200, width: "100%" }}>
    <QRCode
   
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={'book1'}
    // viewBox={`0 0 256 256`}
    />
</div>
          
        </div>
      </div>
    </>
  )
}

export default Paymentdone
