import Footer from "./Footer";
import Form from "./Form"
import NavBar from "./NavBar"
import Sidebar from "./Sidebar"
import "./index.css";
function App() {
 

  return (
    <div className="meeting-container">
      <NavBar/>
      <div className="main-section">
     <Sidebar/>
     <Form/>
     </div>
     <Footer/>
    </div >
  )
}

export default App
