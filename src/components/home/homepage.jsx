import React, { useRef } from "react";
import '../home/homepage.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import AboutPage from "../about/aboutPage";
import CoffeType from "../CoffeType/Coffetype";
import ContactPage from "../contact/register";
import Reviews from "../Reviews/reviews";


function HomePage(){   
    return(
       <div className="home_page_for">
           <div className="container-fluid h-100">
            <div className="row h-100">
                <div className="col-6 offset-6 mt-5  ">
                    <h1 className="text-white m-5">Welcome To Our <br /> <span className="coffee">Coffee Break</span> </h1>
                      <div className="title-h ">
                      <div className="title-wrapper mt-5 mx-5">
                            <span className="CoffeTypes">Cuppuccino</span> <br />
                            <span className="CoffeTypes">Americano</span> <br />
                            <span className="CoffeTypes">Latte</span> <br />
                            <span className="CoffeTypes">French Vanilla</span> <br />
                            <span className="CoffeTypes">Espresso</span>
                    
                            </div>
                      </div>
                </div>
            </div>
            <div className="navbar">

            <div className="row">
              <AboutPage />
              <CoffeType />
              <Reviews />
              <ContactPage />
            </div>
            </div>
            
        </div>
       </div>
            

        
        
        
    )
}
export default HomePage;
