import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import Form from './Form'
import ListNews from './ListNews'
import ErrorPage from './ErrorPage'

export default class Main extends Component {
    render() {
        return (
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/list" element={<ListNews />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </main>
        )
    }
}
