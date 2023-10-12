import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/images/bg.jpeg';
import Footer from './Footer';
import { Link } from 'react-router-dom'; // Import Link
import Header from './Navbar'
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { fetchAllProducts, deleteProduct } from '../slices/product';

function Products() {
  const featuredProducts = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [featuredProduct, setFeaturedProduct] = useState(null);
  const [isDeleteConfirmationVisible, setDeleteConfirmationVisible] = useState(false);

  const wrapperStyle = {
    background: `url(${backgroundImage}) center/cover no-repeat fixed`,
    minHeight: '100vh',
    position: 'relative',
  };
  const blurBackgroundStyle = {
    filter: isDeleteConfirmationVisible ? 'blur(5px)' : 'none',
    transition: 'filter 0.3s',
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

  const handleDeleteProduct = () => {
    if (featuredProduct) {
      setDeleteConfirmationVisible(true);
    }
  };

  const confirmDelete = () => {
    dispatch(deleteProduct(featuredProduct.id));
    handleCloseModal();
    setDeleteConfirmationVisible(false);
  };



  const cancelDelete = () => {
    setDeleteConfirmationVisible(false);
  };

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleOpenModal = (product) => {
    setFeaturedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setFeaturedProduct(null);
    setShowModal(false);
  };

  return (
    <div className="wrapper" style={wrapperStyle}>
      <div className={`content ${isSidebarOpen ? 'shifted' : ''}`} style={contentStyle}>
        <Header/>
        <div className="container-fluid mx-1 col-12" style={blurBackgroundStyle}>
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center mb-3">Products</h1>
            </div>
          </div>

          <div className="row">
            {featuredProducts.map((product) => (
              <div className="col-md-3 mb-3" key={product.id}>
                <div className="card h-100" onClick={() => handleOpenModal(product)} style={{ cursor: "pointer" }}>
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

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        dialogClassName="modal-xl"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="row">
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
              <div className="col-lg-6">
                {featuredProduct && (
                  <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h2>{featuredProduct.name}</h2>
                    <h4>Available Stocks: {featuredProduct.stocks}</h4>
                    <p className='mt-3'>{featuredProduct.description}</p>
                    <h3 className='mt-3'>Price: ₹ {featuredProduct.price}</h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
        <Link to="/transfer" className="btn btn-primary mx-2">
          Transfer
        </Link>

        {featuredProduct && (
            <Link to={`/editproduct/${featuredProduct.id}`} className="btn btn-primary mx-2">
              Edit
            </Link>
          )}
          <Button variant="danger" className='mx-2' onClick={handleDeleteProduct}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={isDeleteConfirmationVisible} onHide={cancelDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this product?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </div>
  );
}

export default Products;
