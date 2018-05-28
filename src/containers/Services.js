import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../logo.png'
import cctvImg from '../../public/media/services/cctv.png'
import computersImg from '../../public/media/services/computers.png'
import printersImg from '../../public/media/services/printers.png'
import antivirusImg from '../../public/media/services/antivirus.png'
import accessoriesImg from '../../public/media/services/accessories.png'
import maintenanceImg from '../../public/media/services/maintenance.png'

export default withSiteData(() => (
  <div id="services" className="container-fluid text-center">
    <h2>SERVICES</h2>
    <h4>What we offer</h4>
    <br />
    <div className="row slideanim">
      <div className="col-sm-4">
        <span className="logo-small"><img className="service-logos" src={cctvImg} alt="" /></span>
        <h4>CCTV Installations</h4>
        <p>we provide customized cctv installations with onsight visits</p>
      </div>
      <div className="col-sm-4">
        <span className="logo-small"><img className="service-logos" src={computersImg} alt="" /></span>
        <h4>Computers & Laptops</h4>
        <p>we sell all kinds of laptops and computers</p>
      </div>
      <div className="col-sm-4">
        <span className="logo-small"><img className="service-logos" src={printersImg} alt="" /></span>
        <h4>Printer Repairing Services</h4>
        <p>we offer onsight services for cartridge refilling</p>
      </div>
    </div>
    <br /><br />
    <div className="row slideanim">
      <div className="col-sm-4">
        <span className="logo-small"><img className="service-logos" src={accessoriesImg} alt="" /></span>
        <h4>HardDisk Ram Processors</h4>
        <p>we are wholesale dealers for HardDisks, Ram & Mother Board Processors</p>
      </div>
      <div className="col-sm-4">
        <span className="logo-small"><img className="service-logos" src={antivirusImg}/></span>
        <h4>Authorized Dealer for NPAV</h4>
        <p>we are authorized dealers of Net Protector Antivirus since 8 yrs</p>
      </div>
      <div className="col-sm-4">        
        <span className="logo-small"><img className="service-logos" src={maintenanceImg}/></span>        
        <h4>Onsight Services</h4>
        <p>We provide onsight services</p>
      </div>
    </div>
  </div>

))
