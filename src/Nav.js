import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

export default class Nav extends Component {
    render() {
        return (
            <>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/form">Form</NavLink>
                        </li>
                        <li>
                            <NavLink to="/list">News</NavLink>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }
}
