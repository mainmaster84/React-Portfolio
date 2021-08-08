import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#Navbar">
          <div className="logo">Ronald</div>
          </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#Home">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Link">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Link">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Link">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;