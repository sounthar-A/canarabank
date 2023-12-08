import { Outlet, Link } from "react-router-dom";
import blue from "./blue-bar.png";
import yellow from "./yellow-bar.Webp";
import topimage from "./canaralogo.png"
import "./App.css";

const App = () => {

  return (
    <>
    
    <div className="topnavbar">
     <div className="menu">
      <span>Text Size: A+ A A-  |  Color Theme:</span>
      <button   type="button" class="btn btn-warning " style={{height:"32px", marginLeft:"10px",paddingTop:"3px"}}>Default/Dark</button>
      <span> ScreenReader</span>
     </div>
    </div>

    <header className=" sticky-top">
    <img className="yellow fixed-top" src={yellow}/>
    <img className="blue fixed-top" src={blue}/>
     
      <nav className="menu-bar fixed-top">
        <div >
        <ul>
          <li className="ulli">
           <b><Link className="link" to="/">HOME</Link></b> 
          </li>
          <li className="ulli">
          <b><Link className="link" to="/contact">CONTACT</Link></b>
          </li>
          <li className="ulli">
          <b><Link className="link" to ="/transection">TRANSECTION</Link></b>
          </li>
          <li className="ulli">
          <b><Link className="link" to ="/Loan">LOAN</Link></b>
          </li>
          <li className="ulli">
          <b><Link className="link">INVESTMENT</Link></b>
          </li>
          <li className="ulli">
           <b><Link className="link">DIGITAL PRODUCT</Link></b>
          </li>
          <li className="ulli">
          <b><Link className="link">INVESTOR RELATION</Link></b>
          </li>
          <li className="ulli">
               <b><Link className="link">NRI BANKING</Link></b>
          </li>
        </ul>
        </div>
      </nav>

     
      <div class="position-absolute">
      <div  class="row ">
        
        <div class="col-sm-3  text-white" style={{height: "170px", float:"left"}}>
          <h6 style={{float:"left", paddingTop:"5px"}}>Available in :</h6><button   type="button" class="btn btn-warning " style={{marginLeft:"10px"}}>Hindi</button>

          <form class="d-flex">
            <input class="form-control me-3 mt-2" type="text" placeholder="Search"/><button type="button" class="btn btn-warning" style={{height:"39px", marginTop:"7px"}}>search</button>
          </form>
       </div>

       <div class="col-sm-6   text-white " style={{height: "170px", paddingLeft:"60px"}}>
          <img className="topimage" src={topimage}/>
          <h4 style={{margin:"123px 130px"}}>ABOUT US | CUSTOMER FEEDBACK</h4>
       </div>

       <div class="col-sm-3   text-white " style={{height: "170px",paddingLeft:"200px"}}>
       <span style={{float:"left",padding:"9px"}} className="material-symbols-outlined">phone_in_talk</span><h3> 1800 1030</h3>
           <h6>Contact Us</h6>
       </div>
   </div>
   </div>
   </header>
   <Outlet/>
   <div class="pt-5 " style={{backgroundColor:"#13a8e1",color:"white", width:"100%"}}>
  <div class="row">
    <div class="col-sm-3">
      <ul>
  <p className="loan1">QUICK ACCESS</p>
<li className="footer">CAREERS</li><br/>
<li className="footer">CUSTOMER EDUCATION</li><br/>
<li className="footer">EX-EMPLOYEE</li><br/>
<li className="footer">ANNOUNCEMENTS</li><br/>
<li className="footer">FOREX CARD RATES</li><br/>
<li className="footer">VACANT LOCKERS</li><br/>
<li className="footer">PENSIONERS PORTAL</li><br/>
<li className="footer">CALENDAR</li><br/>
<li className="footer">APR CALCULATOR</li><br/>
<li className="footer">PHOTO GALLERY</li><br/> 
<p className="loan1">ESG</p>
<li className="footer">ESG STATEMENT</li><br/>
<li className="footer">GREEN DEPOSIT POLICY & LENDING FRAMEWORK</li><br/>
</ul>
    </div>
    <div class="col-sm-3">
 <p className="loan1">CUSTOMER SERVICES</p>
 <li className="footer">COMPLAINTS</li><br/>
 <li className="footer">ANCILLARY SERVICES</li><br/>
 <li className="footer">DOWNLOAD CENTER</li><br/>
 <li className="footer">OFFICIAL LANGUAGE</li><br/>
 <li className="footer">DOORSTEP BANKING SERVICES</li><br/>
 <li className="footer">UNCLAIMED DEPOSIT</li><br/>
 <li className="footer">DO NOT CALL REGISTRY</li><br/>
 <li className="footer">CORPORATE SOCIAL RESPONSIBILITIES </li><br/>
 <li className="footer">SCREEN READER ACCESSIBILITY</li><br/>
 <li className="footer">BROWSER COMPATIBILITY</li><br/>
 <li className="footer">NRI AND CONSULTANCY SERVICES</li><br/>
 <li className="footer">ENROLL AS A DIRECT SELLING AGENT APPLY </li><br/>
 <li className="footer">LINKING OF AADHAAR WITH PAN</li><br/>
    </div>
    <div class="col-sm-3">
    <p className="loan1"> COMPLIANCE</p>
    <li className="footer">RTI ACT</li><br/>
    <li className="footer">REGULATIONS</li><br/>
    <li className="footer">REGULATORY DISCLOSURES</li><br/>
    <li className="footer">DISCLAIMER</li><br/>
    <p className="loan1">IMPORTANT LINKS</p>
    <li className="footer">RBI KEHTA HAI</li><br/>
    <li className="footer">RBI MONETARY MUSEUM</li><br/>
    <li className="footer">GENERAL INFORMATION ABOUT </li><br/>
    <li className="footer">PRADHAN MANTRI JAN DHAN YOJANA</li><br/>
    <li className="footer">INTEGRITY PLEDGES</li><br/>
    <li className="footer">OTHER LINKS</li><br/>
    <li className="footer">E-VOTING</li><br/>
    <li className="footer">E SYNDICATE BANK DP DETAILS</li><br/>
    </div>
    <div class="col-sm-3">
    <p className="loan1"> ONLINE SERVICES</p>
    <li className="footer">PRE-FILLED APPLICATIONS FOR RETAIL LOAN PRODUCTS</li><br/>
    <li className="footer">DOWNLOAD TDS CERTIFICATE FORM 16 A</li><br/>
    <li className="footer">GST INVOICE PORTAL</li><br/>
    <li className="footer">CANARA E TAX</li><br/>
    <li className="footer">NACH E MANDATE</li><br/>
    <li className="footer">CCIL FX RETAIL PLATFORM</li><br/>
    <li className="footer">ONLINE SERVICE REQUESTS</li><br/>
    <li className="footer">ONLINE DISPUTE RESOLUTION PORTAL</li><br/>
    <li className="footer">INTERNATIONAL SERVICES</li><br/>
    <li className="footer">E - BIKRAY</li><br/>
    <li className="footer">CANBANK FEE COUNTER</li><br/>
    </div>
  </div>
</div>
<div className="container-fluid">
<div class="  row pt-4" style={{backgroundColor:"#fecc00",textAlign:"center",color:"#0091ae",fontFamily:"sans-serif",height:"80px"}}>
<div className="col-sm-4">© 2023, Canara Bank, All rights reserved</div>
<div className="col-sm-4">Last updated on 27-11-2023 4:29 PM</div>
<div className="col-sm-4">Powered By PECS</div>
</div> 
</div>
    </>
  )
};

export default App;