import React, { Component } from 'react'
import Card from './Card';

const axios = require('axios').default;

export default class ListNews extends Component {

    state= {
        news: []
    }

async componentDidMount() {
    axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key='+process.env.REACT_APP_API_KEY)
    .then(response => {
        const data = response.data.response.docs.slice(0-5);
        const selectedData = data.map(news => {
            return {
                headline: news.headline.main,
                abstract: news.abstract,
                author: news.byline.original,
                date: news.pub_date,
                url: news.web_url
            }
        })
        this.setState({ news: selectedData});
    })
}

    render() {
        return (
            <section>
                {this.state.news.map((news, index) => {
                    return (
                        <Card key={index} news={news} />
                    )
                })}
            </section>
        )
    }
}
