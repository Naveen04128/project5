import React, { Component } from 'react'
import img1 from './Subway.jpg'
import img2 from './bbun.jpg'

export default class About extends Component {
  render() {
    return (
      <div>
    <div class="row">
        <div class="col-3">
            <img src={img1} alt="" width={200} height={75} style={{paddingLeft:"50px"}} />
        </div>
        
       
        
         <div class="row">
    <div class="col" style={{color:"green",marginRight:"-4px"}} >
      <p style={{marginLeft:"15%",marginTop:"10%"}}>We believe that when you eat fresh, you think fresh; and we <br /> bring this fresh thinking in all our endeavours. We are <br /> committed to innovating better, healthier, high-quality food <br />that delights our customers. We are dedicated to fostering <br /> positive impact by providing sustainable livelihoods to our <br /> suppliers and meaningful careers to our team.</p> <br /> 
    <p style={{marginLeft:"15%"}}>Culinary Brands India Private Limited has the master <br /> franchise rights to open and operate Subway restaurants <br /> in India, Sri Lanka and Bangladesh. Subway is set to expand <br /> freshness and power through the mission of serving healthy, <br />tasty, and fresh food to everyone.</p> <br />
    
    <p style={{marginLeft:"15%"}}>India is the largest market for EIPL and is focussed to <br /> expand Subway footprint aggressively. EIPL is a fully owned <br /> subsidiary of Culinary Brands Private Limited.</p> </div>
    <div class="col" >
      <img src={img2} alt="" style={{marginTop:"10%",marginLeft:"100px"}} />
    </div>
  </div>
        </div> 
      </div>
    )
  }
}



