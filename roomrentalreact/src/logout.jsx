import React, { Component } from 'react';
import { Navigate } from 'react-router-dom'; 

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedOut: false,
    };
  }

  componentDidMount() {
    const userType = localStorage.getItem('userType');
    
    if (userType === 'tenant') {
      localStorage.removeItem('authToken');
      localStorage.removeItem('tenantData');
    } else if (userType === 'owner') {
      localStorage.removeItem('authToken');
      localStorage.removeItem('ownerData');
    }
    
    localStorage.removeItem('userType');
    this.setState({ isLoggedOut: true });
  }

  render() {
    if (this.state.isLoggedOut) {
      return <Navigate to="/login" />; 
    }

    return null;
  }
}

export default Logout;
