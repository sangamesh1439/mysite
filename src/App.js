import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import Home from './containers/Home.js'
import Services from './containers/Services.js'
import About from './containers/About.js'
import Contact from './containers/Contact.js'
import $ from 'jquery'

import './app.css'

const App = () => (
  <div id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
    <nav className="navbar navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#myPage">Somawar Computers</a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">            
            <li><a href="#services">SERVICES</a></li>            
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <Home />
    <Services />
    <About />
    <Contact />

    <footer className="container-fluid text-center">
      <a href="#myPage" title="To Top">
        <span className="glyphicon glyphicon-chevron-up"></span>
      </a>
      <p>Designed by Somawar Computers</p>
    </footer>
  </div>
)

if (typeof document !== 'undefined') {
  $(document).ready(function(){
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
     
          //  Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
    
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;
  
        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
      });
    });
  })

}



export default hot(module)(App)
