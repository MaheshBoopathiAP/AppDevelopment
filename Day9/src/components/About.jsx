import backgroundImage from '../assets/images/bg.jpeg';
import Header from './Navbar';
import Footer from './Footer';

function AboutPage() {
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
            <h1 className="display-4 text-center mb-3">About Our Smaag</h1>
            <p className="lead text-center mt-3">
              Welcome to Smaag Enterprises, your trusted source for high-quality agricultural equipment.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 g-5">
            <h2>Our Story</h2>
            <p>
              Smaag was founded with a passion for agriculture and a commitment to
              providing farmers with the best equipment available. Our journey began in 2021
              when Mahesh started the business from Coimbatore. Since then, we have
              grown into a leading provider of agricultural equipment in the region.
            </p>
          </div>
          <div className="col-md-6 g-5">
            <h2>Our Mission</h2>
            <p>
              Our mission is to empower farmers with reliable and efficient agricultural
              equipment that enhances productivity and ensures sustainable farming practices.
              We strive to offer a wide range of products that cater to the diverse needs of
              our customers while maintaining the highest standards of quality and service.
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 g-5">
            <h2>Our Values</h2>
            <ul>
              <li>Quality: We believe in delivering products that meet or exceed industry standards.</li>
              <li>Customer-Centric: Our customers satisfaction is our top priority.</li>
              <li>Sustainability: We promote environmentally responsible farming practices.</li>
              <li>Innovation: We stay updated with the latest advancements in agricultural technology.</li>
              <li>Community: We support and engage with the agricultural community.</li>
            </ul>
          </div>
          <div className="col-md-6 g-5">
            <h2>Our Team</h2>
            <p>
              At Smaag Enterprises, our team consists of dedicated professionals who share a
              passion for agriculture. Our experts are always ready to assist you in selecting
              the right equipment, providing technical support, and addressing any inquiries
              you may have.
            </p>
          </div>
        </div>
        
        {/* Additional Content Here */}
        <div className="row mt-4">
          <div className="col-md-12">
            <h2>Our Awards</h2>
            <p>
              Smaag Enterprises has received numerous awards for excellence in the field of agriculture.
            </p>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
