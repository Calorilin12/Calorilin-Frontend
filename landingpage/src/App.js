import './App.css';
import mockup from './assets/img/Frame 82.png';
import illustrator from './assets/img/Kontrol Kalori.svg';
import illustrator2 from './assets/img/Control Food.svg';
import irgy from './assets/img/irgy.png';
import rahano from './assets/img/rahano.png';
import audy from './assets/img/audy.png';
import logo from './assets/img/Logo.png'

function App() {
  return (
    <div classNameName="App">
      <div className="lp-container">
      {/* <!-- nav --> */}
      <div className="nav-container">
        <nav className="nav">
          <div className="nav-logo">
            <img src={logo} alt="" />
            <h4>Calorilin</h4>
          </div>
        </nav>
        <div className="grad-bar"></div>
      </div>

      {/* <!-- showcase --> */}
      <div className="showcase">
        <div className="showcase-container">

          {/* left showcase */}
          <div className="left-showcase">
            <h1 className="showcase-head">Calorilin</h1>
            <h1 className="showcase-title">Make your life is healthier</h1>
            <p className="showcase-description">Food calorie counter app with daily food control</p>
            <div className="social-list-showcase">
              <i className="fab fa-twitter fa-2x"></i>
              <i className="fab fa-instagram fa-2x"></i>
              <i className="fab fa-facebook fa-2x"></i>
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
      <div className="rating-section">
        <div className="header">
          <h2>Apa saja yang tersedia dalam <span className="span">Calorilin ??</span></h2>
        </div>
        <div className="row1-container">
          <div className="box box-down cyan">
            <h2>Kontrol Kalori</h2>
            <p>Layanan kontrol kalori harian hanya dengan input bahan makanan</p>
          </div>

          <div className="box red">
            <h2>Rekomendasi Makanan</h2>
            <p>Memberikan rekomendasi makanan yang sesuai dengan kebutuhan tubuh</p>
          </div>

          <div className="box box-down blue">
            <h2>Informasi Kalori</h2>
            <p>Database kalori makanan terlengkap dengan jumlah data 1000+</p>
          </div>
        </div>
        <div className="row2-container">
          <div className="box orange">
            <h2>Tutorial Resep Makanan</h2>
            <p>Tutorial pembuatan makanan yang terjamin kelezatan dan kesehatannya</p>
          </div>
        </div>
      </div>


      {/* <!-- info section --> */}
      <div className="section-info">
        <div className="info-container">
          <div className="left-info">
            <h1 className="info-title">Pengalaman baru dalam <span>mengkontrol</span> kalori secara <span>dinamis dan praktis</span> untuk memulai gaya hidup sehat !</h1>
            <p className="info-description">Mengatur pola makan setiap harinya sesuai dengan kebutuhan kalori pengguna </p>
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
            <h1 className="info-title">Panduan dalam <span>pemilihan makanan</span> yang cocok yang disesuaikan dengan <span>kondisi tubuh</span> pengguna !</h1>
            <p className="info-description">Memberikan rekomendasi makanan sesuai dengan penyakit yang dialami pengguna </p>
          </div>
          
        </div>

        <div className="card-info">
          <h2>Penasaran fitur dalam Aplikasi <span>Calorilin?</span></h2>
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

      <div className="wrapper-testi-title">
        <div className="wrapper-testi">
          <div class="container mt-100 mt-60">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="section-title">
                        <h4 class="title mb-4">Our Creative Minds</h4>
                        <p class="text-muted para-desc mx-auto mb-0">Build responsive, mobile-first projects on the web with the world's most popular front-end component library.</p>
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
                              <h4 className="title mb-0">Calvin Carlo</h4>
                              <small className="text-muted">Founder</small>
                          </div>
                          <ul className="list-unstyled team-social social-icon social mb-0">
                              <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></a></li>
                              <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                              <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></a></li>
                              <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-google-plus" title="Google +"></i></a></li>
                              <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
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
                              <h4 className="title mb-0">Martin Sobhe</h4>
                              <small className="text-muted">C.E.O.</small>
                          </div>
                          <ul className="list-unstyled team-social social-icon social mb-0">
                              <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></a></li>
                              <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                              <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></a></li>
                              <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-google-plus" title="Google +"></i></a></li>
                              <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
              
              <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                  <div className="mt-4 pt-2">
                      <div className="team position-relative d-block text-center">
                          <div className="image position-relative d-block overflow-hidden">
                              <img src={rahano} className="img-fluid rounded" alt=""></img>
                              <div className="overlay rounded bg-dark"></div>
                          </div>
                          <div className="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                              <h4 className="title mb-0">Bobby DE</h4>
                              <small className="text-muted">Developer</small>
                          </div>
                          <ul className="list-unstyled team-social social-icon social mb-0">
                              <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></a></li>
                              <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                              <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></a></li>
                              <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-google-plus" title="Google +"></i></a></li>
                              <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                          </ul>
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
                                <h4 className="title mb-0">Calvin Carlo</h4>
                                <small className="text-muted">Founder</small>
                            </div>
                            <ul className="list-unstyled team-social social-icon social mb-0">
                                <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></a></li>
                                <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                                <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></a></li>
                                <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-google-plus" title="Google +"></i></a></li>
                                <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
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
                                <h4 className="title mb-0">Martin Sobhe</h4>
                                <small className="text-muted">C.E.O.</small>
                            </div>
                            <ul className="list-unstyled team-social social-icon social mb-0">
                                <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></a></li>
                                <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                                <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></a></li>
                                <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-google-plus" title="Google +"></i></a></li>
                                <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                  <div className="mt-4 pt-2">
                      <div className="team position-relative d-block text-center">
                          <div className="image position-relative d-block overflow-hidden">
                              <img src={rahano} className="img-fluid rounded" alt=""></img>
                              <div className="overlay rounded bg-dark"></div>
                          </div>
                          <div className="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                              <h4 className="title mb-0">Cristino Murphy</h4>
                              <small className="text-muted">Designer</small>
                          </div>
                          <ul className="list-unstyled team-social social-icon social mb-0">
                              <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></a></li>
                              <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                              <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></a></li>
                              <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-google-plus" title="Google +"></i></a></li>
                              <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>      
      {/* <!-- team section -->

      <!-- testimonial --> */}
      <h1 className="wrapper-testi-title">Apa kata mereka tentang <span>Calorilin ??</span></h1>
      <div className="wrapper-testi">
        <div className="box-testi">
          <i className="fas fa-quote-left quote"></i>
          <p>“Calorilin memberikan pengalaman terbaru dalam pengelolaan pola makan, memberikan fitur yang berguna bagi pengguna dan mudah untuk digunakan”</p>
          <div className="content">
            <div className="info">
              <div className="name">Stefanus Irgy</div>
              <div className="job">Developer</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
            <div className="image">
              <img src={irgy} alt="" />
            </div>
          </div>
        </div>
        <div className="box-testi">
          <i className="fas fa-quote-left quote"></i>
          <p>“Calorilin membantu pengguna dalam menjaga pola hidup sehat, sangat sederhana dan menarik minat bagi para pengguna”</p>
          <div className="content">
            <div className="info">
              <div className="name">Made Rahano</div>
              <div className="job">Product Owner</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
            <div className="image">
              <img src={rahano} alt="" />
            </div>
          </div>
        </div>
        <div className="box-testi">
          <i className="fas fa-quote-left quote"></i>
          <p>“Mengedepankan kebutuhan pengguna dalam penggunaan aplikasi, menyesuaikan dengan kebutuhan dan teknologi yang dapat digunakan dengan sederhana”</p>
          <div className="content">
            <div className="info">
              <div className="name">Audy Istania</div>
              <div className="job">Mahasiswa</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
            <div className="image">
              <img src={audy} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- footer --> */}
      <div class="footer-basic">
        <footer>
            <div class="social"><a href="#"><i class="fab fa-twitter"></i></a><a href="#"><i class="fab fa-instagram"></i></a><a href="#"><i class="fab fa-facebook"></i></a><a href="#"><i class="fab fa-github"></i></a></div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Home</a></li>
                <li class="list-inline-item"><a href="#">Services</a></li>
                <li class="list-inline-item"><a href="#">About</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright">Calorilin © 2021</p>
        </footer>
      </div>



      
    </div>
    </div>
  );
}

export default App;
