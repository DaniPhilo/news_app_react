import React, { Component } from 'react'
import Header from './Header'
import Nav from './Nav'
import Main from './Main'


import { BrowserRouter } from 'react-router-dom'

export default class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Header />
                    <Nav />
                    <Main />
                </BrowserRouter>
            </>
        )
    }
}
