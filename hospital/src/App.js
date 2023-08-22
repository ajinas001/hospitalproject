
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Doctordetailspage from './pages/Doctordetailspage/Doctordetailspage';
import Aboutdetailspage from './pages/Aboutdetails/Aboutdetailspage';
import Contactpage from './pages/Contactpage/Contactpage';

function App() {
  return (
   <>
   
   <BrowserRouter>
   <Routes>
   <Route path='/' element= {<Home/>}></Route>
   <Route path='/doctordetails' element= {<Doctordetailspage/>}></Route>
   <Route path='/aboutdetails' element= {<Aboutdetailspage/>}></Route>
   <Route path='/contactdetails' element= {<Contactpage/>}></Route>
   </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;
