import React, { Component } from 'react'
import img1 from './Subway.jpg'
import img2 from './bbun.jpg'


export default class Store extends Component {
  render() {
    return (
      <div>
         <div class="row" >
               
            <div class="col-3" >
              <img src={img1} alt="" width={200} height={75} style={{paddingLeft:"50px"}} /></div>  
              
            
          </div>  

<div class="container">
  <div class="row" style={{backgroundColor:"green",height:"170px"}}>
    <h3>STORE LOCATOR</h3>
    <div class="col">
        <select  placeholder="state">
          <option value="">Andhra Pradesh</option>
          <option value="">Assam</option>
          <option value="">Bihar</option>
          <option value="">Chhattisgarh</option>
          <option value="">Goa</option>
          <option value="">Haryana</option>
          <option value="">Jharkhand</option>
          <option value="">Maharashtra</option>
          <option value="">Madhya Pradesh </option>
          <option value="">Mizoram</option>
          <option value="">Odisha</option>
          <option value="">Punjab</option>
          <option value="">Telangana</option>
          <option value="">Tamil Nadu</option>
          <option value="">Uttar Pradesh</option>
          <option value="">Uttarakhand</option>
          <option value="">West Bengal</option>
          <option value="">Jammu and Kashmir</option>
          <option value="">Puducherry</option>
         




        </select>
        
    </div>
    <div class="col">
        <input type="text" placeholder='city' />
    </div>
    <div class="col">
        <input type="text" placeholder='area' />
    </div>
    <div class="col"><button>submit</button></div>
  </div> </div>

<div class="row">
    <div class="col" style={{textAlign:"center",marginTop:"5%"}}><h4>Please select the State and City to list the stores</h4></div>
    <div class="row">
    <div class="col" style={{textAlign:"center",marginTop:"5%"}}>
        <img src={img2} alt="" />
    </div></div>
</div>




      </div>
    )
  }
}

