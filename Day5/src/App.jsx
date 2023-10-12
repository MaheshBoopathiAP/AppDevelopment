import Home from "./components/Home"
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


function App() {
  return (
    <div>
      <Provider store={store}> 
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/about' element={<AboutPage/>}/>
        <Route exact path='/service' element={<ServicesPage/>}/>
        <Route exact path='/contact' element={<ContactPage/>}/>
        <Route exact path='/dashboard' element={<DashboardPage/>}/>
      </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App