import React from 'react';
import backgroundImage from '../assets/images/bg.jpeg';
import Header from './Navbar';
import Footer from './Footer';

function PrivacyPolicy() {
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
            <h1 className="display-4 text-center mb-3">Privacy Policy</h1>
            <p className="lead text-center mt-3">
              Effective Date: 14.12.2023
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Smaag's Privacy Policy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our website and services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We may collect both personal and non-personal information from you. Personal information may include but is not limited to your name, email address, contact information, and any other information you provide. Non-personal information may include browser type, IP address, and usage data.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>
              We may use your information for various purposes, including but not limited to providing and improving our services, responding to your inquiries, sending you updates and marketing materials, and ensuring the security of our website.
            </p>

            <h2>4. Information Sharing</h2>
            <p>
              We may share your information with trusted third parties for specific purposes, such as payment processing or analytics. We will not sell, rent, or disclose your information to third parties for their marketing purposes.
            </p>

            <h2>5. Cookies and Tracking Technologies</h2>
            <p>
              We may use cookies and similar tracking technologies to enhance your browsing experience on our website. You can manage your cookie preferences through your browser settings.
            </p>

            <h2>6. Security</h2>
            <p>
              We take reasonable measures to protect your personal information from unauthorized access and disclosure. However, no method of transmission over the internet or electronic storage is entirely secure.
            </p>

            <h2>7. Your Choices</h2>
            <p>
              You have the right to access, update, or delete your personal information. You can also opt-out of receiving marketing communications from us.
            </p>

            <h2>8. Changes to this Privacy Policy</h2>
            <p>
              We may update this Privacy Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please review this policy periodically.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us at [Your Contact Information].
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
