import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import GlobalContext from './context'

export default class Home extends Component {

  static contextType = GlobalContext;

  state = {
    shouldRedirect: false
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.context.setUser(event.target.name.value);
    event.target.reset();
    this.setState({ shouldRedirect: true })
  }



  render() {

    return (
      <section>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" name='name' />

          <button type='submit'>Enter</button>

          {this.state.shouldRedirect && <Navigate replace to="/list" />}
        </form>
      </section>
    )
  }
}
