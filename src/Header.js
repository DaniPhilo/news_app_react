import React, { Component } from 'react'
import GlobalContext from './context'

export default class Header extends Component {

  static contextType = GlobalContext;

  render() {
    return (
      <header>
        <h1 id='title'>News<span>_app</span></h1>
        <p id='subtitle'>{this.context.user ? `User: ${this.context.user}` : 'No user'}</p>
      </header >
    )
  }
}
