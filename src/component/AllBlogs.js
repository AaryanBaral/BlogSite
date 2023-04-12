import React,{useState,useEffect} from 'react'
import baseApi from '../utils/axiox';
import "../App.css"
import BlogCard from './BlogCard';

export default function AllBlogs() {
  const [blogData,setBlogData] = useState([]);

  const fetchAllBlogData = async ()=>{
    let res = await baseApi.get("/blog");
    let data = res.data;
    if(res){
      setBlogData(data.slice(1,data.length));
    }
  }
  React.useEffect(() => {
    fetchAllBlogData();
  }, []);

  
  return (
    <>
    <div>
    <h1 className='text-center all-blog-title'>All Blogs</h1>
    <div className="all-blog-container row row-cols-1 row-cols-md-3 g-4">
        {blogData.map((blog)=>{
            return (
            <BlogCard blog={blog}/>
            )
        })}
    </div>
    </div>

    </>
  )
}
