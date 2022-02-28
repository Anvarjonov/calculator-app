import React from 'react';
import '../CoffeType/coffeImg.css';
import coffe1 from '../../food image/img3.jpg'
import coffe2 from '../../food image/img12.jpg'
import coffe3 from '../../food image/cappuccino.jpg'


function CoffeType(){
    return(
        <div className="container-fluid  coffe_container">
            <div className="row">
                <div className="col my-3 offset-2 d-flex">
                <div className="card p-0 text-center">
                    <img  src={coffe1} alt="img1" />
                    <h4>Coffee Latte</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className='MyBtn'>Choose</button>
                </div>
                <div className="card p-0 mx-4 text-center">
                    <img  src={coffe2} alt="img1" />
                    <h4>Coffee Latte</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className='MyBtn'>Choose</button>
                </div>
                <div className="card p-0 text-center">
                    <img  src={coffe3} alt="img1" />
                    <h4>Coffee Latte</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className='MyBtn'>Choose</button>
                </div>                
                </div>
          </div> 
          <div className="row">
                <div className="col my-3 offset-2 d-flex">
                <div className="card p-0 text-center">
                    <img  src={coffe1} alt="img1" />
                    <h4>Coffee Latte</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className='MyBtn'>Choose</button>
                </div>
                <div className="card p-0 mx-4 text-center">
                    <img  src={coffe2} alt="img1" />
                    <h4>Coffee Latte</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className='MyBtn'>Choose</button>
                </div>
                <div className="card p-0 text-center">
                    <img  src={coffe3} alt="img1" />
                    <h4>Coffee Latte</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className='MyBtn'>Choose</button>
                </div>                
                </div>
          </div>    
        </div>
    )
}
export default CoffeType;
                   
                    
                    
                    
                    
                    
                    
                   
                    
                    
                    
                    
                    
                    