import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
         <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
        <div className="spinner-border text-secondary" role="status">
  <span className="visually-hidden">Loading...</span>
       </div>
       </div>
      
    )
  }
}
