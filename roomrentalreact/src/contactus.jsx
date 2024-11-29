import React, { useState } from 'react';  
import "./contactus.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState(""); 
  const [errorMessage, setErrorMessage] = useState(""); 

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const contentType = response.headers.get('content-type');
      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = { message: await response.text() };
      }

      console.log('Success:', data);
      setSuccessMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while submitting the form.');
    }
  }

  return (
    <>
      <div className="container mt-5">
        <h3 className="section-title text-center">Get in Touch With Us...</h3>
        <div className="row">
          <div className="col-md-6">
            <form className="mb-5" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  placeholder="Enter your full name" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  placeholder="Enter your email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea 
                  className="form-control" 
                  id="message" 
                  rows="5" 
                  placeholder="Enter your message" 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Submit</button>
              {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </form>
          </div>

          <div className="col-md-6">
            <div className="contact-info-map">
              <iframe title="Google Map of Ahmednagar"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60321.736105039476!2d74.72164697724608!3d19.102895208472386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb05d46788921%3A0x6677e92c1a5181b6!2sAhmednagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1728729067137!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>

        <div className="row">
  <div className="col-md-12 text-center ml-5 mr-5">
    <h4 className="mb-4">Frequently Asked Questions</h4>
    <div className="accordion" id="faqAccordion">

      <div className="accordion-item">
        <h2 className="accordion-header" id="faq1">
          <button className="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
            How do I reset my password?
          </button>
        </h2>
        <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="faq1"
          data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            You can reset your password by clicking on the "Forgot Password" link on the login page
            and following the instructions.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="faq2">
          <button className="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
             What payment methods are accepted?
          </button>
        </h2>
        <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="faq2"
          data-bs-parent="#faqAccordion">
          <div className="accordion-body">
          We do not take payments; you need to pay the owner.
          </div>
        </div>
      </div>
      
      <div className="accordion-item">
        <h2 className="accordion-header" id="faq3">
          <button className="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
            How can I update my profile?
          </button>
        </h2>
        <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="faq3"
          data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            To update your profile, go to your login account and click on the "Update Profile" section.
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

        </div>
    </>
  );
}

export default Contact;
