import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import "../App.css"
import baseApi from '../utils/axiox';

export default function Contributor() {
    const [CurrentSlideIndex,setCurrentSlideIndex] = useState(0);
    const [ContributorData,setContributorData] = useState([]);

    const fetchContributorData = async ()=>{
      let res = await baseApi.get("/testimonial");
      let data = res.data;
      if(res){
        setContributorData(data);
      }
    }
    React.useEffect(() => {
      fetchContributorData();
    }, []);


    if(ContributorData.length==0){
        return ;
    }
  return (
    <>
    <div className="contributor">
        <div className="icon" onClick={()=>{
            CurrentSlideIndex == 0 ? setCurrentSlideIndex(ContributorData.length-1) : setCurrentSlideIndex(CurrentSlideIndex-1)
        }}>
        <FontAwesomeIcon icon="fa-solid fa-circle-arrow-left" size="2xl" />
        </div>
        <div className="contributor-image">
            <img src={ContributorData[CurrentSlideIndex].ImageUrl} loading="lazy" decoding="async"  alt="..."/>
        </div>
        <div className="contributor-body">
            <div className="contributor-name">
                <h2>{ContributorData[CurrentSlideIndex].Name}</h2>
            </div>
            <div className="contributor-moto">
                <p>{ContributorData[CurrentSlideIndex].Testimony}</p>
            </div>
        </div>
        <div className="icon"  onClick={()=>{
            CurrentSlideIndex == ContributorData.length-1? setCurrentSlideIndex(0):setCurrentSlideIndex(CurrentSlideIndex+1)
        }}>
        <FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" size="2xl" />
        </div>
    </div>
    </>
  )
}
