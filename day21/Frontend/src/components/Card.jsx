import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function DashboardCard() {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'http://localhost:8082/api/dashboard/all';

    // Make an Axios GET request to fetch data from the backend
    axios
      .get(apiUrl)
      .then((response) => {
        // Set the fetched data to the state
        setDashboardData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="row mt-4">
      <div className="col-12 col-lg-12">
        <div className="card">
          <div className="card-header">Dashboard</div>
          <div className="card-body">
            {dashboardData ? (
              <div>
                <h3>Total Products Transferred: {dashboardData.length}</h3>
                {/* Assuming the response contains an array of products */}
                <table className="table">
                  <thead>
                    <tr>
                      <th className='text-center'>ID</th>
                      <th className='text-center'>Product Name</th>
                      <th className='text-center'>Receiver</th>
                      <th className='text-center'>Quantity</th>
                      <th className='text-center'>Date</th>
                      <th className='text-center'>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dashboardData.map((item) => (
                      <tr key={item.id}>
                        <td className='text-center'>{item.id}</td>
                        <td className='text-center'>{item.pname}</td>
                        <td className='text-center'>{item.name}</td>
                        <td className='text-center'>{item.totalProducts}</td>
                        <td className='text-center'>{item.date}</td>
                        <td className='px-2 text-center'>
                          <FontAwesomeIcon icon={faCheckCircle} color="green" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
