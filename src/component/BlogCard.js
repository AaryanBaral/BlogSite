import {React} from 'react'
import "../App.css"

export default function BlogCard(props) {
  return (
    <>
      <div className="col">
        <div className="card blog-card">
          <div className="img">
            <img src={props.blog.ImageUrl} loading="lazy" decoding="async" className="card-img-top rounded blog-card-img" alt="..."/>
          </div>
          <span className="blog-body">
            <h5 className="blog-title">{props.blog.MetaTitle.length>100?props.blog.MetaTitle.slice(0,100):props.blog.MetaTitle}</h5>
            <p className="blog-text">{props.blog.MetaDescription.length>155?props.blog.MetaDescription.slice(0,155):props.blog.MetaDescription}....see more</p>
          </span>
        </div>
      </div>
    </>
  )
}
