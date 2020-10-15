import React from "react"
import { Link } from "gatsby"
import { IdentityContextProvider } from "react-netlify-identity-widget"

import "./layout.css"

const Layout = ({ children }) => (
  <IdentityContextProvider url="https://nervous-dijkstra-0c7e88.netlify.app">
    <header>
      <Link to="/">JAMstack App</Link>
    </header>
    <main>{children}</main>
  </IdentityContextProvider>
)

export default Layout
