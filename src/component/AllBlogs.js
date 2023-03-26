import React from 'react'
import BlogCard from './BlogCard'
import "../App.css"

export default function AllBlogs() {
  return (
    <>
    <div>
    <h1 className='text-center'>All Blogs</h1>
    <div className="all-blog-container row row-cols-1 row-cols-md-3 g-4">
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
    </div>
    </div>

    </>
  )
}
