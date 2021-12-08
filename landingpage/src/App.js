import './App.css';
import mockup from './assets/img/Frame 82.png';
import illustrator from './assets/img/pana.png';
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
          <div className="right-showcase">
            <img src={mockup} alt="" />
          </div>
        </div>
      </div>
      {/* <!-- rating section --> */}
      <div className="rating-section">
        <div className="header">
          <h1>Apa saja yang tersedia dalam <span className="span">Calorilin ??</span></h1>
        </div>
        <div className="row1-container">
          <div className="box box-down cyan">
            <h2>Kontrol Kalori</h2>
            <p>Memberikan kemudahan akses materi belajar iot</p>
          </div>

          <div className="box red">
            <h2>Rekomendasi Makanan</h2>
            <p>Memberikan materi yang iot yang cukup lengkap</p>
          </div>

          <div className="box box-down blue">
            <h2>Informasi Kalori</h2>
            <p>Memberikan akses materi belajar gratis</p>
          </div>
        </div>
        <div className="row2-container">
          <div className="box orange">
            <h2>Tutorial Resep Makanan</h2>
            <p>Memberikan materi belajar dengan update terbaru</p>
          </div>
        </div>
      </div>
      {/* <!-- article section --> */}
      <div className="section-info">
        <div className="info-container">
          <div className="left-info">
            <h1 className="info-title">Pengalaman baru dalam mengkontrol kalori secara dinamis dan praktis untuk memulai gaya hidup sehat !</h1>
            <p className="info-description">Mengatur pola makan setiap harinya sesuai dengan kebutuhan kalori pengguna </p>
          </div>
          <div className="right-info">
            <img className="info-right" src={illustrator} alt="" />
          </div>
        </div>
        <div className="card-info">
          <h2>Penasaran fitur dalam Aplikasi <span>Calorilin?</span></h2>
          <div className="card-box-info">
            <div className="left-card-info">
            <iframe width="420" height="250"
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
            </div>
            <div className="right-card-info">
              <h4>Healthy food</h4>
              <p>Membatu pengguna dalam pengelolaan pola makan untuk menjaga kesehatan pengguna</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- testimonial section -->
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
      <footer>
        <div className="container">
          {/* <!-- LEFT FOOTER --> */}
          <div className="left-footer">
            <h3 className="header">Calorilin</h3>
            <p className="left-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            <p className="copyright">&copy;copyright 2021 All rights reserved</p>
          </div>          
        </div>
      </footer>
    </div>
    </div>
  );
}

export default App;
