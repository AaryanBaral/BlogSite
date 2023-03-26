import React from 'react'
import image from '../image.png'
import "../App.css"

export default function BlogCard() {
  return (
    <>
    <div className="col blog-card-container">
        <div class="card">
          <img src={image} class="card-img-top" alt="..." style={{width:"auto"}}/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
    </div>
    </>
  )
}
