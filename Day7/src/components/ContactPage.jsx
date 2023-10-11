
import backgroundImage from '../assets/images/bg.jpeg';
import Header from './Navbar';
import Footer from './Footer';

function ContactPage() {
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
            <h1 className="display-4 text-center mb-3">Support</h1>
            <p className="lead text-center mt-3">
              Get in touch with us for inquiries and support.
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 g-5">
            <h2>Contact Information</h2>
            <p>
              <strong>Address:</strong> 123 Main Street, Coimbatore
            </p>
            <p>
              <strong>Email:</strong> info@example.com
            </p>
            <p>
              <strong>Phone:</strong> +97155678945
            </p>
            <p>
              <strong>Fax:</strong> +98234567856
            </p>
          </div>
          <div className="col-md-6 g-5">
            <h2>Contact Form</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
