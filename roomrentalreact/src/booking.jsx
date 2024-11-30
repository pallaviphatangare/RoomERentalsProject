import React, { Component } from "react";
import './booking.css';

class Booking extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          phone: '',
          aadhar: '',
          checkin: '',
          requests: ''
        };
      }
    
      handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      };
    
      handleSubmit = async (e) => {
        e.preventDefault();  
        
        const { name, email, phone, aadhar, checkin, requests } = this.state;

        const bookingData = {
          name,
          email,
          phone,
          aadhar,
          checkin,
          requests
        };
    
        try {
            const response = await fetch('http://localhost:8080/api/bookings', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(bookingData), 
            });
          
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
          
            const contentType = response.headers.get('content-type');
            let data;
            if (contentType && contentType.includes('application/json')) {
              data = await response.json(); 
            } else {
              data = { message: await response.text() }; 
            }
          
            console.log('Success:', data);
          
          } catch (error) {
            console.error('Error:', error); 
          }
    };          
    

    render() {
        return (
            <>
                <div id="roomCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="img/booking.jpg" className="d-block w-100" alt="Room 1" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>The Perfect Room For You</h5>
                                <p>Enjoy comfort and convenience.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="img/booking2.jpg" className="d-block w-100" alt="Room 2" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Luxury Awaits</h5>
                                <p>Relax in style and elegance.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="img/booking3.jpg" className="d-block w-100" alt="Room 3" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Book Your Stay</h5>
                                <p>Find your perfect getaway.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#roomCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#roomCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


                <div className="container my-5" id="booking">
                <h2 className="text-center">Book Your Room</h2>
        <form id="bookingForm" onSubmit={this.handleSubmit}>
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Full Name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="col">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="phone"
              placeholder="Phone Number"
              value={this.state.phone}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="aadhar"
              placeholder="Aadhar Number"
              maxLength="12"
              pattern="\d{12}"
              value={this.state.aadhar}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="row mb-3">
            <div className="col">
              <input
                type="date"
                className="form-control"
                name="checkin"
                value={this.state.checkin}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              name="requests"
              placeholder="Special Requests"
              rows="3"
              value={this.state.requests}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100" id="booknow">Book Now</button>
        </form>
      </div>

                <div className="container" id="gallery">
                    <h2 className="text-center">Gallery</h2>
                    <div className="row ml-0 mr-0">
                        <div className="col-md-3 mb-2">
                            <div className="card">
                                <img src="img/booking4.jpg" className="card-img-top" alt="Room 4" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Room 1</h5>
                                    <p className="card-text">Enjoy your stay in this lovely room.</p>
                                    <button className="btn btn-light m-2"><a href="https://wa.me/+919699614964" target="_blank" rel="noopener noreferrer">Contact to Owner</a></button>
                                    <button className="btn btn-light">
                                        <a href="tel:+919699614964">Call To Owner</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-2">
                            <div className="card w-100">
                                <img src="img/booking5.jpg" className="card-img-top h-50" alt="Room 5" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Room 2</h5>
                                    <p className="card-text">Comfortable and spacious for your needs.</p>
                                    <button className="btn btn-light m-2"><a href="https://wa.me/+919699614964" target="_blank" rel="noopener noreferrer">Contact to Owner</a></button>
                                    <button className="btn btn-light">
                                        <a href="tel:+919699614964">Call To Owner</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-2">
                            <div className="card">
                                <img src="img/booking6.jpg" className="card-img-top" alt="Room 6" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Room 3</h5>
                                    <p className="card-text">A perfect getaway room.</p>
                                    <button className="btn btn-light m-2"><a href="https://wa.me/+919699614964" target="_blank" rel="noopener noreferrer">Contact to Owner</a></button>
                                    <button className="btn btn-light">
                                        <a href="tel:+919699614964">Call To Owner</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-2">
                            <div className="card">
                                <img src="img/roomrent1.jpg" className="card-img-top" alt="Room 4" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Room 4</h5>
                                    <p className="card-text">Enjoy your stay in this lovely room.</p>
                                    <button className="btn btn-light m-2"><a href="https://wa.me/+919699614964" target="_blank" rel="noopener noreferrer">Contact to Owner</a></button>
                                    <button className="btn btn-light">
                                        <a href="tel:+919699614964">Call To Owner</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row ml-0 mr-0">
                        <div className="col-md-3 mb-2">
                            <div className="card">
                                <img src="img/roomrent2.jpg" className="card-img-top" alt="Room 4" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Room 5</h5>
                                    <p className="card-text">Enjoy your stay in this lovely room.</p>
                                    <button className="btn btn-light m-2"><a href="https://wa.me/+919699614964" target="_blank" rel="noopener noreferrer">Contact to Owner</a></button>
                                    <button className="btn btn-light">
                                        <a href="tel:+919699614964">Call To Owner</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-2">
                            <div className="card">
                                <img src="img/roomrent3.jpg" className="card-img-top" alt="Room 5" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Room 6</h5>
                                    <p className="card-text">Comfortable and spacious for your needs.</p>
                                    <button className="btn btn-light m-2"><a href="https://wa.me/+919699614964" target="_blank" rel="noopener noreferrer">Contact to Owner</a></button>
                                    <button className="btn btn-light">
                                        <a href="tel:+919699614964">Call To Owner</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-2">
                            <div className="card">
                                <img src="img/roomrent4.jpg" className="card-img-top" alt="Room 6" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Room 7</h5>
                                    <p className="card-text">A perfect getaway room.</p>
                                    <button className="btn btn-light m-2"><a href="https://wa.me/+919699614964" target="_blank" rel="noopener noreferrer">Contact to Owner</a></button>
                                    <button className="btn btn-light">
                                        <a href="tel:+919699614964">Call To Owner</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-2">
                            <div className="card">
                                <img src="img/roomrent5.jpg" className="card-img-top h-50" alt="Room 6" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Room 8</h5>
                                    <p className="card-text">A perfect getaway room.</p>
                                    <button className="btn btn-light m-2"><a href="https://wa.me/+919699614964" target="_blank" rel="noopener noreferrer">Contact to Owner</a></button>
                                    <button className="btn btn-light">
                                        <a href="tel:+919699614964">Call To Owner</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row ml-0 mr-0">
                        <div className="col-md-3 mb-2">
                            <div className="card">
                                <img src="img/roomrent6.jpg" className="card-img-top" alt="Room 4" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Room 9</h5>
                                    <p className="card-text">Enjoy your stay in this lovely room.</p>
                                    <button className="btn btn-light m-2"><a href="https://wa.me/+919699614964" target="_blank" rel="noopener noreferrer">Contact to Owner</a></button>
                                    <button className="btn btn-light">
                                        <a href="tel:+919699614964">Call To Owner</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-2">
                            <div className="card">
                                <img src="img/roomrent7.jpg" className="card-img-top" alt="Room 5" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Room 10</h5>
                                    <p className="card-text">Comfortable and spacious for your needs.</p>
                                    <button className="btn btn-light m-2"><a href="https://wa.me/+919699614964" target="_blank" rel="noopener noreferrer">Contact to Owner</a></button>
                                    <button className="btn btn-light">
                                        <a href="tel:+919699614964">Call To Owner</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-2">
                            <div className="card">
                                <img src="img/roomrent8.jpg" className="card-img-top" alt="Room 6" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Room 11</h5>
                                    <p className="card-text">A perfect getaway room.</p>
                                    <button className="btn btn-light m-2"><a href="https://wa.me/+919699614964" target="_blank" rel="noopener noreferrer">Contact to Owner</a></button>
                                    <button className="btn btn-light">
                                        <a href="tel:+919699614964">Call To Owner</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-2">
                            <div className="card">
                                <img src="img/roomrent9.jpg" className="card-img-top" alt="Room 6" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Room 12</h5>
                                    <p className="card-text">A perfect getaway room.</p>
                                    <button className="btn btn-light m-2"><a href="https://wa.me/+919699614964" target="_blank" rel="noopener noreferrer">Contact to Owner</a></button>
                                    <button className="btn btn-light">
                                        <a href="tel:+919699614964">Call To Owner</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Booking;
