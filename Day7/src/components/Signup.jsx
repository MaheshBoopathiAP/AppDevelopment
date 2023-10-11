import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/images/bg.jpg';
import logo from '../assets/images/logo.png';
import {useNavigate} from 'react-router-dom'

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const navigate=useNavigate();
  const validationErrors={};

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


  if (!name.trim()) {
    validationErrors.name = "Name is required";
  }
  if (!email.trim()) {
    validationErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    validationErrors.email = "Email is not valid";
  }
 
  if (!password.trim()) {
    validationErrors.password = "Password is required";
  } else if (password.length < 6) {
    validationErrors.password = "Password should be at least 6 characters";
  }

  setErrors(validationErrors);

  if (Object.keys(validationErrors).length === 0) {
    
    navigate("/");
}
}

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight:'100vh',
    minWidth:'100vw'
  };
  return (
    <div className="container"  style={containerStyle}>
      <div className="row justify-content-center p-5">
        <div className="col-md-3 col-sm-4 mt-5" >
          <div className="card card-authentication1" style={{backgroundColor:'rgba(0, 0, 0, 0.28)'}}>
            <div className="card-body ">
              <div className="card-content p-2 ">
                <div className="text-center">
                  <img src={logo} alt="logo icon" />
                </div>
                <div className="card-title text-center py-3 text-white fs-4">Sign Up</div>
                <form >
                  <div className="form-group">
                    <div className="position-relative has-icon-right">
                      <input
                        type="text"
                        className="form-control input-shadow"
                        placeholder="Enter Your Name"
                        value={name}
                        onChange={handleNameChange}
                      />
                    <h6 className="errors">{errors.name && <span>{errors.name}</span>}</h6>

                    </div>
                  </div>
                  <div className="form-group mt-3" >
                    <div className="position-relative has-icon-right">
                      <input
                        type="email"
                        className="form-control input-shadow"
                        placeholder="Enter Your Mail ID"
                        value={email}
                        onChange={handleEmailChange}
                      />
       <h6 className="errors">{errors.email && <span>{errors.email}</span>}</h6>

                    </div>
                  </div>
                  <div className="form-group mt-3" >
                    <div className="position-relative has-icon-right">
                      <input
                        type="password"
                        id="exampleInputPassword"
                        className="form-control input-shadow"
                        placeholder="Choose Password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
               <h6 className="errors">{errors.password && <span>{errors.password}</span>}</h6>
                    </div>
                  </div>
                  <div className="form-row">
                  </div>
                  <button type="button" className="btn btn-dark btn-block my-4 " onClick={handleSubmit} style={{marginLeft:'120px'}}>Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SignUp;