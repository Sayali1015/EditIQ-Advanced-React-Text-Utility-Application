import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    // <nav className="navbar navbar-expand-lg bg-body-tertiary"> //=========Light NavBar
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">  

  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}
>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
         <a className="nav-link" href="/link">{props.aboutText}</a>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

Navbar.prototype = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string.isRequired}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About text here'
};