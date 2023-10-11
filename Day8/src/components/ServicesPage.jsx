
import backgroundImage from '../assets/images/bg.jpeg';
import Header from './Navbar';
import Footer from './Footer';

function ServicesPage() {
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
            <h1 className="display-4 text-center mb-3">Our Smaag Services</h1>
            <p className="lead text-center mt-3">
              Explore the range of agricultural equipment and small hardware items we offer.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 g-5">
            <h2>Tractors</h2>
            <p>
              High-quality tractors for all your farming needs.
            </p>
          </div>
          <div className="col-md-6 g-5">
            <h2>Harvesters</h2>
            <p>
              Efficient harvesters to streamline your crop harvesting process.
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 g-5">
            <h2>Irrigation Systems</h2>
            <p>
              Advanced irrigation systems for optimal water management.
            </p>
          </div>
          <div className="col-md-6 g-5">
            <h2>Plowing and Cultivation</h2>
            <p>
              Implements for plowing and cultivation to prepare your fields.
            </p>
          </div>
        </div>

        {/* Small Hardware Items Section */}
        <div className="row mt-4">
          <div className="col-md-6 g-5">
            <h2>Small Hardware Items</h2>
            <p>
              Browse our selection of small hardware items, including fasteners, tools, and more.
            </p>
          </div>
          <div className="col-md-6 g-5">
            <h2>Planting Machinery</h2>
            <p>
              Machinery for precise planting and seeding.
            </p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default ServicesPage;
