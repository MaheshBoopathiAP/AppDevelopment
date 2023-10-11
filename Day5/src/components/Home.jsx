import backgroundImage from '../assets/images/bg.jpeg';
import Footer from './Footer';
import Header from './Header';
import { useSelector } from 'react-redux';
import '../assets/css/home.css';

function Home() {
  const featuredProducts = useSelector((state) => state.featuredProducts.products);

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

  // CSS style for aligning card images
  const cardImageStyle = {
    objectFit: 'cover', // This ensures the image covers the entire card
    objectPosition: 'center center', // Center the image within the card
    maxHeight: '100%', // Maintain the aspect ratio, adjust as needed
    maxWidth: '100%', // Maintain the aspect ratio, adjust as needed
  };

  return (
    <div className="wrapper" style={wrapperStyle}>
      <Header />

      <div className="container my-5" style={contentStyle}>
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-center mb-3">Products</h1>
          </div>
        </div>

        <div className="row">
          {featuredProducts.map((product) => (
            <div className="col-md-3 mb-3" key={product.id} >
              <div className="card">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="card-img-top"
                  style={cardImageStyle} // Apply alignment styles here
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
