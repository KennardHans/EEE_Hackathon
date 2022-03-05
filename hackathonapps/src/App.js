import './App.css';
import { Navbar } from './Commons/Navbar';
import {Footer} from './Commons/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { LandingPage } from './Pages/Signed_Out_Pages/Landing';
function App() {
  return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
        </Routes>
        <Footer/>
    </div>
    
    
  );
}

export default App;
