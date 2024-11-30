import React, { useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar.jsx';
import Home from './home.jsx';
import About from './about.jsx';
import Profile from './profile.jsx';
import Booking from './booking.jsx';
import Contact from './contactus.jsx';
import Footer from './footer.jsx';
import Tenant from './tenant.jsx';
import Owner from './owner.jsx';
import Logout from './logout.jsx';
import Login from './login.jsx';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home users={users} />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tenant" element={<Tenant />} /> 
        <Route path="/owner" element={<Owner />} /> 
        <Route path="/logout" element={<Logout />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/booking" element={<Booking />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
