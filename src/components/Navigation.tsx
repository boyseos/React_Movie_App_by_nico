import React from "react"
import { Link } from "react-router-dom"

export default function Navigation() {
    return (
        <div>
            <Link to="/movie">Main</Link>
            <Link to={{
                pathname: "/about",
                state: {
                    fromNavigation: true
                }
            }}>About</Link>
        </div>
    )
}