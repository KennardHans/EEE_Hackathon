import './App.css';
import { Navbar } from './Commons/Navbar';
import {Footer} from './Commons/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { LandingPage } from './Pages/Signed_Out_Pages/Landing';
import { AboutUs } from './Pages/Signed_Out_Pages/About';
import { FAQs } from './Pages/Signed_Out_Pages/FAQs';
import { JoinEvent } from './Pages/Signed_In_Pages/JoinEvent';
function App() {
  return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="aboutus" element={<AboutUs/>}/>
          <Route exact path="faqs" element={<FAQs/>}/>
          <Route exact path="joinevent" element={<JoinEvent/>}/>
        </Routes>
        <Footer/>
    </div>
    
    
  );
}

export default App;
