// src/pages/Contact/index.jsx
import React from 'react';
import './Newsletter.css'; 

const Newsletter = ({  }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form Submitted');
  };

  return (
    <section id="contact" className="contact">
     <div className={"container " }>
          <div className="position-relative d-flex text-center mb-5">
           
          <h2
            className={
              "text-24   fw-600 w-100 mb-0 " 
            }
          >
            Pour Decision News
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " 
            }
          >
            SUBSCRIBE
            <span className="heading-separator-line  d-block mx-auto" />
          </p>
       
      </div>

      <br></br>

      <form onSubmit={handleSubmit}>
      <div className="button-group text-center mb-6">
        </div>
          {/* Name Fields */}
          <div className="row mb-3">
            <div className="row mb-3">
              <input type="text" className="form-control .input-custom" id="firstName" placeholder="First Name" required />
            </div>
            <div className="row mb-3">
              <input type="text" className="form-control .input-custom" id="lastName" placeholder="Last Name" required />
            </div>
          </div>

          {/* Email & Occupation Fields */}
          <div className="row mb-3">
            <div className="row mb-3">
              <input type="email" className="form-control .input-custom" id="email" placeholder="Email" required />
            </div>
            <div className="row mb-3">
              <input type="text" className="form-control .input-custom" id="occupationLocation" placeholder="Occupation & Location" required />
            </div>
          </div>

          {/* Message/Topic Textarea */}
          <div className="row mb-3">
            <textarea className="form-control .input-custom" id="message" rows="5" placeholder="Message/Topic" required></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-custom">Submit</button>
          </div>
        </form>

        <p className="text-5 text-light mb-4">Follow us /</p>
        <div className="social-links">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-instagram"></i>
        </a>
        </div>
      </div>
    </section>
    
  );
};

export default Newsletter;
