import React, { Component } from 'react'

export default class ErrorPage extends Component {
  render() {
    return (
      <div className='error-page'>
        <h3>Error 404: Route not found</h3>
        <p>The route or page that you are requesting does not exist. Good luck next time.</p>
      </div>
    )
  }
}
