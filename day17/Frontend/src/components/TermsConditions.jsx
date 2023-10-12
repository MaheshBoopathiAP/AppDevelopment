import React from 'react';
import backgroundImage from '../assets/images/bg.jpeg';
import Header from './Navbar';
import Footer from './Footer';

function TermsConditions() {
  const wrapperStyle = {
    background: `url(${backgroundImage}) center/cover no-repeat fixed`,
    minHeight: '100vh', // Ensure the background covers the entire viewport height
  };

  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Add a semi-transparent white background
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div className="wrapper" style={wrapperStyle}>
      <Header />
      <div className="container my-5" style={contentStyle}>
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-center mb-3">Terms and Conditions</h1>
            <p className="lead text-center mt-3">
              Effective Date: 14.12.2023
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h2>Acceptance of Terms</h2>
            <p>
              By using this website, you agree to these terms and conditions. If you do not agree with any part of these terms, please do not use the website.
            </p>

            <h2>Registration</h2>
            <p>
              In order to access certain features of the website, you may be required to register. You are responsible for maintaining the confidentiality of your account information.
            </p>

            <h2>Use of the Website</h2>
            <p>
              You agree to use the website for lawful purposes only. You may not use the website for any illegal or unauthorized purpose.
            </p>

            <h2>Content</h2>
            <p>
              All content on the website is for informational purposes only. We make no warranties or representations about the accuracy or completeness of the content.
            </p>

            <h2>Privacy</h2>
            <p>
              We collect, use, and disclose your personal information as described in our Privacy Policy.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              We are not liable for any damages, including but not limited to, direct or indirect, special, incidental, or consequential damages.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction].
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We may update these terms and conditions at any time. Your continued use of the website after changes are posted constitutes your acceptance of the updated terms.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about these terms and conditions, please contact us at [Your Contact Information].
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TermsConditions;
