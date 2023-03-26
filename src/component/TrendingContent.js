import React from 'react'
import image from '../image.png'
import "../App.css"


export default function TrendingContent() {
  return (
    <>
    <div className="my-2">
      <div className="row g-0 trending-container">
        <div className="col">
          <img src={image} className="img-fluid rounded trending-img" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body trending-body">
            <p className='trending-title'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className='update'><small className="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
