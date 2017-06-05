import React from 'react'

const Header = () => (
  <div style={{
    backgroundColor: '#333',
    height: '45px',
    padding: '10px',
    color: 'white',
  }}>
    <div>React Word Whomper</div>
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
