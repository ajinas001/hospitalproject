
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Doctordetailspage from './pages/Doctordetailspage/Doctordetailspage';
import Aboutdetailspage from './pages/Aboutdetails/Aboutdetailspage';
import Contactpage from './pages/Contactpage/Contactpage';
import Appointmentpage from './pages/appointmentpage/Appointmentpage';
import o from './pages/Registrationpage/Registrationpage';
import Loginpage from './pages/Loginpage/Loginpage';
import Paymentpage from './pages/paymentpage/Paymentpage';
import Paymentdonepage from './pages/paymentpage/Paymentdonepage';
import Adminpage from './pages/Adminpage/Adminpage';
import Adddoctor from './pages/Adddoctorpage/Adddoctor';
import Doctorhomepage from './pages/Doctorhomepage/Doctorhomepage';
import { ToastContainer } from 'react-toastify';
import Doctorregistrationpage from './pages/Registrationpage/Doctorregistrationpage';
import Registrationpage from './pages/Registrationpage/Registrationpage';

function App() {
  return (
    
   <>
    <ToastContainer limit={1}autoClose={3000}></ToastContainer>
   <BrowserRouter>
   <Routes>
   <Route path='/' element= {<Loginpage/>}></Route>
   <Route path='/Register' element= {<Registrationpage/>}></Route>
   <Route path='/userhome' element= {<Home/>}></Route>
   <Route path='/doctordetails' element= {<Doctordetailspage/>}></Route>
   <Route path='/aboutdetails' element= {<Aboutdetailspage/>}></Route>
   <Route path='/contactdetails' element= {<Contactpage/>}></Route>
   <Route path='/appointment/:docid' element= {<Appointmentpage/>}></Route>
   <Route path='/payment' element= {<Paymentpage/>}></Route>
   <Route path='/paymentdonepage' element= {<Paymentdonepage/>}></Route>
   <Route path='/hospitalregister' element= {<Doctorregistrationpage/>}></Route>
   <Route path='/admin' element= {<Adminpage/>}></Route>
   <Route path='/adddoctor' element= {<Adddoctor/>}></Route>
   <Route path='/doctorhome' element= {<Doctorhomepage/>}></Route>

   </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;



