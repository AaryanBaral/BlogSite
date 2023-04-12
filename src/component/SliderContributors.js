import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import "../App.css"
import {Swiper,SwiperSlide} from 'swiper/react'
import baseApi from '../utils/axiox';

export default function SliderContributors() {
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
        <div className="icon">
        <FontAwesomeIcon icon="fa-solid fa-circle-arrow-left" size="2xl" />
        </div>
        <Swiper 
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
             spaceBetween={50}
             scrollbar={{ draggable: true }}
             slidesPerView={3}
             onSlideChange={() => console.log('slide change')}
             onSwiper={(swiper) => console.log(swiper)}
             
            >

            {ContributorData.map((data)=>(
                (
                <SwiperSlide>
                    <div className="contributor-image">
                        <img src={data.ImageUrl} loading="lazy" decoding="async"  alt="..."/>
                    </div>
                    <div className="contributor-body">
                        <div className="contributor-name">
                            <h2>{data.Name}</h2>
                        </div>
                        <div className="contributor-moto">
                            <p>{data.Testimony}</p>
                        </div>
                    </div>
                </SwiperSlide>
                )
            ))}

        </Swiper>
        <div className="icon">
        <FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" size="2xl" />
        </div>
    </>
  )
}
