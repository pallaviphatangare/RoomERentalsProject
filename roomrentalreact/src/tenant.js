import React, { useState } from 'react';

function Tenant() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferences, setPreferences] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tenant = { name, email, phone, preferences };

    try {
      const response = await fetch('http://localhost:8080/tenants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tenant),
      });

      if (response.ok) {
        console.log('Tenant saved successfully');
        alert('Profile updated successfully');
      } else {
        console.error('Failed to save tenant');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handlePreferencesChange = (e) => setPreferences(e.target.value);


}