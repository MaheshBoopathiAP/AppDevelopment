import React, { useState } from 'react';
import Header from './Navbar';
import Footer from './Footer';
import backgroundImage from '../assets/images/bg.jpeg';

function AddProduct() {
  // Initialize state for product details
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImageUrl, setProductImageUrl] = useState('');
  const [productStocks, setProductStocks] = useState(0);
  const [productPrice, setProductPrice] = useState(0);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new product object with the provided details
    const newProduct = {
      id: Math.floor(Math.random() * 1000), // Generate a unique ID (replace with a more robust solution in production)
      name: productName,
      description: productDescription,
      imageUrl: productImageUrl,
      stocks: productStocks,
      price: productPrice,
    };
    
    if(productName.length>0 && productDescription.length>0 && productImageUrl.length>0 && productStocks>0 && productPrice>0){
     alert("Product Added Successfully");
    }

    // You can handle adding the new product to your data store (e.g., Redux or a database) here

    // Clear the form fields after submission
    setProductName('');
    setProductDescription('');
    setProductImageUrl('');
    setProductStocks(0);
    setProductPrice(0);
  };


  // Style for the form section with a transparent background
  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Adjust the alpha value as needed
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };
  const wrapperT={
    background: `url(${backgroundImage}) center/cover no-repeat fixed`,
    minHeight: '100vh',
  }

  return (
    <>
    <div className="wrapper" style={wrapperT}>
    
      <Header />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-center mb-3">Add New Product</h1>
          </div>
        </div>

        {/* Product Form */}
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit} style={contentStyle}>
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">Product Name</label>
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
                <label htmlFor="productDescription" className="form-label">Product Description</label>
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
                <label htmlFor="productImageUrl" className="form-label">Image URL</label>
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
                <label htmlFor="productStocks" className="form-label">Stocks Available</label>
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
                <label htmlFor="productPrice" className="form-label">Price (in ₹)</label>
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
                <button type="submit" className="btn btn-primary">Add Product</button>
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

export default AddProduct;
