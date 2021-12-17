import React, { Component, useState } from 'react';
import { Link } from "react-router-dom";

import mockup from './assets/img/Frame 82.png';
import illustrator from './assets/img/Kontrol Kalori.svg';
import illustrator2 from './assets/img/Control Food.svg';
import irgy from './assets/img/irgy.png';
import rahano from './assets/img/rahano.png';
import audy from './assets/img/audy.png';
import helmi from './assets/img/helmi.png';
import faiq from './assets/img/faiq.png';
import fabyan from './assets/img/fabyan.png';
import kris from './assets/img/kris.png';
import dedi from './assets/img/dedi.png';
import reinata from './assets/img/reinata.png';
import logo from './assets/img/Logo.png'
import {Navbar, Nav, Container,NavDropdown } from "react-bootstrap";
import axios from 'axios';

function Calorilin() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  function uploadData(){
    if(!name || !email || !phone || !comment ){
        alert('Semua Input Field Harus Terisi.');
    } else{
        let formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone_number", phone);
        formData.append("comment", comment);
        axios
        .post('https://api.calorilin.me/api/contact-write', formData)
        .then((res) => {
            console.log("sukses");
            console.log(res.data);
            alert('Data terkirim. Terima kasih atas pertanyaan, kritik, dan saran yang anda berikan.');
            setName("");
            setEmail("");
            setPhone("");
            setComment("");
        }).catch((err) => {
            console.log(err);
            alert('Coba Lagi, Data Gagal Dikirim.');
        });
    }
  }

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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#feature">Feature</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="grad-bar"></div>
      

      {/* <!-- showcase --> */}
      <div className="showcase" id="home">
        <div className="showcase-container">

          {/* left showcase */}
          <div className="left-showcase">
            <h1 className="showcase-head">Calorilin</h1>
            <h1 className="showcase-title">Make your life is healthier</h1>
            <p className="showcase-description">Food calorie counter app with daily food control</p>
            <div className="social-list-showcase">
              <i className="fab fa-instagram fa-2x"></i>
              <i className="fab fa-github fa-2x"></i>
              <a href="#" className="btn btn-started">Get started</a>
            </div>
          </div>

          {/* right showcase */}
          <div className="right-showcase">
            <img src={mockup} alt="" />
          </div>

        </div>
      </div>

      {/* <!-- rating section --> */}
      <div className="rating-section" id="feature">
        <div className="header">
          <h2>What's in <span className="span">Calorilin ??</span></h2>
        </div>
        <div className="row1-container">
          <div className="box box-down cyan">
            <h2>Calorie Control</h2>
            <p>Daily calorie control service with groceries input only</p>
          </div>

          <div className="box red">
            <h2>Food Recomendation</h2>
            <p>Provide food recommendations according to the body's needs</p>
          </div>

          <div className="box box-down blue">
            <h2>Calorie Information</h2>
            <p>The most complete food calorie database with 1000+ data</p>
          </div>
        </div>
        <div className="row2-container">
          <div className="box orange">
            <h2>Food Recipe Tutorial</h2>
            <p>How to make food that is guaranteed delicious and healthy</p>
          </div>
        </div>
      </div>


      {/* <!-- info section --> */}
      <div className="section-info">
        <div className="info-container">
          <div className="left-info">
            <h1 className="info-title">A new experience in <span>controlling calories</span> easily and practically to start a <span>healthy lifestyle!</span></h1>
            <p className="info-description">Control your daily food according to the user's calorie needs</p>
          </div>
          <div className="right-info">
            <img className="info-right" src={illustrator} alt="" />
          </div>
        </div>

        <div className="info-container">
          <div className="right-info">
            <img className="info-right" src={illustrator2} alt="" />
          </div>
          <div className="left-info">
            <h1 className="info-title">A guide in <span>selecting</span> suitable foods that are adapted to the <span>user's body condition!</span></h1>
            <p className="info-description">Provide food recommendations according to the disease experienced by the user </p>
          </div>
          
        </div>

        <div className="card-info">
          <h2>What are the features in the <span>Calorilin App?</span></h2>
          <div className="card-box-info">
          {/* Iframe  */}
          <div class="youtube">
            <iframe class="responsive-iframe" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
          </div>

          </div>
        </div>
      </div>
      {/* <!-- info section -->

      <!-- team section --> */}

      <div className="wrapper-testi-title" id="team">
        <div className="wrapper-testi">
          <div class="container mt-100 mt-60">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="section-title">
                        <h1 class="title mb-4">Meet our <span>Team</span></h1>
                    </div>
                </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                  <div className="mt-4 pt-2">
                      <div className="team position-relative d-block text-center">
                          <div className="image position-relative d-block overflow-hidden">
                              <img src={rahano} className="img-fluid rounded" alt=""></img>
                              <div className="overlay rounded bg-dark"></div>
                          </div>
                          <div className="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                              <h4 className="title mb-0">Made Rahano Satryani Widhi</h4>
                              <small className="text-muted">Product Owner</small>
                          </div>
                          <ul className="list-unstyled team-social social-icon social mb-0">
                              <li className="list-inline-item"><a href="https://www.instagram.com/md.rahano/" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                              <li className="list-inline-item"><a href="https://github.com/maderahano" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
              
              <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                  <div className="mt-4 pt-2">
                      <div className="team position-relative d-block text-center">
                          <div className="image position-relative d-block overflow-hidden">
                              <img src={audy} class="img-fluid rounded" alt=""></img>
                              <div className="overlay rounded bg-dark"></div>
                          </div>
                          <div className="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                              <h4 className="title mb-0">Audy Istania Narita</h4>
                              <small className="text-muted">Frontend Developer</small>
                          </div>
                          <ul className="list-unstyled team-social social-icon social mb-0">
                              <li className="list-inline-item"><a href="https://www.instagram.com/audy_isnar/" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                              <li className="list-inline-item"><a href="https://github.com/audyisnar" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
              
              <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                  <div className="mt-4 pt-2">
                      <div className="team position-relative d-block text-center">
                          <div className="image position-relative d-block overflow-hidden">
                              <img src={irgy} className="img-fluid rounded" alt=""></img>
                              <div className="overlay rounded bg-dark"></div>
                          </div>
                          <div className="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                              <h4 className="title mb-0">Stefanus Irgy Hananto</h4>
                              <small className="text-muted">Frontend Developer</small>
                          </div>
                          <ul className="list-unstyled team-social social-icon social mb-0">
                              <li className="list-inline-item"><a href="https://www.instagram.com/stefanus_irgyy/" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                              <li className="list-inline-item"><a href="https://github.com/stefanusirgy2202" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
            </div>


          </div>

          <div class="container mt-100 mt-60">

            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                  <div className="mt-4 pt-2">
                      <div className="team position-relative d-block text-center">
                          <div className="image position-relative d-block overflow-hidden">
                              <img src={fabyan} className="img-fluid rounded" alt=""></img>
                              <div className="overlay rounded bg-dark"></div>
                          </div>
                          <div className="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                              <h4 className="title mb-0">Fabyan Kindarya</h4>
                              <small className="text-muted">Backend Developer</small>
                          </div>
                          <ul className="list-unstyled team-social social-icon social mb-0">
                              <li className="list-inline-item"><a href="https://www.instagram.com/fabyanknd/" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                              <li className="list-inline-item"><a href="https://github.com/fkindarya" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
              
              <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                  <div className="mt-4 pt-2">
                      <div className="team position-relative d-block text-center">
                          <div className="image position-relative d-block overflow-hidden">
                              <img src={faiq} class="img-fluid rounded" alt=""></img>
                              <div className="overlay rounded bg-dark"></div>
                          </div>
                          <div className="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                              <h4 className="title mb-0">Asyam Faiq</h4>
                              <small className="text-muted">Mobile Developer</small>
                          </div>
                          <ul className="list-unstyled team-social social-icon social mb-0">
                              <li className="list-inline-item"><a href="https://www.instagram.com/asyamfaiq/" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                              <li className="list-inline-item"><a href="https://github.com/asyamfaiq" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
              
              <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                  <div className="mt-4 pt-2">
                      <div className="team position-relative d-block text-center">
                          <div className="image position-relative d-block overflow-hidden">
                              <img src={helmi} className="img-fluid rounded" alt=""></img>
                              <div className="overlay rounded bg-dark"></div>
                          </div>
                          <div className="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                              <h4 className="title mb-0">Helmi Dharmawan</h4>
                              <small className="text-muted">Mobile Developer</small>
                          </div>
                          <ul className="list-unstyled team-social social-icon social mb-0">
                              <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                              <li className="list-inline-item"><a href="https://github.com/Hel08" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
            </div>

            
          </div> 
          
        </div>
      </div>    

          
      {/* <!-- team section -->

      <!-- testimonial --> */}
    <div className="section-info">
      <h1 className="wrapper-testi-title">What do they say about <span>Calorilin ??</span></h1>
      <div className="wrapper-testi">
        <div className="box-testi">
          <i className="fas fa-quote-left quote"></i>
          <p>“Calorilin memberikan pengalaman terbaru dalam pengelolaan pola makan, memberikan fitur yang berguna bagi pengguna dan mudah untuk digunakan”</p>
          <div className="content">
            <div className="info">
              <div className="name">Kris Giovani Kartika Hapsari</div>
              <div className="job">Student</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <div className="image">
              <img src={kris} alt="" />
            </div>
          </div>
        </div>
        <div className="box-testi">
          <i className="fas fa-quote-left quote"></i>
          <p>“Calorilin membantu pengguna dalam menjaga pola hidup sehat, sangat sederhana dan menarik minat bagi para pengguna, resep yang ada juga beragam”</p>
          <div className="content">
            <div className="info">
              <div className="name">I Putu Dedi Semara Putra</div>
              <div className="job">Employee</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
            <div className="image">
              <img src={dedi} alt="" />
            </div>
          </div>
        </div>
        <div className="box-testi">
          <i className="fas fa-quote-left quote"></i>
          <p>“Mengedepankan kebutuhan pengguna dalam penggunaan aplikasi, menyesuaikan dengan kebutuhan dan teknologi yang dapat digunakan dengan sederhana”</p>
          <div className="content">
            <div className="info">
              <div className="name">Ida Bagus Kade Reinata</div>
              <div className="job">Student</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
            <div className="image">
              <img src={reinata} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <section id="contact" className="contact mb-5">
      <div className="container">
        <div className="row pt-4 mb-4">
          <div className="col text-center">
            <h2>Contact</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="card-contact text-light text-left mb-3">
              <div className="card-body">
                <h5 className="card-title">Our Contact</h5>
                <p className="card-text">Contact us if you need help, we will reply as possible</p>
              </div>
            </div>
            <ul className="list-group">
              <li className="list-group-item"><h1>Location</h1></li>
              <li className="list-group-item">Sepuluh Nopember Institute of Technology (ITS), Kampus, Jl. Raya ITS, Keputih, Kec. Sukolilo</li>
              <li className="list-group-item">Surabaya</li>
              <li className="list-group-item">East Java, Indonesia</li>
            </ul>
          </div>

          <div className="col-lg-6">
            <form className="contact input">
              <div className="form-group">
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Input Your Name" 
                        value={name} onChange={(e) => setName(e.target.value)}>
                </input>
              </div>
              <div className="form-group mt-2">
                <label for="email">Email</label>
                <input type="text" className="form-control" id="email" placeholder="Input Your Email"
                        value={email} onChange={(e) => setEmail(e.target.value)}>
                </input>
              </div>
              <div className="form-group mt-2">
                <label for="phone">Phone Number</label>
                <input type="text" className="form-control" id="phone" placeholder="Input Your Phone Number"
                        value={phone} onChange={(e) => setPhone(e.target.value)}>
                </input>
              </div>
              <div className="form-group mt-2">
                <label for="comment">Comment</label>
                <textarea name="comment" id="comment" className="form-control"
                          value={comment} onChange={(e) => setComment(e.target.value)}>
                </textarea>
              </div>
              <div className="form-group mt-4">
                <button type="button" className="btn text-white button-contact" onClick={uploadData}>Submit</button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>


      {/* <!-- footer --> */}
      <div class="footer-basic">
        <footer>
            <div class="social"><a href="https://www.instagram.com/app.calorilin/"><i class="fab fa-instagram"></i></a><a href="https://github.com/Calorilin12"><i class="fab fa-github"></i></a></div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#home">Home</a></li>
                <li class="list-inline-item"><a href="#feature">Feature</a></li>
                <li class="list-inline-item"><a href="#team">Team</a></li>
                <li class="list-inline-item"><a href="#contact">Contact</a></li>
                
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

export default Calorilin;
