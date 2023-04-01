import React from 'react'

import "../App.css"


export default function TrendingContent(props) {
  return (
    <>
    <div className="my-2">
      <div className="row g-0 trending-container">
        <div className="col">
          <img src={props.blog.ImageUrl} className="img-fluid rounded trending-img" alt="..."/>
        </div>
        <div className="col-md-8 trending-content">
          <div className="card-body trending-body">
            <p className='trending-title'>{props.blog.MetaTitle.slice(0,80)}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
