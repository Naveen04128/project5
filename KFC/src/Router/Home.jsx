import React from 'react'
import img1 from './Subway.jpg'
import img2 from './jim.jpg'
import img3 from './picture.webp'
import About from './About'
import Menu from './menu'


export default function Home() {
  return (
    <div>
      
       <div class="row" >
       
    <div class="col-3" >
      <img src={img1} alt="" width={200} height={75} style={{paddingLeft:"50px"}} /></div>  
      
     <div class="col-9">
      <nav class="nav" style={{marginTop:"1%"}}>
  

</nav></div>
  </div>  
  
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

<div className='mm' style={{backgroundColor:"black"}}>
<div class="container" >
  <div class="row row-cols-4" >
    <div class="col"><h5 style={{color:"yellow",marginLeft:"-30%"}}>Contact</h5>
    <p style={{color:"white",marginLeft:"-30%"}}>customer care</p>
    <p style={{color:"white",marginLeft:"-30%"}}>Opt Out</p>
    </div>
    <div class="col"><h5 style={{color:"yellow"}}>Subway Cares</h5>
    
    <p style={{color:"white"}}>Nutrition Information</p></div>
    <div class="col"><h5 style={{color:"yellow"}}>Legal</h5>
    <p style={{color:"white"}}>Privacy Policy</p>
    <p style={{color:"white"}}>Whistle Blowing Policy</p>
    <p style={{color:"white"}}>Terms & Conditions</p>
    </div>
    <div class="col"><h5 style={{color:"white"}}>FOR VENDOR PARTNERSHIP</h5>
    <p style={{color:"yellow"}}>partner@subway.in</p></div>
  </div>
</div>
</div>








</div>


  )
}
