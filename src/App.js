import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './Header'
import Nav from './Nav'
import Main from './Main'

import './styles/app.scss'

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
