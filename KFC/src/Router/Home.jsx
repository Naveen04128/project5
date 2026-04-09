import React from 'react'
import img2 from './jim.jpg'
import img3 from './picture.webp'
import About from './About'
import Menu from './menu'
import { BrowserRouter, Routes,Link } from "react-router-dom";


export default function Home() {
  return (
    <div>
      
     
  
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="container"  >
  <div class="row" style={{backgroundColor:"black"}} >
    <div class="col"><h5 style={{color:"yellow"}}>Contact</h5>
    <p style={{color:"white"}}>Customer Care</p>
    <p style={{color:"white"}}>opt out</p></div>
    <div class="col"><h5 style={{color:"yellow"}}>Subway Cares</h5>
    <p style={{color:"white"}}>Nutrition Information</p></div>
    <div class="col"><h5 style={{color:"yellow"}} >Legal</h5>
    <p style={{color:"white"}}>Privacy Policy</p>
    <p style={{color:"white"}}>Terms & Conditions</p>
    <p style={{color:"white"}}>Whistle Blowing Policy</p></div>
    <div class="col"><h5 style={{color:"yellow"}}>FOR VENDOR PARTNERSHIP</h5>
    <p style={{color:"white"}}>partner@subway.in"</p></div>
   <p style={{color:"white"}}>Registered Address: Culinary Brands India Private Limited, 6th Floor, Vaman Centre, Makwana Road Marol, Andheri East, Mumbai-400059, Maharashtra</p>
  <p style={{color:"white"}}>All rights reserved. SUBWAY® is a Registered Trademark of Subway IP LLC. ©2022 Subway IP LLC., and is licensed to Culinary Brands India Private Limited under an exclusive master franchisee arrangement for the territory of the Republic of India.</p>
  </div>
  </div>








</div>


  )
}
