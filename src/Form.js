import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import GlobalContext from './context'

export default class Form extends Component {

  state = {
    shouldRedirect: false
  }

  static contextType = GlobalContext;

  handleSubmit = (event) => {
    event.preventDefault();

    const t = new Date();
    const date = ('0' + t.getDate()).slice(-2);
    const month = ('0' + (t.getMonth() + 1)).slice(-2);
    const year = t.getFullYear();

    const customNews = {
      headline: event.target.headline.value,
      abstract: event.target.abstract.value,
      author: this.context.user,
      date: `${year}-${month}-${date}`
    }

    this.context.setCustomNews(customNews);

    this.setState({shouldRedirect: true})
  }

  render() {
    return (
      <section>
        <h2>Create news:</h2>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="headline">Headline: </label>
          <textarea type="text" name='headline' />

          <label htmlFor="abstract">Abstract: </label>
          <textarea name='abstract' />

          <button type='submit'>Save</button>

          {this.state.shouldRedirect && <Navigate replace to="/list" />}

        </form>
      </section>
    )
  }
}
