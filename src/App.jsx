import Footer from "./Footer";
import Form from "./Form"
import NavBar from "./NavBar"
import Sidebar from "./Sidebar"
import { useState } from "react";
import "./index.css";





function App() {
 const [activeTitle,setActiveTitle]=useState("");
const handleRedirect=(title)=>{
 setActiveTitle(title);
};
  return (
    <div className="meeting-container">
      <NavBar  />
      <div className="main-section">
     <Sidebar onRedirect={handleRedirect}/>
     {activeTitle === "Schedule Meeting" && <Form/>}
     
     </div>
     <Footer/>
    </div >
  )
}

export default App
