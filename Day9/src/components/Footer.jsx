
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  const navigate = useNavigate();
    
  return (
    <footer className="text-center text-lg-start bg-white text-muted " style={{backgroundColor:"black"}}>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom ">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="#" className="me-4 link-secondary">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="me-4 link-secondary">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="me-4 link-secondary">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="#" className="me-4 link-secondary">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="me-4 link-secondary">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" className="me-4 link-secondary">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </section>
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3 text-secondary"></i>Smaag Enterprises Pvt.
              </h6>
              <p>
                Here you Can see Products
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <a style={{textDecoration:"none"}} className="text-reset">Pipes</a>
              </p>
              <p>
                <a style={{textDecoration:"none"}} className="text-reset">Ropes</a>
              </p>
              <p>
                <a style={{textDecoration:"none"}} className="text-reset">Drip irrigation</a>
              </p>
              <p>
                <a style={{textDecoration:"none"}} className="text-reset">Outlets</a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Help
              </h6>
              <p>
                <a style={{textDecoration:"none",cursor:"pointer"}} className="text-reset" onClick={()=>navigate("/faq")}>FAQ</a>
              </p>
              <p>
                <a style={{textDecoration:"none",cursor:"pointer"}} className="text-reset" onClick={()=>navigate("/terms")}>Terms and Conditions</a>
              </p>
              <p>
                <a style={{textDecoration:"none",cursor:"pointer"}} className="text-reset" onClick={()=>navigate("/privacy")}>Privacy Policy</a>
              </p>
             
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3 text-secondary"></i> Coimbatore</p>
              <p>
                <i className="fas fa-envelope me-3 text-secondary"></i>
                info@example.com
              </p>
              <p><i className="fas fa-phone me-3 text-secondary"></i> + 97155678945</p>
              <p><i className="fas fa-print me-3 text-secondary"></i> + 98234567856</p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}>
        © {new Date().getFullYear()} Copyright:
        <a className="text-reset fw-bold" style={{textDecoration:"none"}} href="#">  Smaag Enterprises Pvt.</a>
      </div>
    </footer>
  );
};

export default Footer;
