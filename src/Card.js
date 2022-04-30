import React, { Component } from 'react'
import GlobalContext from './context';

export default class Card extends Component {

  static contextType = GlobalContext;

  render() {
      const { headline, abstract, author, date, id } = this.props.news;
    return (
      <div className='news-card'>
          <h3>{headline}</h3>
          <p>{abstract}</p>
          <p>{author}</p>
          <p>{date.match(/^[\w\d\W]{0,10}/gi)}</p>
          <button type='button' onClick={() => this.props.deleteNews(id)}>Delete</button>
      </div>
    )
  }
}
