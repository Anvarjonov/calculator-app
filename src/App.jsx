import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route,  Switch} from 'react-router-dom';
import HomePage from './components/home/homepage';
import AboutPage from './components/about/aboutPage';
import ContactPage from './components/contact/register';
import CoffeType from './components/CoffeType/Coffetype';
import Reviews from './components/Reviews/reviews';



 




function App() {
  return (
    <>
      <BrowserRouter>
       <Navbar />
       <Routes>
       <Route path="/" element={<HomePage />}  />
       <Route path='/about' element={<AboutPage />} />
       <Route path='/menu' element={<CoffeType />} />
       <Route path='/reviews' element={<Reviews/>} />
       <Route path='/contact' element={<ContactPage />} />
     </Routes>
    </BrowserRouter>
     
        
    </>
  )
  
}

              
       
        
     
       

export default App;

