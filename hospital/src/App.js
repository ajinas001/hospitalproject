
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Doctordetailspage from './pages/Doctordetailspage/Doctordetailspage';
import Aboutdetailspage from './pages/Aboutdetails/Aboutdetailspage';
import Contactpage from './pages/Contactpage/Contactpage';
import Appointmentpage from './pages/appointmentpage/Appointmentpage';
import Registrationpage from './pages/Registrationpage/Registrationpage';
import Loginpage from './pages/Loginpage/Loginpage';

function App() {
  return (
   <>
   
   <BrowserRouter>
   <Routes>
   <Route path='/' element= {<Loginpage/>}></Route>
   <Route path='/Register' element= {<Registrationpage/>}></Route>
   <Route path='/userhome' element= {<Home/>}></Route>
   <Route path='/doctordetails' element= {<Doctordetailspage/>}></Route>
   <Route path='/aboutdetails' element= {<Aboutdetailspage/>}></Route>
   <Route path='/contactdetails' element= {<Contactpage/>}></Route>
   <Route path='/appointment' element= {<Appointmentpage/>}></Route>
   </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;
