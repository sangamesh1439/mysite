import React from 'react'
import { withSiteData } from 'react-static'
import logoImg from '../logo.png'
import homeImg from '../../public/media/home.jpg'
export default withSiteData(() => (
  <div>    
    <div id="shop-name">
      <img id='home-image'src={homeImg} alt=''></img>            
        <div className="jumbotron">                  
          <h1> Somawar Computers</h1>
          <p>one stop solution for all your computer needs</p>
        </div>        
      </div>                 
  </div>
))
