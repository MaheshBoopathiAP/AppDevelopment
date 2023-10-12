import './assets/css/custom.css'

import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/dropdown';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from './components/Signup';
import { Provider } from "react-redux";
import store from "./redux/Store";
import AboutPage from "./components/About";
import ServicesPage from "./components/ServicesPage";
import ContactPage from "./components/ContactPage";
import DashboardPage from "./components/DashboardPage";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import FAQPage from './components/FAQPage';
import TermsConditions from './components/TermsConditions';
import PrivacyPolicy from './components/privacypolicy';
import Feedback from './components/Feedback';


function App() {
  return (
    <div>
      <Provider store={store}> 
      <BrowserRouter>
      <Routes>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/products' element={<Products/>}/>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/navbar' element={<Navbar/>}/>
        <Route exact path='/about' element={<AboutPage/>}/>
        <Route exact path='/service' element={<ServicesPage/>}/>
        <Route exact path='/contact' element={<ContactPage/>}/>
        <Route exact path='/dashboard' element={<DashboardPage/>}/>
        <Route exact path='/addproduct' element={<AddProduct/>}/>
        <Route exact path='/editproduct' element={<EditProduct/>}/>
        <Route exact path='/faq' element={<FAQPage/>}/>
        <Route exact path='/terms' element={<TermsConditions/>}/>
        <Route exact path='/privacy' element={<PrivacyPolicy/>}/>
        <Route exact path='/feedback' element={<Feedback/>}/>
      </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App