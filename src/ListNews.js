import React, { Component } from 'react'
import Card from './Card';
import GlobalContext from './context';

const axios = require('axios').default;

export default class ListNews extends Component {

    static contextType = GlobalContext;

    state = {
        isLoading: true,
        news: []
    }

    deleteNews = (id) => {
        this.setState(prevState => {
            return { news: prevState.news.filter(item => item.id !== id)}
        })
    }

    async componentDidMount() {
        axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=' + process.env.REACT_APP_API_KEY)
            .then(response => {
                const data = response.data.response.docs.slice(0 - 5);
                const selectedData = data.map(news => {
                    return {
                        id: news._id,
                        headline: news.headline.main,
                        abstract: news.abstract,
                        author: news.byline.original,
                        date: news.pub_date,
                        url: news.web_url
                    }
                })
                this.setState({ news: [...selectedData, ...this.context.customNews] });
                this.setState({ isLoading: false });
            })
    }

    render() {
        return (
            <section className='news-container'>
                {this.state.isLoading ?
                    <div className='loading'>Loading...</div> :
                    this.state.news.map((news, index) => {
                        return (
                            <>
                                <Card key={news.id} news={news} deleteNews={this.deleteNews}/>
                            </>
                        )
                    })}
            </section>
        )
    }
}
