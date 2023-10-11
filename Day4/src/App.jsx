import React from 'react'
import Login from './Components/Forms/LoginPage.jsx';
import SignUp from './Components/Forms/SignUp.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App