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
    this.setState({ shouldRedirect: true })
  }



  render() {
    return (
      // <section id='home-section'>
      //   {this.context.user === '' ?
      //     <form action="" onSubmit={this.handleSubmit}>
      //       <label htmlFor="name">Name: </label>
      //       <input type="text" name='name' />

      //       <button type='submit' className='btn'>Enter</button>
      //     </form>
      //     :
      //     <h2>Welcome {this.context.user}</h2>
      //   }
      //   {this.state.shouldRedirect && <Navigate replace to="/list" />}
      // </section>

      <section id='home-section'>
          <form action="" onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" name='name' />

            <button type='submit' className='btn'>Enter</button>
          </form>
          {this.state.shouldRedirect && <Navigate replace to="/list" />}
      </section>
    )
  }
}

