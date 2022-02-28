import { Link } from 'react-router-dom';
import React from 'react';
import '../Navbar/Navbar.css'

export default function Navbar(){
    return(
     <nav className='align-items-center'>
        <div  className="Nav_bar">
            <div className="logo">
              <Link className='text-white text-decoration-none' to="/">CoffeeY</Link>
            </div>
            <div>
            <div>

                 <ul className='d-flex justify-content-center align-items-center mt-3'>
                     <li className='list-inline-item mx-4 fs-5'><Link className='nav_list text-decoration-none text-white' to="/">Home</Link></li>
                     <li className='list-inline-item mx-4 fs-5'><Link className='nav_list text-decoration-none  text-white' to="about">About</Link></li>
                     <li className='list-inline-item mx-4 fs-5'><Link className='nav_list text-decoration-none text-white' to="menu">Menu</Link></li>
                     <li className='list-inline-item mx-4 fs-5'><Link className='nav_list text-decoration-none text-white' to="reviews">Reviews</Link></li>
                     <li className='list-inline-item mx-4 fs-5'><Link className='nav_list text-decoration-none text-white' to="contact">Contact</Link></li>
                 </ul>
               </div>
            </div>
        </div>
    </nav>
    )
}
