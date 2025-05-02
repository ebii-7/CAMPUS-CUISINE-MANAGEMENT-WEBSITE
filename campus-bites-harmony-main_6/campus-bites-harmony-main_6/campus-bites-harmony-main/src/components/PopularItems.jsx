
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { Star, ShoppingCart } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

// Placeholder data - replace with actual data later
const popularItemsData = [
  {
    id: 1,
    name: "Doro Wat",
    image: "https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    price: 60,
    rating: 4.5
  },
  {
    id: 2,
    name: "Tibs",
    image: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    price: 75,
    rating: 4.5
  },
  {
    id: 3,
    name: "Kitfo",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 65,
    rating: 4.5
  },
  {
    id: 4,
    name: "Shiro",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    price: 55,
    rating: 4.5
  },
  {
    id: 5,
    name: "Beyainatu",
    image: "https://images.unsplash.com/photo-1526489550178-7bd5d9944f4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 70,
    rating: 4.5
  },
  {
    id: 6,
    name: "Injera with Misir Wat",
    image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 60,
    rating: 4.5
  },
  {
    id: 7,
    name: "Gomen",
    image: "https://images.unsplash.com/photo-1598514983318-2f64f55b2b36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    price: 50,
    rating: 4.5
  },
  {
    id: 8,
    name: "Asa Tibs",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 85,
    rating: 4.5
  },
  {
    id: 9,
    name: "Firfir",
    image: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 55,
    rating: 4.5
  },
  {
    id: 10,
    name: "Coffee Ceremony",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
    price: 45,
    rating: 4.5
  },
  {
    id: 11,
    name: "Tej (Honey Wine)",
    image: "https://images.unsplash.com/photo-1504310578167-435ac09e69f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 40,
    rating: 4.5
  },
  {
    id: 12,
    name: "Kolo (Roasted Barley)",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 30,
    rating: 4.5
  }
];

const PopularItems = () => {
  const [loadedImages, setLoadedImages] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    // Initialize loading state for all images
    const initialLoadState = popularItemsData.reduce((acc, item) => {
      acc[item.id] = false;
      return acc;
    }, {});
    
    setLoadedImages(initialLoadState);

    // Preload images
    popularItemsData.forEach(item => {
      const img = new Image();
      img.src = item.image;
      img.onload = () => {
        setLoadedImages(prev => ({
          ...prev,
          [item.id]: true
        }));
      };
    });
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image
    }));
    
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart`,
      duration: 3000,
    });
  };

  // Function to render stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="d-flex star-rating">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="star filled" size={18} />
        ))}
        
        {hasHalfStar && (
          <div className="position-relative">
            <Star className="star half-filled" size={18} />
          </div>
        )}
        
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <Star key={`empty-${i}`} className="star" size={18} />
        ))}
      </div>
    );
  };

  return (
    <section className="py-5 py-md-7" id="popular-items">
      <div className="container">
        <div className="section-title">
          <span className="badge rounded-pill">
            Campus Favorites
          </span>
          <h2 className="display-5 fw-bold">Most Popular Items</h2>
        </div>
        
        <div className="row g-4">
          {popularItemsData.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4 col-xl-3">
              <div className="card h-100 border-0 shadow-sm rounded-4 card-hover overflow-hidden">
                <div className="position-relative">
                  {/* Rating */}
                  <div className="position-absolute top-0 start-0 m-2 z-3 px-2 py-1 rounded bg-white bg-opacity-75">
                    {renderStars(item.rating)}
                  </div>
                  
                  {/* Image Container */}
                  <div className="position-relative" style={{ height: "200px" }}>
                    {/* Loading Skeleton */}
                    {!loadedImages[item.id] && (
                      <div className="position-absolute top-0 start-0 w-100 h-100 bg-light placeholder-glow"></div>
                    )}
                    
                    {/* Image */}
                    <img 
                      src={item.image}
                      alt={item.name}
                      className={`w-100 h-100 object-fit-cover ${loadedImages[item.id] ? 'img-loaded' : 'img-loading'}`}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-t from-dark to-transparent opacity-25"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="card-body">
                  <h3 className="fs-5 fw-semibold">{item.name}</h3>
                  
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="text-campus fw-bold">{item.price} birr</span>
                    
                    <button 
                      onClick={() => handleAddToCart(item)}
                      className="btn btn-sm btn-campus add-to-cart-btn d-flex align-items-center gap-1"
                    >
                      <ShoppingCart size={16} />
                      Add to cart
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

export default PopularItems;
