import React, { useState } from 'react';
import axios from 'axios';
import Header from './Navbar';
import Footer from './Footer';
import backgroundImage from '../assets/images/bg.jpeg';

function TransferProductForm() {
  const [formData, setFormData] = useState({
    name: '', // Change 'receiver' to 'name'
    totalProducts: 0,
    date: '',
    pname: '', // Include pname field
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTransferData = {
      name: formData.name, // Change 'receiver' to 'name'
      totalProducts: formData.totalProducts,
      date: formData.date,
      pname: formData.pname,
    };

    try {
      // Send a POST request to your backend to save the data
      const response = await axios.post('http://localhost:8082/api/dashboard/add', newTransferData);
      console.log('Data saved:', response.data);

      // Clear the form
      setFormData({
        name: '', // Change 'receiver' to 'name'
        totalProducts: 0,
        date: '',
        pname: '',
      });
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  const wrapperStyle = {
    background: `url(${backgroundImage}) center/cover no-repeat fixed`,
    minHeight: '100vh',
  };

  return (
    <>
      <div className="wrapper" style={wrapperStyle}>
        <Header />
        <div className="container my-5">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center mb-3">Transfer Product Data</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form onSubmit={handleSubmit} style={contentStyle}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Receiver
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="totalProducts" className="form-label">
                    Total Products
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="totalProducts"
                    value={formData.totalProducts}
                    onChange={(e) => setFormData({ ...formData, totalProducts: parseInt(e.target.value) })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pname" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pname"
                    value={formData.pname}
                    onChange={(e) => setFormData({ ...formData, pname: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">
                    Date
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Transfer Data
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

export default TransferProductForm;
