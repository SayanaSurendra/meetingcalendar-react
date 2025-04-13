import Footer from "./components/Footer";

import NavBar from "./components/NavBar"

import "./index.css";
import Home from "./navpages/Home";
import Services from "./navpages/Services";
import Contact from "./navpages/Contact";
import About from "./navpages/About";
import DashBoard from "./components/DashBoard";

import { BrowserRouter as Router,Routes,Route } from "react-router";
import Sidebar from "./components/Sidebar";



function App() {

 
  return (
    <Router>
    <div className="meeting-container">
      <NavBar  />
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/services' element={<Services/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/dashboard' element={<DashBoard/>}/>
       <Route path='/dashboard/*' element={<Sidebar/>}/>
      </Routes>
      
     <Footer/>
     
    </div >
    </Router>
  )
}

export default App
