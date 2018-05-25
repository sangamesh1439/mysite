import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../logo.png'

export default withSiteData(() => (
  <div id="about" className="container-fluid">
    <div className="row">
      <div className="col-sm-8">
        <h2>About Somawar Computers</h2><br />
        <h3>we are serving our valuable customers since 8 years</h3><br />
        <p1>Our Core Values</p1><br />
        <li>To be trustworthy and accountable</li>
        <li>Commit to highest standard of ethics and integrity</li>
        <li>To be humble, respectful and collaborative</li>
        <br /><button className="btn btn-default btn-lg">Get in Touch</button>
      </div>
      <div className="col-sm-4">
        <span className="glyphicon glyphicon-signal logo"></span>
      </div>
    </div>
  </div>
))
