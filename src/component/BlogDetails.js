import React from "react";
import image from "../anuj.jpeg";
import "../BlogDetails.css";

export default function BlogDetails({Details}) {
    if(!Details){
        return;
    }
  return (
    <>
      <div className="Blog-details">
        <div className="image">
          <img src={Details.ImageUrl} alt="...." />
        </div>
        <div className="title">
            <div className="blog-title">
                <p>{Details.Title}</p>
            </div>
            <div className="Author">
               <p> {`By-  ${Details.Author}`} </p> 
            </div>
            <div className="blog-des">
                <p> {Details.Description} </p>
            </div>
        </div>
      </div>
    </>
  );
}
