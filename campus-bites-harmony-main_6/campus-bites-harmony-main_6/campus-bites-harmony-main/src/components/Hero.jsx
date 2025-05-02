
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Ethiopian food images
const foodImages = [
  "https://images.unsplash.com/photo-1567360425618-1684ce40267b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  "https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  "https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
];

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.src = foodImages[currentImageIndex];
    img.onload = () => setImageLoaded(true);

    // Rotate images every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % foodImages.length);
      setImageLoaded(false); // Reset loading state for new image
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <section className="py-5 min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="mb-3">
              <span className="badge bg-primary bg-opacity-10 text-primary">
                Student's Choice
              </span>
            </div>
            <h1 className="display-4 fw-bold mb-4">
              Campus Dining <br />
              <span className="text-primary">Made Easy</span>
            </h1>
            <p className="lead text-secondary mb-4">
              Enjoy a seamless dining experience with easy online ordering. 
              Skip the wait and get your meals faster. Great food, just a click away!
            </p>
            <div className="mt-4">
              <Link to="/menu" className="btn btn-campus d-inline-flex align-items-center">
                Order Now
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="ms-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="col-lg-6">
            <div className="position-relative">
              <div className="rounded-4 overflow-hidden shadow">
                <img 
                  src={foodImages[currentImageIndex]} 
                  alt="Ethiopian cuisine" 
                  className={`img-fluid img-blur-in ${imageLoaded ? 'loaded' : ''}`}
                />
              </div>
              <div className="position-absolute top-0 end-0 translate-y-n25 translate-x-25 bg-primary opacity-10 rounded-circle" style={{ width: '8rem', height: '8rem', filter: 'blur(40px)', zIndex: -1 }}></div>
              <div className="position-absolute bottom-0 start-0 translate-y-25 translate-x-n25 bg-primary opacity-10 rounded-circle" style={{ width: '6rem', height: '6rem', filter: 'blur(40px)', zIndex: -1 }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
