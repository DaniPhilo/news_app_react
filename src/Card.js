import React, { Component } from 'react'

export default class Card extends Component {
  render() {
      const { headline, abstract, author, date } = this.props.news;
    return (
      <div>
          <h4>{headline}</h4>
          <p>{abstract}</p>
          <p>{author}</p>
          <p>{date.match(/^[\w\d\W]{0,10}/gi)}</p>
      </div>
    )
  }
}
