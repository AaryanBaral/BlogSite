import React from 'react'
import TrendingContent from './TrendingContent'

export default function Trending() {
  return (
    <>
    <div className='card mx-3 my-3' style={{width:"30rem",display:"flex",alignItems:"center",paddingBottom:"1rem",border:"none"}}>
    <h3>Trending</h3>
    <div className="trending-box">
            <TrendingContent/>
            <TrendingContent/>
            <TrendingContent/>
            <TrendingContent/>
            <TrendingContent/>
    </div>
    </div>
    </>
  )
}
