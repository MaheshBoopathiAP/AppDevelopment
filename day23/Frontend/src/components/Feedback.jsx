import React, { useState } from 'react';
import Header from './Navbar';
import Footer from './Footer';
import backgroundImage from '../assets/images/bg.jpeg';

function Feedback() {
  // Initialize state for feedback details
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  // Function to handle feedback submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a feedback object with the provided details
    const feedbackData = {
      name,
      email,
      feedback,
    };

    // You can handle submitting the feedbackData to your backend or data store here
    // For this example, we'll simply log it to the console
    console.log('Feedback submitted:', feedbackData);

    // Show a confirmation message to the user
    alert('Thank you for your feedback!');

    // Clear the form fields after submission
    setName('');
    setEmail('');
    setFeedback('');
  };

  // Style for the form section with a transparent background
  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Adjust the alpha value as needed
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  const wrapperStyle = {
    background: `url(${backgroundImage}) center/cover no-repeat fixed`,
    minHeight: '100vh',
  };

  return (
    <>
      <div className="wrapper" style={wrapperStyle}>
        <Header />
        <div className="container my-5">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center mb-3">Feedback</h1>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form onSubmit={handleSubmit} style={contentStyle}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="feedback" className="form-label">Your Feedback</label>
                  <textarea
                    className="form-control"
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows="6"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit Feedback</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Feedback;
