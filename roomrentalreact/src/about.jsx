import React, { Component } from 'react';
import './about.css';
class About extends Component {
  render() {
    return (
      <>
         <section className="about_info">
            <div className="row">

                <div className="col-md-6">
                    <img src="img/bedroom.jpg" alt="Bedroom" />
                </div>
                <div className="col-md-6" id="content">
                <h1>About Us</h1>
                  <p>
                       Welcome to our premier rental community, where convenience meets comfort and modern living is redefined. Located in the heart of [Location], we offer an exceptional rental experience tailored to meet your lifestyle needs. At our community, we believe in providing more than just a place to live – we strive to create a nurturing environment where residents can truly feel at home. Our commitment to excellence is evident in every aspect of our community, from our thoughtfully designed interiors to our top-notch amenities. Whether you're lounging by the pool, breaking a sweat in our fitness center, or enjoying a quiet evening in our communal spaces, you'll find that every detail has been carefully curated to enhance your living experience. But what truly sets us apart is our dedication to customer satisfaction. Our friendly and responsive management team is here to ensure that your needs are met promptly and efficiently, providing you with peace of mind and a sense of belonging. Thank you for considering our community as your new home. We look forward to welcoming you and helping you create lasting memories in a place you'll be proud to call home.
                  </p>
                </div>
            </div>
          </section>


         

   <section className="service_section layout_padding">
    <div className="container ">
      <div className="heading_container heading_center">
        <h2> Our Services </h2>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-4 mx-auto">
          <div className="box ">
            <div className="img-box">
              <img src="img/s1.png" alt="" />
            </div>
            <div className="detail-box">
              <h5>
                Maintenance
              </h5>
              <p>
                Maintenance is the cornerstone of preserving the functionality, safety, and aesthetic appeal of your home. From routine tasks  to more involved projects like repairing plumbing leaks or fixing electrical issues, maintenance ensures that your home remains in optimal condition year-round.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mx-auto">
          <div className="box ">
            <div className="img-box">
              <img src="img/s2.png" alt="" />
            </div>
            <div className="detail-box">
              <h5>
                Electrical
              </h5>
              <p>
                We provide dependable electricity services to ensure uninterrupted power supply for your home. Our mission is to keep your lights on and your appliances running smoothly, day in and day out.We prioritize reliability, ensuring that you have access to electricity whenever you need it. 
              </p>
            </div>
          </div>
        </div>



        <div className="col-sm-6 col-md-4 mx-auto">
          <div className="box ">
            <div className="img-box">
              <img src="img/s3.png" alt="" />
            </div>
            <div className="detail-box">
              <h5>
                Plumbing
              </h5>
              <p>
                Our mission is to ensure seamless operation of your plumbing fixtures, keeping your water flowing and your systems functioning flawlessly. Just like our dedication to electricity reliability, we prioritize dependable plumbing services, guaranteeing access to clean water and efficient drainage around the clock.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="about_info">
  <div className="row">
    <div className="col-md-6">
      <div className="our_mission">
        <h2>Our Mission</h2>
        <p>
          <b>Our mission is to simplify the process of finding rental accommodations, offering a user-friendly interface where landlords can list their properties and tenants can easily browse, compare, and book rooms. We aim to provide high-quality service and a diverse selection of rooms that cater to all budgets.</b>
        </p>
      </div>
    </div>
    <div className="col-md-6">
      <div className="our_offer">
        <h2>What We Offer</h2>
        <p>
          <b>Verified Listings:</b> Every room listed on our platform is verified for authenticity and quality.<br />
          <b>Easy Booking:</b> Book your desired room with just a few clicks.<br />
          <b>Secure Transactions:</b> Our payment process is secure and hassle-free. <br />
          <b>Support:</b> We are here to help, with customer service available for any assistance.
        </p>
      </div>
    </div>
  </div>
</section>


      </>
    );
  }
}

export default About;
