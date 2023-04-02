import React, { useState } from 'react'
import "../App.css"
import baseApi from '../utils/axiox';
import Loading from './Loading';

export default function MainCard() {
  const [blogData,setBlogData] = useState([]);
  const [IsLoading,setIsLoading] = useState(true);
  const fetchAllBlogData = async ()=>{
  let res = await baseApi.get("/blog")
  if(res){
    setBlogData(res.data[3]);
  }
}
React.useEffect( () => {
  fetchAllBlogData();
}, []);
// setIsLoading(false);
  return (
    <>
      <div className="card main_card">
        <img src={blogData.ImageUrl} loading="lazy" decoding="async" className="card-img-top" alt="..." />
        <div className=" card-body main-card-content">
          <h5 className="card-title main-card-title">{blogData.MetaTitle}</h5>
          <p className="card-text main-card-des">{blogData.MetaDescription}<a>.....Read more</a></p>
        </div>
      </div>
    </>
  )
}
