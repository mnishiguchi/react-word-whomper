import React from 'react'
import logo from '../assets/logo.svg'

const Header = () => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>React Word Whomper</h2>
  </div>
)

const Layout = (props) => (
  <div className="App">
    <Header />
    <main className="container">
      {props.children}
    </main>
  </div>
)

export default Layout
