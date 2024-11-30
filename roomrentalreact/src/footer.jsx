import React, { Component } from 'react';

class Footer extends Component {
  render() { 
    return (
      <>
        <footer className="bg-primary text-light pb-2">
          <div className="container text-center text-md-start">
            <div className="row text-center text-md-start">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Room Rentals</h5>
                <p>
                  Your one-stop solution to find the perfect rental rooms. Explore options, manage bookings, and more, all in one place.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Quick Links</h5>
                <p><a href="#" className="text-light" style={{ textDecoration: 'none' }}>Home</a></p>
                <p><a href="#" className="text-light" style={{ textDecoration: 'none' }}>About Us</a></p>
                <p><a href="#" className="text-light" style={{ textDecoration: 'none' }}>Services</a></p>
                <p><a href="#" className="text-light" style={{ textDecoration: 'none' }}>Contact</a></p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
                <p><i className="fas fa-home mr-3"></i> Ahmednagar, Maharashtra, India</p>
                <p><i className="fas fa-envelope mr-3"></i> info@roomrentals.com</p>
                <p><i className="fas fa-phone mr-3"></i> +91 234 567 8901</p>
                <p><i className="fas fa-print mr-3"></i> +91 234 567 8902</p>
              </div>

              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Follow Us</h5>
                <a href="#" className="text-light me-4"><i className="fab fa-facebook" style={{ color: 'blue' }}></i></a>
                <a href="#" className="text-light me-4"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-light me-4"><i className="fab fa-instagram" style={{ color: 'palevioletred' }}></i></a>
                <a href="#" className="text-light me-4"><i className="fab fa-linkedin" style={{ color: 'rgb(120, 120, 233)' }}></i></a>
              </div>
            </div>
            
          </div>
          <hr className="mb-2" />
          <div className="row align-items-center">
              <div className="col-md-7 col-lg-8">
                <p>© 2024 All rights reserved by: <a href="#" className="text-warning" style={{ textDecoration: 'none' }}>Room Rentals</a></p>
              </div>

              <div className="col-md-5 col-lg-4">
                <a href="#" className="btn btn-warning">Back to Top</a>
              </div>
            </div>
        </footer>
      </>
    );
  }
}

export default Footer;