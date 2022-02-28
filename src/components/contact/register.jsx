import React from 'react';
import '../contact/register.css';

function ContactPage(){
    return(
        <div className="wrapper_sign_up">
            <div className="container sign_container ">
            <div className="row  h-100">
                    <div className="col-12 offset-2 col-sm-12 offset-sm-2 col-md-8 offset-md-3 col-lg-5 offset-lg-4 ">
                        <div className="card w-75 card_sign">
                            <div className="card-header text-center">
                                <strong className='fs-3'>Sign Up</strong>
                            </div>
                            <div className="card-body">
                                <div className='mb-3'>
                                    <label htmlFor="name" className='form-label'> Name</label>
                                    <input type="text" id='name' className='form-control' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="phone" className='form-label'>Telephone Number</label>
                                    <input type="number" id='phone' className='form-control' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="email" className='form-label'>Email Address</label>
                                    <input type="text" id='email' className='form-control' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="password" className='form-label'>Password</label>
                                    <input type="text" id='password' className='form-control' />
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <button className='mybtn fw-bolder px-5 py-2'>Create Account</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    )
}
export default ContactPage;