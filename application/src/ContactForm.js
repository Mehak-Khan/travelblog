import React, { useState } from 'react';
import Hamburger from './Hamburger';

function ContactForm() {
  // Set up state to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(''); // To display submission status

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      // Use Formspree's POST endpoint for form submission
      const response = await fetch('https://formspree.io/f/xzzpvlzr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('Thank you for your message!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setStatus('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Network error. Please try again.');
    }
  };

  return (
    <body id="contact-page">
      <div className = 'main'>
     <Hamburger/>
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
      {status && <p>{status}</p>}
    </div>
    </div>
    </body>
  );
}

export default ContactForm;
