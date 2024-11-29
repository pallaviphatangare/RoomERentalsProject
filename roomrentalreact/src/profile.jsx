import React, { useState } from 'react';
import './profile.css';

function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { name, email, phone, password };
    console.log('Sending user:', user); 

    try {
        const response = await fetch('http://localhost:8080/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            console.log('Profile saved successfully');
            setName('');
            setEmail('');
            setPhone('');
            setPassword('');
        } else {
            const errorMessage = await response.text(); 
            console.error('Failed to save profile:', errorMessage);
        }
    } catch (error) {
        console.error('Error during fetch:', error);
    }
};


  return (
    <div className="profile-container col-md-9">
      <h1>Create Your Profile</h1>
      <form id="profileForm" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          required
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter Phone Number"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          required
        />
        <br />
        <button type="submit" className="btn btn-primary p-2">Create Profile</button>
      </form>
    </div>
  );
}

export default Profile;
