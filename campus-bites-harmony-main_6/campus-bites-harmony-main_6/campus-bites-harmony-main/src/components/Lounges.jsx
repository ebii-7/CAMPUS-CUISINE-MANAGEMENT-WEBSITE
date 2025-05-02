
import { useState, useEffect } from 'react';
import { Heart, Star } from 'lucide-react';

// Placeholder data - replace with actual data later
const loungesData = [
  {
    id: 1,
    name: "Central Dining",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    rating: 4.5
  },
  {
    id: 2,
    name: "Student Café",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    rating: 4.5
  },
  {
    id: 3,
    name: "Harmony Hall",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    rating: 4.5
  }
];

const Lounges = () => {
  const [loadedImages, setLoadedImages] = useState({});
  const [favorited, setFavorited] = useState({});

  useEffect(() => {
    // Initialize loading state for all images
    const initialLoadState = loungesData.reduce((acc, lounge) => {
      acc[lounge.id] = false;
      return acc;
    }, {});
    
    setLoadedImages(initialLoadState);

    // Preload images
    loungesData.forEach(lounge => {
      const img = new Image();
      img.src = lounge.image;
      img.onload = () => {
        setLoadedImages(prev => ({
          ...prev,
          [lounge.id]: true
        }));
      };
    });
  }, []);

  const toggleFavorite = (id) => {
    setFavorited(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Function to render stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="d-flex align-items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} size={16} className="text-warning fill-warning" />
        ))}
        
        {hasHalfStar && (
          <div className="position-relative">
            <Star size={16} className="text-warning" />
            <div className="position-absolute top-0 start-0 overflow-hidden w-50">
              <Star size={16} className="text-warning fill-warning" />
            </div>
          </div>
        )}
        
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <Star key={`empty-${i}`} size={16} className="text-warning" />
        ))}
      </div>
    );
  };

  return (
    <section className="py-5 bg-light" id="lounges">
      <div className="container py-4">
        <div className="section-title text-center mb-5">
          <span className="badge d-inline-block px-3 py-1 mb-2 rounded-pill">
            Exclusive Spots
          </span>
          <h2 className="display-5 fw-bold mb-4">Lounges</h2>
        </div>
        
        <div className="row g-4">
          {loungesData.map((lounge) => (
            <div key={lounge.id} className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden transition">
                <div className="position-relative">
                  {/* Heart Icon */}
                  <button 
                    onClick={() => toggleFavorite(lounge.id)}
                    className={`position-absolute top-3 end-3 z-3 p-2 rounded-circle bg-white bg-opacity-75 border-0
                      ${favorited[lounge.id] ? 'text-danger' : 'text-muted'}`}
                    style={{ zIndex: 10 }}
                  >
                    <Heart size={18} className={favorited[lounge.id] ? 'fill-current' : ''} />
                  </button>
                  
                  <img 
                    src={lounge.image} 
                    alt={lounge.name}
                    className="img-fluid w-100 object-cover"
                    style={{ height: "200px" }}
                  />
                </div>
                
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h3 className="h5 card-title mb-0">{lounge.name}</h3>
                    {renderStars(lounge.rating)}
                  </div>
                  
                  <p className="card-text text-muted mb-0">
                    A welcoming space to gather, relax and enjoy time with friends.
                  </p>
                </div>
                
                <div className="card-footer bg-white border-0 pt-0">
                  <div className="d-grid">
                    <button className="btn btn-outline-primary">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lounges;
