
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
function DashboardCard() {


  return (

    <div className="row">
      <div className="col-12 col-lg-12 col-xl-12">
        {/* Existing content */}
        <div className="card mt-3">
          <div className="card-content">
            <div className="row row-group m-0">
              <div className="col-12 col-lg-12 col-xl-6 border-light">
                <div className="card-body">
                  <h5 className=" mb-0">Total Products Sold <span className="float-right px-3"><h4 className="mt-3 mb-0"> 450</h4></span></h5>
                  <div className="progress my-1" style={{ height: '3px' }}>
                    <div className="progress-bar" style={{ width: '55%' }}></div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-12 col-xl-6 border-light">
                <div className="card-body">
                  <h5 className=" mb-0">Total Amount Received<span className="float-right px-3 "><h4 className="mt-3 mb-0">₹ 5,15,000</h4></span></h5>
                  <div className="progress my-1" style={{ height: '3px' }}>
                    <div className="progress-bar" style={{ width: '55%' }}></div>
                  </div>
                </div>
              </div>
              </div>
              </div>
              </div>
              <div className="card mt-3">
          <div className="card-content">
            <div className="row row-group m-0">
              <div className="col-12 col-lg-12 col-xl-6 border-light">
                <div className="card-body">
                  <h5 className=" mb-0">Products Transferred  <span className="float-right px-3"><h4 className="mt-3 mb-0"> 190</h4></span></h5>
                  <div className="progress my-1" style={{ height: '3px' }}>
                    <div className="progress-bar" style={{ width: '55%' }}></div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-12 col-xl-6 border-light">
                <div className="card-body">
                  <h5 className=" mb-0">Newly Added Products <span className="float-right px-3 "><h4 className="mt-3 mb-0">610</h4></span></h5>
                  <div className="progress my-1" style={{ height: '3px' }}>
                    <div className="progress-bar" style={{ width: '55%' }}></div>
                  </div>
                </div>
              </div>
              </div>
              </div>
              </div>
              <div className="row mt-4">
      <div className="col-12 col-lg-12">
        <div className="card">
          <div className="card-header">Recent Sold Details</div>
          <div className="table-responsive">
            <table className="table align-items-center table-flush table-borderless text-center">
              <thead>
                <tr>
                  <th>Buyer</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th >Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John</td>
                  <td>PVC pipe</td>
                  <td>₹ 1500.00</td>
                  <td>28 May 2017</td>
                  <td className='text-center'>
                  <FontAwesomeIcon icon={faCheckCircle} className="success-icon" /> 
                  </td>
                </tr>

                <tr>
                  <td>Ramesh</td>
                  <td>Ropes</td>
                  <td>₹ 2500.00</td>
                  <td>10 June 2017</td>
                  <td className='text-center'>
                  <FontAwesomeIcon icon={faCheckCircle} className="success-icon" /> 
                  </td>
                </tr>

                <tr>
                  <td>Kumar</td>
                  <td>Tractor Spares</td>
                  <td>₹ 5200.00</td>
                  <td>10 July 2017</td>
                  <td className='text-center'>
                  <FontAwesomeIcon icon={faCheckCircle} className="success-icon" /> 
                  </td>
                </tr>

                <tr>
                  <td>Aakash</td>
                  <td>Gate Valve</td>
                  <td>₹ 3000.00</td>
                  <td>28 July 2017</td>
                  <td className='text-center'>
                  <FontAwesomeIcon icon={faCheckCircle} className="success-icon" /> 
                  </td>
                </tr>

                <tr>
                  <td>Balaji</td>
                  <td>wires</td>
                  <td>₹ 7600.00</td>
                  <td>01 Aug 2017</td>
                  <td className='text-center'>
                  <FontAwesomeIcon icon={faCheckCircle} className="success-icon" /> 
                  </td>
                </tr>

                <tr>
                  <td>Hari</td>
                  <td>clamps</td>
                  <td>$ 2800.00</td>
                  <td>09 Aug 2017</td>
                  <td className='text-center'>
                  <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />                  </td>
                </tr>
              </tbody>
            </table>
        
      
      
    </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
   
  );
}

export default DashboardCard;
