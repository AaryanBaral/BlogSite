import React from 'react'
import TrendingContent from './TrendingContent'
import "../App.css"


export default function Trending() {
  return (
    <>
    <div className='card mx-3 my-3 trending-card'>
    <h3>Trending</h3>
    <div className="trending-box">
            <TrendingContent/>
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
