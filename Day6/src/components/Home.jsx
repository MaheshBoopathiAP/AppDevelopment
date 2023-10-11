import  { useState } from 'react';
import backgroundImage from '../assets/images/bg.jpeg';
import Footer from './Footer';
import Header from './Navbar';
import '../assets/css/home.css';
import { useNavigate } from 'react-router-dom';
import { useSelector} from 'react-redux'
import { selectUser } from '../redux/userSlice'




function Home() {

  const user = useSelector(selectUser); 
  const username = user.username;



  
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const wrapperStyle = {
    background: `url(${backgroundImage}) center/cover no-repeat fixed`,
    minHeight: '100vh', // Ensure the background covers the entire viewport height
    position: 'relative', // Add relative positioning to the wrapper
  };

  const contentStyle = {
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    position: 'relative', // Add relative positioning to the content
    zIndex: '1', // Set a higher z-index to make it appear above the Header
  };

  
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };


  return (
    <div className="wrapper" style={wrapperStyle}>
      <div className={`content ${isSidebarOpen ? 'shifted' : ''}`} style={contentStyle}>
        <Header toggleSidebar={toggleSidebar} />
        <div className='container' id='homec'>
          <div className='d-flex flex-column'>
          <div className='p-2'>
         <h1 > Welcome to Smaag Inventory , {username}</h1>
         </div>
         <div className='p-2 d-flex justify-content-center'>
          <div>
         <button type="button" className="btn btn-primary btn-lg fs-4"  onClick={()=>{navigate("/products")}} style={{fontFamily:"cursive"}}>
          Manage Products
        </button>
        </div>
        </div>
        </div>  
        </div>
       
      </div>

      <Footer />
    </div>
  );
}

export default Home;
