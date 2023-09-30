import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



function Doctorhome() {

const[data,setData] = useState([]);
  // const {doctor} = useParams(); 
  const drid = localStorage.getItem("user_id")
  console.log(drid);
useEffect(()=>{
  axios.get(`http://localhost:4000/save/view-patients/${drid}`)
  .then((res)=>{
      setData(res.data.data);
      console.log(res);
  })
  .catch((err)=>{
    console.log(err);
  })
},[]);
console.log("patientss",data);
  return (
    <>
      <h1 className='text-center text-primary mt-5'>Patient List</h1>
      <h1>data</h1>
      {data.map((data, key)=>(
       <> <h5 className=''>name:{data.name}</h5>
       <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
        </>
      ))}
     
    </>
  )
}

export default Doctorhome
