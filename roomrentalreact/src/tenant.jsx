import React, { Component } from 'react';
import './tenant.css'; 
import './logout.jsx';
class Tenant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      preferences: '',
    };

    this.cancelBooking = this.cancelBooking.bind(this);
    this.removeListing = this.removeListing.bind(this);
    this.bookNow = this.bookNow.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  cancelBooking(room) {
    alert(`Booking for ${room} has been canceled.`);
  }

  removeListing(room) {
    alert(`Listing for ${room} has been removed.`);
  }

  bookNow(room) {
    alert(`Booking for ${room} is now complete.`);

  }

  handleInputChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert('Profile updated!');
  }

  render() {
    return (
      <div className="container mt-5">
        <h2 className="text-center mb-5 text-primary">Tenant Dashboard</h2>
        <div className="card mb-5">
          <div className="card-header bg-primary text-white">
            <h4>My Bookings</h4> 
          </div>
          <div className="card-body">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Room Title</th>
                  <th>Price</th>
                  <th>Booking Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Luxury Suite</td>
                  <td>$1200/month</td>
                  <td>Oct 1, 2024</td>
                  <td className="text-success">Confirmed</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => this.cancelBooking('Luxury Suite')}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Modern Single Room</td>
                  <td>$600/month</td>
                  <td>Nov 10, 2024</td>
                  <td className="text-warning">Pending</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => this.cancelBooking('Modern Single Room')}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card mb-5">
          <div className="card-header bg-secondary text-white">
            <h4>Favorite Listings</h4>
          </div>
          <div className="card-body">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Room Title</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Spacious Double Room</td>
                  <td>$850/month</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.removeListing('Spacious Double Room')}
                    >
                      Remove
                    </button>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => this.bookNow('Spacious Double Room')}
                    >
                      Book Now
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Luxury Suite</td>
                  <td>$1200/month</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.removeListing('Luxury Suite')}
                    >
                      Remove
                    </button>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => this.bookNow('Luxury Suite')}
                    >
                      Book Now
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row m-3">
           <button type="delete" className="btn btn-success"><a href='/logout'>LogOut</a></button>
        </div>
        <div className="card mb-5">
          <div className="card-header bg-success text-white">
            <h4>Profile Management</h4>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="userName" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your full name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="userEmail" className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email address"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="userPhone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Enter your phone number"
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="userPreferences" className="form-label">Preferences</label>
                  <input
                    type="text"
                    className="form-control"
                    id="preferences"
                    placeholder="Enter your room preferences"
                    value={this.state.preferences}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="form-footer">
                <button type="submit" className="btn btn-success">Update Profile</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Tenant;
