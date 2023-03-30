import React from 'react'
import image from '../image.png'
import "../App.css"

export default function BlogCard() {
  return (
    <>
      <div className="col">
        <div className="card blog-card">
          <div className="img">
            <img src={image} className="card-img-top rounded" alt="..."/>
          </div>
          <span className="blog-body">
            <h5 className="blog-title">Card title</h5>
            <p className="blog-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </span>
        </div>
      </div>
    </>
  )
}
