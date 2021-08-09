import React from 'react';
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <h1 class="navbar-brand">Ronald</h1>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/aboutme">About Me</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/projects">Portfolio</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact">Contact</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/resume">Resume</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

