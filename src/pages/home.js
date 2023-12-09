import "../App.css"; 
import { useState } from "react";
import banner from "../offersbanner.webp"
import banner1 from "../offerbanner1.webp";
import banner2 from "../offerbanner2.webp";
import banner3 from "../offerbanner3.webp";
import banner4 from "../offerbanner4.webp";
import banner5 from "../offerbanner5.webp";
import home from "../home.png";
import car from "../car.png";
import ring from "../ring.png";
import cap from "../cap.png";
import knowmore from "../knowmore.png";
import service1 from "../service1.png";
import service2 from "../service2.png";
import service3 from "../service3.png";
import service4 from "../service4.png";
import service5 from "../service5.png";
import digitalbanking from "../digitalbanking.png";
import offers from "../offers.png";
import cybersecurity from "../cybersecurity.png";
import volume from "../volume.webp";
import branchlocator from "../branchlocator.png"
import contact1 from "../contact1.png"
import contact2 from "../contact2.png"
import contact3 from "../contact3.png"
import contact4 from "../contact4.png"
import contact5 from "../contact5.png"
import contact6 from "../contact6.png"
import contact7 from "../contact7.png"












function Home()  {
  // const [image,setimage] = useState(<img className="bannerimage" src={banner}/>);

    return(
      <>
    {/* <div>{image}</div> */}
    
    {/* <span  onClick={() => setimage(<img className="bannerimage"src={banner1}/>)} className="arrowbutton" style={{fontSize:"90px", position:"absolute", right:"180px",top:"600px"}} class="material-symbols-outlined">arrow_circle_left</span> */}
    {/* <span onClick={() => setimage(<img className="bannerimage"src={banner2}/>)} className="arrowbutton" style={{fontSize:"90px",position:"absolute", right:"30px",top:"600px"}} class="material-symbols-outlined">arrow_circle_right</span> */}
    
    <div className="banner">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={banner} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={banner1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={banner2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={banner3} class="d-block w-100" alt="..."/>
    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
  {/* <span className="material-symbols-outlined" aria-hidden="true">arrow_circle_left</span> */}
   <span className="material-symbols-outlined" aria-hidden="true" style={{color:"lightgray",fontSize:"80px", position:"absolute", left:"10px",top:"400px"}} class="material-symbols-outlined">arrow_circle_left</span>
    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
    
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
    <span className="carousel-control-next" aria-hidden="true" style={{color:"lightgray",fontSize:"80px", position:"absolute", right:"10px",top:"400px"}} class="material-symbols-outlined">arrow_circle_right</span>

  </button>
</div>

    <div class ="col-sm-12"style={{height: "100px",backgroundColor:"#dbf1f7"}}>
      <div class="col-sm-9" style={{height:"100px",float:"left", padding:"22px",fontSize:"20px"}}>
       <b>CORPORATE BANKING | MSME BANKING | PRIORITY PORTAL | TENDERS | E-AUCTION<br/>| EOTS (ONLINE ONE TIME SETTLEMENT)</b>
      </div>
    </div>

    <div class="col-sm-12" className="loanapproval">
      <div  className="firstcolum">
        <h1>INSTANT</h1>
        <h1 style={{paddingLeft:"90px"}}>LOAN</h1>
        <b><h1 style={{color:"#ea5607"}}>APPROVALS</h1></b>
      </div>
      
         <div className="homeloan">
          <img src={home}/>
          <button type="button" class="btn btn-warning" style={{width:"190px", height:"39px", marginTop:"7px", border:"3px solid #06a0d6"}}>canara</button> 
          <h4 className="loan">HOME LOAN</h4>
          <h6>8.40%</h6>
         </div>
         
         <div className="homeloan"> 
         <img src={car}/> 
         <button type="button" class="btn btn-warning" style={{width:"190px", height:"39px", marginTop:"7px", border:"3px solid #06a0d6"}}>canara</button>
         <h4 className="loan">CAR LOAN</h4>
         <h6>8.70%</h6>
         </div>

         <div className="homeloan"> 
         <img src={ring}/>
         <button type="button" class="btn btn-warning" style={{width:"190px", height:"39px", marginTop:"7px", border:"3px solid #06a0d6"}}>canara</button>
         <h4 className="loan">GOLD LOAN</h4> 
         <h6>8.75%</h6>
         </div>

         <div className="homeloan"> 
         <img src={cap}/> 
         <button type="button" class="btn btn-warning" style={{width:"190px", height:"39px", marginTop:"7px", border:"3px solid #06a0d6"}}>canara</button>
         <h4 className="loan">EDUCATION LOAN</h4>
         <h6>8.60%</h6>
         <img style={{width:"230px"}} src={knowmore}/>
         </div>
         
    </div>
    <div className="col-sm-12" style={{height:"230px"}}>
      <div className="arrows">
      <span style={{fontSize :"50px"}} class="material-symbols-outlined">arrow_back_ios</span>
      </div>
      <div className="services">
        <img src={service1}/>
        <h5 className="loan">RATE OF<br/>INTEREST</h5>
      </div>
      <div className="services">
      <img src={service2}/>
      <h5 className="loan">SERVICES<br/>CHARGES</h5>
      </div>
      <div className="services">
      <img src={service3}/>
      <h5 className="loan">JANSAMARTH<br/>PORTAL</h5>
      </div>
      <div className="services">
      <img src={service4}/>
      <h5 className="loan">OLINE<br/>SUBMISSION<br/>OF 15G/15H<br/>APPLICATION</h5>
      </div>
      <div className="services">
      <img src={service4}/>
      <h5 className="loan">GST INVOICE<br/>PORTAL</h5>
      </div>
      <div className="services">
      <img src={service4}/>
      <h5 className="loan">REPORT<br/>UNAUTHORISED/<br/>FRAUDULENT<br/>ELECTRONIC<br/>TRANSACTIONS</h5>
      </div>
      <div className="services">
      <img src={service5}/>
      <h5 className="loan">DEATH<br/>CLAIM-<br/>REGISTER A<br/>CLAIM</h5>
      </div>

    <div className="arrows">
    <span style={{fontSize :"50px"}} class="material-symbols-outlined">arrow_forward_ios</span>
    </div>
    </div>

    <div className="col-sm-12 "style={{height:"545px",backgroundColor:"#fcfcfc"}}> 
       <img className="digitalbanking" src={digitalbanking}/>
     </div>

     <div className="col-sm-12 " style={{height:"500px"}}>
      <img style={{width:"100%",height:"500px",borderBottom:"2px solid white",borderTop:"8px solid white"}} src={offers}/>
     </div>

     <div className="col-sm-12" style={{height:"338px",backgroundColor:"red"}}>
      <img style={{width:"100%",borderBottom:"2px solid white",borderTop:"8px solid white"}} src={cybersecurity}/>
     </div>

      <img className="volume"  src={volume}/>

      <div className="col-sm-12 " style={{height:"418px"}}>
      <img style={{width:"100%"}} src={branchlocator}/>
     </div>

     <div className="col-sm-12" style={{height:"80px", textAlign:"center",padding:"20px 420px",backgroundColor:"#f3f3f3"}}>
       <h3 className="contact">CONTACT WITH US :</h3>
       <a href="https://www.facebook.com/canarabank"><img className="contacts" src={contact1}/></a>
       <a href="https://www.linkedin.com/company/canara-bank/"><img className="contacts" src={contact2}/></a>
       <a href="https://twitter.com/canarabank"><img className="contacts" src={contact3}/></a>
       <a href="https://www.youtube.com/channel/UCDDwYBs7MvNWyWLBPMoi8-w"><img className="contacts" src={contact4}/></a>
       <a href="https://in.pinterest.com/canarabankofficial/"><img className="contacts" src={contact5}/></a>
       <a href="https://www.instagram.com/canarabankinsta/"><img className="contacts" src={contact6}/></a>
       <a href="https://www.threads.net/@canarabankinsta"><img className="contacts" src={contact7}/></a>
     </div>
      
    </>
  )
  };
  
  export default Home;