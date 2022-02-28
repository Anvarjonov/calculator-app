import React from "react";
import '../Reviews/review.css';
import img2 from './photos/lady2.jpg';
import img3 from './photos/older.jpg';
import img4 from './photos/lady3.jpg';


function Reviews(){
    return(
        <div className="container-fluid reviews_container">
            <div className="row text-center">
                    <h2 className="text-light mt-4">Costumers Reviews</h2>
                <div className="col d-flex justify-content-center">
                    <div className="card p-2 mx-3 mt-5">
                        <div className="my-2" >
                        <img className="rounded-circle" src={img2} alt="img1" />
                        </div>
                        <h4>John Doe</h4>
                        <p className="p-3 m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni eum reiciendis veniam! Alias, maiores.</p>
                        <div className="d-flex justify-content-center mb-3">
                        <i className="bi bi-star-fill text-warning mx-1"></i>
                        <i className="bi bi-star-fill text-warning mx-1"></i>
                        <i className="bi bi-star-fill text-warning mx-1"></i>
                        <i className="bi bi-star-fill text-warning mx-1"></i>
                        <i className="bi bi-star-fill text-warning mx-1"></i>
                        </div>
                    </div>
                    <div className="card p-2 mx-3 mt-5">
                        <div className="my-2" >
                        <img className="rounded-circle" src={img3} alt="img1" />
                        </div>
                        <h4>John Doe</h4>
                        <p className="p-3 m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni eum reiciendis veniam! Alias, maiores.</p>
                        <div className="d-flex justify-content-center mb-3">
                        <i className="bi bi-star-fill text-warning mx-1"></i>
                        <i className="bi bi-star-fill text-warning mx-1"></i>
                        <i className="bi bi-star-fill text-warning mx-1"></i>
                        <i className="bi bi-star-fill text-warning mx-1"></i>
                        <i className="bi bi-star-fill text-warning mx-1"></i>
                        </div>
                    </div>
                    <div className="card p-2 mx-3 mt-5">
                        <div className="my-2" >
                        <img className="rounded-circle" src={img4} alt="img1" />
                        </div>
                        <h4>John Doe</h4>
                        <p className="p-3 m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni eum reiciendis veniam! Alias, maiores.</p>
                        <div className="d-flex justify-content-center mb-3">
                        <i className="bi bi-star-fill text-warning mx-1"></i>
                        <i className="bi bi-star-fill text-warning mx-1"></i>
                        <i className="bi bi-star-fill text-warning mx-1"></i>
                        <i className="bi bi-star-fill text-warning mx-1"></i>
                        <i className="bi bi-star-fill text-warning mx-1"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Reviews;