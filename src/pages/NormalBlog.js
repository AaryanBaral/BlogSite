import React, { useState } from 'react'
import { useParams } from 'react-router'
import BlogDetails from '../component/BlogDetails';
import Contributor from '../component/Contributor';
import SliderContributors from '../component/SliderContributors';
import baseApi from '../utils/axiox';
export default function NormalBlog() {
  const {id} = useParams();

  const [IndividualblogData,setIndividualBlogData] = useState([]);

  const fetchAllBlogData = async ()=>{
    let res = await baseApi.get(`/blog?id=${id}`);
    let data = await res.data;
    if(res){
      setIndividualBlogData(data);
    }
  }

  React.useEffect(() => {
    fetchAllBlogData();
  }, []);




  return (
    <>
      <BlogDetails Details = {IndividualblogData}/>
    {/* <SliderContributors /> */}
    <Contributor />
    </>
  )
}
