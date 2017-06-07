import React from 'react'

const Header = () => (
  <div style={{
    backgroundColor: '#333',
    width: '100%',
    height: '45px',
    padding: '10px',
    color: 'white',
  }}>
    <div>React Word Whomper</div>
  </div>
)

const Footer = () => (
  <footer style={{
    backgroundColor: '#222',
    width: '100%',
    height: 'auto',
    padding: '2rem 10px',
    color: 'white',
  }}>
    <div>
      Masatoshi Nishiguchi | {' '}
      <a href="http://www.mnishiguchi.com/">
        mnishiguchi.com
      </a>
    </div>
  </footer>
)

const Layout = (props) => (
  <div className="App">
    <Header />
    <main className="container">
      {props.children}
    </main>
    <Footer />
  </div>
)

export default Layout
