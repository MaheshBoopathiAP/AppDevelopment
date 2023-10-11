import backgroundImage from '../assets/images/bg.jpeg';
import Header from './Navbar';
import Footer from './Footer';
import DashboardCard from  './Card'; // Import the DashboardCard component

function DashboardPage() {
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
            <h1 className="display-4 text-center mb-3">Dashboard</h1>
            <p className="lead text-center mt-3">
              Welcome to your dashboard.
            </p>
          </div>
        </div>

        {/* Include the first DashboardCard component with custom props */}
        <DashboardCard
          title="Total Receivable Amount"
          amount="₹ 25800"
          progressBarWidth="55%"
        />

        
        
      </div>
      <Footer />
    </div>
  );
}

export default DashboardPage;
