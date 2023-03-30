import React from 'react'
import image from '../image.png'
import "../App.css"

export default function MainCard() {
  return (
    <>
      <div className="card main_card">
        <img src={image} className="card-img-top" alt="..." />
        <div className=" card-body main-card-content">
          <h5 className="card-title ">Main Title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's contentSome quick example text to build on the card title and make up the bulk of the card's contentSome quick example text to build on the card title and make up the bulk of the card's contentSome quick example text to build on the card title and make up the bulk of the card's content.....<a>Read more</a></p>
        </div>
      </div>
    </>
  )
}
