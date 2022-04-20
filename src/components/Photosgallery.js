import React from 'react'
import PhotosData from './PhotosData'
import './Photogallery.css'

function Photosgallery() {
    return (
        <div className='container-fluid'>
            <div className='row'>
            {PhotosData.map(({ image, description, price }) => {
                return (
                        <div className='col-md-4 mb-4 '>
                            <div className='title'><mark>{description}</mark></div>
                            <img src={image} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card
                                    title .</p>
                                <p className='text-primary'>Price:{price}$</p>
                                <button className='btn btn-dark' id="button" >Buy</button>
                            </div>
                        </div>
                )
            })}
             </div>
        </div>
    )
}

export default Photosgallery