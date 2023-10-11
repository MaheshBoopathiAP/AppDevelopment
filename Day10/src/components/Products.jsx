import  { useState } from 'react';
import backgroundImage from '../assets/images/bg.jpeg'; // Import your background image
import Footer from './Footer';
import Header from './Navbar';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Modal from 'react-bootstrap/Modal'; // Import Bootstrap Modal component
import Button from 'react-bootstrap/Button'; // Import Bootstrap Button component

function Products() {
  const featuredProducts = useSelector((state) => state.featuredProducts.products);

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); // Add state for modal visibility
  const [featuredProduct, setFeaturedProduct] = useState(null);

  const wrapperStyle = {
    background: `url(${backgroundImage}) center/cover no-repeat fixed`,
    minHeight: '100vh',
    position: 'relative',
  };

  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    zIndex: '1',
  };

  const cardImageStyle = {
    objectFit: 'cover',
    objectPosition: 'center center',
    maxHeight: '100%',
    maxWidth: '100%',
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleOpenModal = (product) => {
    setFeaturedProduct(product);
    setShowModal(true); // Open the modal
  };

  const handleCloseModal = () => {
    setFeaturedProduct(null);
    setShowModal(false); // Close the modal
  };

  return (
    <div className="wrapper" style={wrapperStyle}>
      <div className={`content ${isSidebarOpen ? 'shifted' : ''}`} style={contentStyle}>
        <Header toggleSidebar={toggleSidebar} />

        <div className="container-fluid mx-1 col-12">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center mb-3">Products</h1>
            </div>
          </div>

          <div className="row">
  {featuredProducts.map((product) => (
    <div className="col-md-3 mb-3" key={product.id}>
      <div className="card h-100" onClick={() => handleOpenModal(product)} style={{cursor:"pointer"}}> {/* Use the 'h-100' class here */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="card-img-top"
          style={cardImageStyle}
          onClick={() => handleOpenModal(product)}
        />
        <div className="card-body d-flex flex-column"> 
        <div className='d-flex flex-row'>
          <div className='col-8'>
          <h5 className="card-title">{product.name}</h5>
          <h5 className="card-title">Stocks Available: {product.stocks}</h5>
          </div>
          <div className='col-4'>
          <h4 className="card-title ms-auto"><strong>₹{product.price}</strong> </h4>
            </div>
            </div>
          
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
      </div>

      {/* Bootstrap 5 modal for displaying product details */}
      <Modal
  show={showModal}
  onHide={handleCloseModal}
  dialogClassName="modal-xl"
  centered // Add 'centered' prop to center the modal vertically
>
  <Modal.Header closeButton>
    <Modal.Title>Product Details</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {/* Create a Bootstrap grid layout */}
    <div className="container-fluid">
      <div className="row">
        {/* Left column for the image */}
        <div className="col-lg-6">
          {featuredProduct && (
            <div className='mx-4'>
              <img
                src={featuredProduct.imageUrl}
                alt={featuredProduct.name}
                style={{ height: '300px', maxWidth: '100%', objectFit: 'contain' }}
              />
            </div>
          )}
        </div>
        {/* Right column for other details */}
        <div className="col-lg-6">
          {featuredProduct && (
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <h2>{featuredProduct.name}</h2>
              <h4>Available Stocks:{featuredProduct.stocks}</h4>
              <p >{featuredProduct.description}</p>
              <h3>Price : ₹ {featuredProduct.price}</h3>
              {/* Add more product details as needed */}
            </div>
          )}
        </div>
      </div>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" className='mx-2' onClick={handleCloseModal}>
      Increase Stocks
    </Button>
    <Button variant="danger" className='mx-2' onClick={handleCloseModal}>
      Decrease Stocks
    </Button>
    
  </Modal.Footer>
</Modal>



      <Footer />
    </div>
  );
}

export default Products;
