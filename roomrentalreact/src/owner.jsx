import React, { Component } from "react";
import "./owner.css";

class Owner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [
        {
          id: 1,
          title: "Modern Single Room",
          price: 600,
          place: "Ahilyanagar",
          availabilityDate: "Available Now",
        },
        {
          id: 2,
          title: "Luxury Suite",
          price: 1200,
          place: "Tarakpur",
          availabilityDate: "Available from Dec 1",
        },
      ],
      editListing: null,
      newListing: {
        title: "",
        price: "",
        place: "",
        availabilityDate: "",
      },
    };
  }

  handleDelete = (id) => {
    const updatedListings = this.state.listings.filter(
      (listing) => listing.id !== id
    );
    this.setState({ listings: updatedListings });
  };

  handleEdit = (listing) => {
    this.setState({ editListing: { ...listing } });
    const modal = new window.bootstrap.Modal(document.getElementById("editModal"));
    modal.show();
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    const targetListing = this.state.editListing
      ? "editListing"
      : "newListing";
    this.setState((prevState) => ({
      [targetListing]: {
        ...prevState[targetListing],
        [name]: value,
      },
    }));
  };

  handleSaveEdit = () => {
    const { editListing, listings } = this.state;
    const updatedListings = listings.map((listing) =>
      listing.id === editListing.id ? editListing : listing
    );
    this.setState({ listings: updatedListings, editListing: null });
    const modal = window.bootstrap.Modal.getInstance(
      document.getElementById("editModal")
    );
    modal.hide();
  };

  handleAddListing = (e) => {
    e.preventDefault();
    const { newListing, listings } = this.state;
    const newId = listings.length
      ? Math.max(...listings.map((l) => l.id)) + 1
      : 1;
    const listingToAdd = { ...newListing, id: newId };
    this.setState({
      listings: [...listings, listingToAdd],
      newListing: { title: "", price: "", place: "", availabilityDate: "" },
    });
  };

  calculateTotalEarnings = () => {
    return this.state.listings.reduce((sum, listing) => sum + listing.price, 0);
  };

  render() {
    const { listings, editListing, newListing } = this.state;

    return (
      <>
        <div className="container mt-3">
          <h2 className="text-center mb-5">Property Owner Portal</h2>

          <div className="card mb-4">
            <div className="card-header bg-primary text-white">
              <h4>Add a Listing</h4>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleAddListing}>
                <div className="row mb-3">
                  <div className="col-md-6">
                  <label htmlFor="roomImage" className="form-label">
      Room Image
    </label>
    <input
      type="file"
      className="form-control"
      id="roomImage"
      name="image"
      onChange={this.handleChange}
    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="roomPrice" className="form-label">
                      Price (per month)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="roomPrice"
                      name="price"
                      value={newListing.price}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="roomArea" className="form-label">
                      Place (Area)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="roomArea"
                      name="place"
                      value={newListing.place}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="availabilityDate" className="form-label">
                      Availability Date
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="availabilityDate"
                      name="availabilityDate"
                      value={newListing.availabilityDate}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="submit-container">
                  <button type="submit" className="btn btn-success">
                    Submit Listing
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-header bg-secondary text-white">
              <h4>Manage Listings</h4>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Room Title</th>
                    <th>Price</th>
                    <th>Place</th>
                    <th>Availability Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {listings.map((listing) => (
                    <tr key={listing.id}>
                      <td>{listing.title}</td>
                      <td>${listing.price}/month</td>
                      <td>{listing.place}</td>
                      <td>{listing.availabilityDate}</td>
                      <td>
                        
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h5 className="mt-4">
                Total Monthly Earnings: ${this.calculateTotalEarnings()}
              </h5>
            </div>
          </div>
        </div>

        {editListing && (
          <div
            className="modal fade"
            id="editModal"
            tabIndex="-1"
            aria-labelledby="editModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="editModalLabel">
                    Edit Listing
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="editTitle" className="form-label">
                      Room Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="editTitle"
                      name="title"
                      value={editListing.title}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="editPrice" className="form-label">
                      Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="editPrice"
                      name="price"
                      value={editListing.price}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="editPlace" className="form-label">
                      Place
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="editPlace"
                      name="place"
                      value={editListing.place}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="editDate" className="form-label">
                      Availability Date
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="editDate"
                      name="availabilityDate"
                      value={editListing.availabilityDate}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.handleSaveEdit}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Owner;
