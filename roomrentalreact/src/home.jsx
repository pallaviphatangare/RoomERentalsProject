import React, { Component } from 'react';
import './homie.css';
import './booking.jsx';
class Home extends Component {
  render() {
    return (
      <>

        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" >
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="img/roomrent2.jpg" className="d-block w-100" style={{ height: '500px' }} alt="Room 1" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="rent" style={{ fontSize: '45px', fontWeight: 'bold', color: '#eeb115' }}>The Perfect Room For You</h5>
                <p style={{ marginBottom: '100px', color: 'white', fontWeight: 'bold' }}>Perfect room is always important</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src="img/roomrent5.jpg" className="d-block w-100" style={{ height: '500px' }} alt="Room 2" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="rent" style={{ fontSize: '45px', fontWeight: 'bold', color: '#eeb115' }}>The Perfect Room For You</h5>
                <p style={{ marginBottom: '100px', color: 'white', fontWeight: 'bold' }}>Perfect room is always important</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src="img/roomrent8.jpg" className="d-block w-100" style={{ height: '500px' }} alt="Room 3" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="rent" style={{ fontSize: '45px', fontWeight: 'bold', color: '#eeb115' }}>The Perfect Room For You</h5>
                <p style={{ marginBottom: '100px', color: 'white', fontWeight: 'bold' }}>Perfect room is always important</p>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="gallery" id="Gallery">
             <h1>Choose Your <span>Room</span></h1>
      <div className="gallery_image_box">

        <div className="gallery_image">
          <img src="img/roomrent3.jpg" alt="Room 1" />
          <p>Modern, fully furnished room in a prime location. Perfect for comfortable living.</p>
          <a href="/booking" className="gallery_btn">See More</a>
        </div>

        <div className="gallery_image">
          <img src="img/roomrent4.jpg" alt="Room 2" />
          <p>Modern, fully furnished room in a prime location. Perfect for comfortable living.</p>
          <a href="/booking" className="gallery_btn">See More</a>
        </div>

        <div className="gallery_image">
          <img src="img/roomrent5.jpg" alt="Room 3" />
          <p>Modern, fully furnished room in a prime location. Perfect for comfortable living.</p>
          <a href="/booking" className="gallery_btn">See More</a>
        </div>

        <div className="gallery_image">
          <img src="img/roomrent6.jpg" alt="Room 4" />
          <p>Modern, fully furnished room in a prime location. Perfect for comfortable living.</p>
          <a href="/booking" className="gallery_btn">See More</a>
        </div>

        <div className="gallery_image">
          <img src="img/roomrent7.jpg" alt="Room 5" />
          <p>Modern, fully furnished room in a prime location. Perfect for comfortable living.</p>
          <a href="/booking" className="gallery_btn">See More</a>
        </div>

        <div className="gallery_image">
          <img src="img/roomrent8.jpg" alt="Room 6" />
          <p>Modern, fully furnished room in a prime location. Perfect for comfortable living.</p>
          <a href="/booking" className="gallery_btn">See More</a>
        </div>

        <div className="gallery_image">
          <img src="img/roomrent9.jpg" alt="Room 7" />
          <p>Modern, fully furnished room in a prime location. Perfect for comfortable living.</p>
          <a href="/booking" className="gallery_btn">See More</a>
        </div>

        <div className="gallery_image">
          <img src="img/roomrent10.jpg" alt="Room 8" />
          <p>Modern, fully furnished room in a prime location. Perfect for comfortable living.</p>
          <a href="/booking" className="gallery_btn">See More</a>
        </div>

        <div className="gallery_image">
          <img src="img/roomrent11.jpg" alt="Room 9" />
          <p>Modern, fully furnished room in a prime location. Perfect for comfortable living.</p>
          <a href="/booking" className="gallery_btn">See More</a>
        </div>

        <div className="gallery_image">
          <img src="img/roomrent12.jpg" alt="Room 10" />
          <p>Modern, fully furnished room in a prime location. Perfect for comfortable living.</p>
          <a href="/booking" className="gallery_btn">See More</a>
        </div>

      </div>
    </div>
    <div className="stats-container">
      <div className="stat-box">
        <i className="fa-solid fa-house"></i>
        <h3>942</h3>
        <p>Listings For Sale</p>
      </div>

      <div className="stat-box">
        <i className="fa-solid fa-money-bill"></i>
        <h3>1476</h3>
        <p>Listings For Rent</p>
      </div>

      <div className="stat-box">
        <i className="fa fa-user"></i>
        <h3>164</h3>
        <p>Agents</p>
      </div>

      <div className="stat-box">
        <i className="fa-solid fa-users-gear"></i>
        <h3>2530</h3>
        <p>Happy Clients</p>
      </div>
    </div>

<div className="review" id="Review" style={{ marginBottom: '200px' }}>
  <h1>
    Client<span>Review</span>
  </h1>

  <div className="review_box" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
    <div className="review_card" style={{ flex: '1 1 30%', margin: '5px' }}>
      <div className="review_profile">
        <img src="img/review.jpg" alt="Client" />
      </div>

      <div className="review_text">
        <h2 className="name">Rohit Schmid</h2>
        <h4 className="name">Mumbai</h4>

        <div className="review_icon">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half-stroke"></i>
        </div>

        <div className="review_social">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>

        <p>
          "Great Stay, Highly Recommended! I stayed at room no-90 in Ahmednagar for a week, and my experience was
          fantastic. The room was clean, spacious, and exactly as described in the listing. The bed was comfortable,
          and there were plenty of amenities, like fast Wi-Fi, fresh linens, and a fully equipped kitchen, which
          made my stay convenient."
        </p>
      </div>
    </div>

    <div className="review_card" style={{ flex: '1 1 30%', margin: '5px' }}>
      <div className="review_profile">
        <img src="img/review2.jpg" alt="Client" />
      </div>

      <div className="review_text">
        <h2 className="name">Arjun Sharma</h2>
        <h4 className="name">Delhi</h4>

        <div className="review_icon">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half-stroke"></i>
        </div>

        <div className="review_social">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>

        <p>
          "I had a fantastic stay in the rented room. It was clean, comfortable, and exactly as described in the
          listing. The bed was super cozy, and the room had all the amenities I needed, including fast Wi-Fi and a
          fully equipped kitchenette."
        </p>
      </div>
    </div>

    <div className="review_card" style={{ flex: '1 1 30%', margin: '5px' }}>
      <div className="review_profile">
        <img src="img/review3.jpg" alt="Client" />
      </div>

      <div className="review_text">
        <h2 className="name">Prashant Chadha</h2>
        <h4 className="name">Pune</h4>

        <div className="review_icon">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half-stroke"></i>
        </div>

        <div className="review_social">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>

        <p>
          "The location was perfect, close to public transport and within walking distance of several great
          restaurants and cafes. Despite being in a busy area, the room was quiet, allowing for peaceful nights."
        </p>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid" style={{ marginTop: -200 }}>
      <h2 style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '40px', marginBottom: 20 }}>
        Terms & <span style={{ marginLeft: 15, color: '#fac031', fontFamily: 'mv boli' }}>Condition</span>
        <span style={{ textAlign: 'center', marginLeft: '50%', background: '#fac031', position: 'relative', bottom: 15, display: 'block', content: '', width: '14%', marginTop: 5, height: 2, display: 'block' }} />
      </h2>
      <div className="row">
        <div className="col" style={{ backgroundColor: 'rgb(235, 233, 233)', paddingTop: 10 }}>
          <h2 style={{ color: 'rgb(58, 58, 114)', fontWeight: 'bold', textAlign: 'center' }}>User Eligibility</h2>
          <p style={{ textAlign: 'center' }}>To use this website, you must be 18 years or older. By using the platform, you represent that you meet these requirements.</p>
        </div>

        <div className="col" style={{ backgroundColor: 'white', paddingTop: 10 }}>
          <h2 style={{ color: 'rgb(58, 58, 114)', fontWeight: 'bold', textAlign: 'center' }}>Account Registration</h2>
          <p style={{ textAlign: 'center' }}>Users must create an account to list or rent rooms. Keep your login details safe and ensure the information provided is accurate.</p>
        </div>

        <div className="col" style={{ backgroundColor: 'rgb(235, 233, 233)', paddingTop: 10 }}>
          <h2 style={{ color: 'rgb(58, 58, 114)', fontWeight: 'bold', textAlign: 'center' }}>Payments</h2>
          <p style={{ textAlign: 'center' }}>All payments are processed securely via third-party payment processors. The platform does not handle disputes directly between hosts and tenants.</p>
        </div>

        <div className="col" style={{ backgroundColor: 'white', paddingTop: 10 }}>
          <h2 style={{ color: 'rgb(58, 58, 114)', fontWeight: 'bold', textAlign: 'center' }}>Cancellations and Refunds</h2>
          <p style={{ textAlign: 'center' }}>Cancellation policies are determined by each host. Review these carefully before making any booking.</p>
        </div>
      </div>
    </div>

      </>
    );
  }
}

export default Home;
