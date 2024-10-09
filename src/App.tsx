import { Route, Routes } from 'react-router-dom';
import ContactPage from "./pages/contact";
import LandingPage from './pages/landing';
// import Navbar from './pages/navbar'; 
import "./App.css"; 
import Navbar from './pages/navbar';
function App() {
  return ( 
    <div className="App">
      <header className="App-header">
        <Routes> 
          <Route element={<LandingPage />} path="/landingPage" /> 
           <Route element={<Navbar />} path="/" />  
          <Route element={<ContactPage />} path="/contact" />
                                      </Routes>
      </header> 
    </div> 
  );
}

export default App;
