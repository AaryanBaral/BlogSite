import React, { Component } from 'react'
import spinner from "../loading.gif"

export default class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={spinner} alt ="Loading" />
      </div>
    )
  }
  
}
