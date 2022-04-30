import React, { Component } from 'react'
import GlobalContext from './context'

export default class Header extends Component {

  static contextType = GlobalContext;

  render() {
    return (
      <header>
        <p>{this.context.user ? `User: ${this.context.user}` : 'No user'}</p>
      </header >
    )
  }
}
