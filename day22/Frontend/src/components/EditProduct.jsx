import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateProduct } from '../slices/product'; // Import your Redux action for updating a product
import Footer from './Footer';
import Header from './Navbar';
import backgroundImage from '../assets/images/bg.jpeg';

function EditProduct() {
  const { productId } = useParams(); // Get the product ID from the URL
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === parseInt(productId))
  );

  // Initialize state for product details with the fetched product data
  const [productName, setProductName] = useState(
    product ? product.name || '' : ''
  );
  const [productDescription, setProductDescription] = useState(
    product ? product.description || '' : ''
  );
  const [productImageUrl, setProductImageUrl] = useState(
    product ? product.imageUrl || '' : ''
  );
  const [productStocks, setProductStocks] = useState(
    product ? product.stocks || 0 : 0
  );
  const [productPrice, setProductPrice] = useState(
    product ? product.price || 0 : 0
  );

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Extract the product ID from the product object
    const productId = product.id;
  
    // Create an object with the updated product data
    const updatedProduct = {
      name: productName,
      description: productDescription,
      imageUrl: productImageUrl,
      stocks: productStocks,
      price: productPrice,
    };
  
    // Dispatch the action to update the product, passing the ID separately
    dispatch(updateProduct({ id: productId, product: updatedProduct }));
  
    // You can handle updating the product in your data store (e.g., Redux or a database) here
    console.log('Updated Product:', updatedProduct);
  };

  // Style for the form section with a transparent background
  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Adjust the alpha value as needed
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  const wrapperT = {
    background: `url(${backgroundImage}) center/cover no-repeat fixed`,
    minHeight: '100vh',
  };

  return (
    <>
      <div className="wrapper" style={wrapperT}>
        <Header />
        <div className="container my-5">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center mb-3">Edit Product</h1>
            </div>
          </div>

          {/* Product Form */}
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form onSubmit={handleSubmit} style={contentStyle}>
                <div className="mb-3">
                  <label htmlFor="productName" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productDescription" className="form-label">
                    Product Description
                  </label>
                  <textarea
                    className="form-control"
                    id="productDescription"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="productImageUrl" className="form-label">
                    Image URL
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="productImageUrl"
                    value={productImageUrl}
                    onChange={(e) => setProductImageUrl(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productStocks" className="form-label">
                    Stocks Available
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="productStocks"
                    value={productStocks}
                    onChange={(e) => setProductStocks(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productPrice" className="form-label">
                    Price (in ₹)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="productPrice"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    required
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
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

export default EditProduct;
