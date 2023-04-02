import React from 'react'
import anuj from "../anuj.jpeg"
import "../App.css"

export default function Contributor() {
  return (
    <>
    <div className="contributor">
        <div className="contributor-image">
            <img src={anuj} loading="lazy" decoding="async"  alt="..."/>
        </div>
        <div className="contributor-body">
            <div className="contributor-name">
                <h2>Anuj Poudel</h2>
            </div>
            <div className="contributor-moto">
                <p>Live young, wild amd free</p>
            </div>
        </div>
    </div>
    </>
  )
}
