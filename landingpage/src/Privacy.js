import React, { Component } from 'react';
import { Link } from "react-router-dom";

import logo from './assets/img/Logo.png'
import {Navbar, Nav, Container,NavDropdown } from "react-bootstrap"

function Privacy() {
  return (
    <div classNameName="App">
      <div className="lp-container">
      {/* <!-- nav --> */}
      <Navbar  sticky="top" collapseOnSelect expand="lg"  variant="dark">
        <Container className="navbar">
        <img src={logo}></img>
        <Navbar.Brand href="#home">Calorilin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Feature</Nav.Link>
            <Nav.Link href="/">Team</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="grad-bar"></div>
      
      <div className="rating-section">
        <div className="header">
          <h2>Privacy Policy</h2>
        </div>
        <h2>Calorilin </h2>
        <p>Effective date: 2021-11-25</p>
        <p>Updated on: 2021-11-24</p>
        <p>This Privacy Policy explains the policies of Calorilin on the collection and use of the information we collect when you access http://calorilin.me/privacy-policy (the “Service”). This Privacy Policy describes your privacy rights and how you are protected under privacy laws.</p>
        <p>By using our Service, you are consenting to the collection and use of your information in accordance with this Privacy Policy. Please do not access or use our Service if you do not consent to the collection and use of your information as outlined in this Privacy Policy. This Privacy Policy has been created with the help of CookieScript Privacy Policy Generator.</p> 
        <p>Calorilin is authorized to modify this Privacy Policy at any time. This may occur without prior notice.</p>
        <p>Calorilin will post the revised Privacy Policy on the http://calorilin.me/privacy-policy website</p>
        

        <h2 className='privacy-clone'>Collection and Use of Your Personal Information </h2>
        <h4>Information We Collect</h4>
        <p>When using our Service, you will be prompted to provide us with personal information used to contact or identify you. http://calorilin.me/privacy-policy collects the following information:</p>
        <ol>
          <li>Usage Data</li>
          <li>Name</li>
          <li>Email</li>
          <li>Mobile Number</li>
          <li>Date of Birth</li>
          <li>Home Address</li>
          <li>Payment Information</li>
        </ol>
        <p>Usage Data includes the following:</p>
        <ol>
          <li>Internet Protocol (IP) address of computers accessing the site</li>
          <li>Web page requests</li>
          <li>Referring web pages</li>
          <li>Browser used to access site</li>
          <li>Time and date of access</li>
        </ol>
        <h4>How We Collect Information</h4>
        <p>http://calorilin.me/privacy-policy collects and receives information from you in the following manner:</p>
        <ol>
          <li>When you fill a registration form or otherwise submit your personal information.</li>
        </ol>
        <p>Your information will be stored for up to 30 days after it is no longer required to provide you the services. Your information may be retained for longer periods for reporting or record- keeping in accordance with applicable laws. Information which does not identify you personally may be stored indefinitely.</p>
        <h4>How We Use Your Information</h4>
        <p>http://calorilin.me/privacy-policy may use your information for the following purposes:</p>
        <ol>
          <li><b>Providing and maintaining our Service,</b> as well as monitoring the usage of our Service.</li>
          <li><b>For other purposes.</b> Calorilin will use your information for data analysis to identify usage trends or determine the effective of our marketing campaigns when reasonable. We will use your information to evaluate and improve our Service, products, services, and marketing efforts.</li>
          <li><b>Managing customer orders.</b> Your email address, phone number, social media profiles, and other user account information will be used in order to manage orders placed through our Service.</li>
        </ol>
        <h4>How We Share Your Information</h4>
        <p>Calorilin will share your information, when applicable, in the following situations</p>
        <ol>
          <li><b>With your consent.</b> With your consent.</li>
        </ol>
        <h4>Third-party Sharing</h4>
        <p>Your information may be disclosed for additional reasons, including:</p>
        <ol>
          <li>Complying with applicable laws, regulations, or court orders.</li>
          <li>Responding to claims that your use of our Service violates third-party rights.</li>
          <li>Enforcing agreements you make with us, including this Privacy Policy.</li>
        </ol>
        <h4>Cookies</h4>
        <p>Cookies are small text files that are placed on your computer by websites that you visit. Websites use cookies to help users navigate efficiently and perform certain functions. Cookies that are required for the website to operate properly are allowed to be set without your permission. All other cookies need to be approved before they can be set in the browser.</p>
        <ol>
          <li><b>Strictly necessary cookies.</b> Strictly necessary cookies allow core website functionality such as user login and account management. The website cannot be used properly without strictly necessary cookies.</li>
        </ol>
        <h4>Security</h4>
        <p>Your information's security is important to us. http://calorilin.me/privacy-policy utilizes a range of security measures to prevent the misuse, loss, or alteration of the information you have given us. However, because we cannot guarantee the security of the information you provide us, you must access our service at your own risk.</p>
        <p>Calorilin is not responsible for the performance of websites operated by third parties or your interactions with them. When you leave this website, we recommend you review the privacy practices of other websites you interact with and determine the adequacy of those practices.</p>
        <h4>Contact Us</h4>
        <p>For any questions, please contact us through the following methods:</p>
      
        <p>Name : Calorilin</p>
        <p>Address: Institut Teknologi Sepuluh Nopember, Kampus, Jl. Raya ITS, Keputih, Kec. Sukolilo, Kota SBY, Jawa Timur 60111</p>
        <p>Email : calorilin12@gmail.com</p>
        <p>Website: http://calorilin.me/privacy-policy</p>
        <p>Phone : +62 821-4494-8550</p>
      
      </div>

      {/* <!-- footer --> */}
      <div class="footer-basic">
        <footer>
            <div class="social"><a href="https://www.instagram.com/app.calorilin/"><i class="fab fa-instagram"></i></a><a href="https://github.com/Calorilin12"><i class="fab fa-github"></i></a></div>
            <ul class="list-inline">
                <li class="list-inline-item"><Link to="/">Home</Link></li>
                <li class="list-inline-item"><Link to="/">Feature</Link></li>
                <li class="list-inline-item"><Link to="/">Team</Link></li>
                <li class="list-inline-item"><Link to="/">Contact</Link></li>
                <li class="list-inline-item"><Link to="/Terms">Terms & Conditions</Link></li>
                <li class="list-inline-item"><Link to="/Privacy">Privacy Policy</Link></li>
            </ul>
            <p class="copyright">Calorilin © 2021</p>
        </footer>
      </div>

      
    </div>
    </div>
  );
}

export default Privacy;
