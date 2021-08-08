import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import About from './components/About.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
