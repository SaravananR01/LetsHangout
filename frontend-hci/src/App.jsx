import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Homepage from "./components/Homepage";
import NewCode from './components/NewCode';
import Footer from "./components/Footer";
import HowToUse from "./components/HowToUse";
import Calendar from "./components/Calendar";
import EnterCode from "./components/EnterCode";
import Confirmation from "./components/Confirmation";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/get_data/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/newcode" element={<NewCode/>} />
          <Route path="/howtouse" element={<HowToUse />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/entercode" element={<EnterCode/>} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
    
  );
}
 
export default App;
