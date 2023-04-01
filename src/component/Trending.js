import React,{useState,useEffect} from 'react'
import TrendingContent from './TrendingContent'
import "../App.css"
import baseApi from '../utils/axiox';


export default function Trending() {
  const [trending,setTrending] = useState([]);

  const GetTrendingBlogs = async()=>{
    let TrendingBlog = await baseApi.get("/blog")
    let data = await TrendingBlog.data;
    console.log(TrendingBlog)
    if(data){
      setTrending(data.slice(0,6));
    }
  }
  useEffect(()=>{
    GetTrendingBlogs();
  },[]);

  return (
    <>
    <div className='card mx-3 my-3 trending-card'>
    <h3>Trending</h3>
    <div className="trending-box">
      {trending.map((individual)=>{
           return  <TrendingContent blog={individual}/>
      })}
    </div>
    </div>
    </>
  )
}
