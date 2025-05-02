
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLanguage } from '../store/uiSlice';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  Globe
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentLanguage = useSelector((state) => state.ui.language);
  const dispatch = useDispatch();

  const handleLanguageChange = (language) => {
    dispatch(setLanguage(language));
    // In a real app, this would trigger language change throughout the app
    console.log(`Language changed to: ${language}`);
  };

  return (
    <footer className="bg-dark text-white py-5">
      {/* Main Footer */}
      <div className="container py-4">
        <div className="row g-4">
          {/* Logo and About */}
          <div className="col-md-6 col-lg-3">
            <Link to="/" className="d-flex align-items-center mb-3 text-decoration-none">
              <span className="fs-4 fw-bold text-primary">CampusBites</span>
            </Link>
            <p className="text-muted mb-3">
              Campus Dining Made Easy. Skip the wait and get your meals faster.
              Great food, just a click away!
            </p>
            <div className="d-flex gap-3">
              <a 
                href="#" 
                className="footer-social-icon"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="footer-social-icon"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="footer-social-icon"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-3">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/lounge" className="footer-link">
                  Lounges
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/menu" className="footer-link">
                  Menu
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/prepaid" className="footer-link">
                  Prepaid Plans
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-6 col-lg-3">
            <h5 className="mb-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-start mb-3">
                <MapPin size={20} className="text-primary flex-shrink-0 me-2 mt-1" />
                <span className="text-muted">
                  Addis Ababa University Campus, Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <Phone size={20} className="text-primary flex-shrink-0 me-2" />
                <span className="text-muted">+251 912 345 678</span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <Mail size={20} className="text-primary flex-shrink-0 me-2" />
                <span className="text-muted">info@campusbites.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter and Language */}
          <div className="col-md-6 col-lg-3">
            <h5 className="mb-3">Newsletter</h5>
            <p className="text-muted mb-3">
              Subscribe to our newsletter for updates on new lounges and special offers.
            </p>
            <form>
              <div className="mb-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="form-control bg-dark text-white border-secondary"
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-primary w-100 mb-4"
              >
                Subscribe
              </button>
            </form>
            
            {/* Language Selector */}
            <div className="mt-3">
              <h5 className="mb-2 d-flex align-items-center gap-2">
                <Globe size={18} />
                Language
              </h5>
              <div className="d-flex flex-wrap gap-2 mt-2">
                <button 
                  className={`btn btn-sm ${currentLanguage === 'english' ? 'btn-light' : 'btn-outline-light'}`}
                  onClick={() => handleLanguageChange('english')}
                >
                  English
                </button>
                <button 
                  className={`btn btn-sm ${currentLanguage === 'amharic' ? 'btn-light' : 'btn-outline-light'}`}
                  onClick={() => handleLanguageChange('amharic')}
                >
                  አማርኛ
                </button>
                <button 
                  className={`btn btn-sm ${currentLanguage === 'sidama' ? 'btn-light' : 'btn-outline-light'}`}
                  onClick={() => handleLanguageChange('sidama')}
                >
                  Sidaamu Afoo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-top border-secondary mt-4">
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="text-muted small mb-0">
                &copy; {currentYear} Campus Bites. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-3">
                <a href="#" className="text-muted small text-decoration-none">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted small text-decoration-none">
                  Terms of Service
                </a>
                <a href="#" className="text-muted small text-decoration-none">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
