import React from 'react';
import '../about/about.css';
import img1 from '../../food image/img10.jpg'
import img2 from '../../food image/cappuccino.jpg'
import img3 from '../../food image/img11.jpg'
import img4 from '../../food image/img12.jpg'

function AboutPage(){
    return(
        <div className="container">
            <div className="row h-100 mb-5">
                 <div className="col-10 offset-1  mt-5 col-md-4">
                     <h3 className='py-3'>About CoffeeY</h3>
                     <p className='fs-5 text-secondary my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore optio quos eos ab ad! Nam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus consequatur voluptatum asperiores cupiditate hic ipsum quisquam corrupti non. Consequuntur nihil veniam ipsum molestiae culpa praesentium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, praesentium similique corrupti dolorem quasi optio consequatur odit minima mollitia voluptatum? </p>
                     <button className='Mybtn '>Learn More</button>
                 </div>
                 <div className="about_images col-10 offset-1 col-md-6  pt-3 mt-5 ">
                    <img  src={img1} alt="image1" />
                    <img  src={img2} alt="image2" />
                    <img  src={img3} alt="image3" />
                    <img  src={img4} alt="image4" />
                    
                 </div>
            </div>
        </div>
    )
}
export default AboutPage;