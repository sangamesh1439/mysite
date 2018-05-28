import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../logo.png'
import yearsImg from '../../public/media/about/years.png'

export default withSiteData(() => (
  <div id="about" className="container-fluid">
    <div className="row">
      <div className="col-sm-8">
        <h2>Our Journey</h2>
        <h3>8 years back we came up with an idea to provide low cost onsight solutions for computer needs.</h3><br />
        <p>Our Core Values</p><br />
        <li>To be trustworthy and accountable</li>
        <li>Commit to highest standard of ethics and integrity</li>
        <li>To be humble, respectful and collaborative</li>
        <br /><button className="btn btn-default btn-lg">Get in Touch</button>
      </div>
      <div className="col-sm-4">      
      <img className="about-years" src={yearsImg}/>
      </div>
    </div>
  </div>
))
