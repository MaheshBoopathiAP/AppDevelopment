
import './assets/css/custom.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import AboutPage from './components/About';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import DashboardPage from './components/DashboardPage';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import FAQPage from './components/FAQPage';
import TermsConditions from './components/TermsConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import Feedback from './components/Feedback';
import store from './redux/store';
import Register from './components/Signup';
import SignUp from './components/Signup';
import TransferProductForm from './components/TransferProductForm';
import MessagesPage from './components/MessagePage';

function App() {
  const currentUser = useSelector((state) => state.auth.user);

  return (
   
      <Router>
        <div>
          
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/dashboard" element={<DashboardPage />} /> 
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/editproduct" element={<EditProduct />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/transfer" element={<TransferProductForm/>} />
            <Route path="/msg" element={<MessagesPage/>} />

            <Route
            path="/editproduct/:productId" // Define a dynamic parameter
            element={<EditProduct />}
          />
          </Routes>
        </div>
      </Router>
   
  );
}

export default App;

