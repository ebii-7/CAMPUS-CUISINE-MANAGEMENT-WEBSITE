import React from "react";
import { useEffect, useState } from 'react';

const reviewsData = [
  {
    id: 1,
    name: "Abebe Kebede",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    comment: "Campus Bites has transformed my lunchtime experience. No more waiting in long lines. The food is always fresh and delivered on time.",
    date: "March 15, 2023"
  },
  {
    id: 2,
    name: "Tigist Haile",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4,
    comment: "I love the variety of options available. Being able to order ahead has saved me so much time between classes.",
    date: "April 2, 2023"
  },
  {
    id: 3,
    name: "Dawit Mengistu",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
    comment: "The app is super easy to use, and the rewards program is a great bonus. I've recommended it to all my friends.",
    date: "May 10, 2023"
  },
  {
    id: 4,
    name: "Helen Tadesse",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 4,
    comment: "The prepaid meal plan option has been a lifesaver for my budget. Now I can enjoy good food without breaking the bank.",
    date: "June 22, 2023"
  }
];

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedAvatars, setLoadedAvatars] = useState({});

  useEffect(() => {
    const initialLoadState = {};
    reviewsData.forEach(review => {
      initialLoadState[review.id] = false;
      const img = new Image();
      img.src = review.avatar;
      img.onload = () => {
        setLoadedAvatars(prev => ({ ...prev, [review.id]: true }));
      };
    });
    setLoadedAvatars(initialLoadState);

    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % reviewsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = rating => (
    <div className="d-flex star-rating">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`me-1 ${i < rating ? 'text-warning' : 'text-secondary'}`}>
          &#9733;
        </span>
      ))}
    </div>
  );

  return (
    <section className="py-5 py-md-7" id="reviews">
      <div className="container">
        <div className="section-title text-center">
          <span className="badge rounded-pill">Testimonials</span>
          <h2 className="display-5 fw-bold">Student Reviews</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="d-none d-md-block">
              <div className="row g-4">
                {reviewsData.map(review => (
                  <div key={review.id} className="col-md-6">
                    <div className="card border-0 shadow-sm rounded-4 h-100">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-start mb-3">
                          <div className="rounded-circle overflow-hidden me-3 bg-light" style={{ width: "48px", height: "48px" }}>
                            {loadedAvatars[review.id] && (
                              <img src={review.avatar} alt={review.name} className="w-100 h-100" />
                            )}
                          </div>
                          <div>
                            <h3 className="fs-5 fw-semibold mb-1">{review.name}</h3>
                            <div className="d-flex align-items-center">
                              {renderStars(review.rating)}
                              <span className="ms-2 fs-xs text-muted">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted mb-0">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="d-block d-md-none text-center">
              <div className="carousel slide" id="reviewsCarousel">
                <div className="carousel-inner">
                  {reviewsData.map((review, index) => (
                    <div key={review.id} className={`carousel-item ${activeIndex === index ? 'active' : ''}`}>
                      <div className="card border-0 shadow-sm rounded-4">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-start mb-3">
                            <div className="rounded-circle overflow-hidden me-3 bg-light" style={{ width: "48px", height: "48px" }}>
                              {loadedAvatars[review.id] && (
                                <img src={review.avatar} alt={review.name} className="w-100 h-100" />
                              )}
                            </div>
                            <div>
                              <h3 className="fs-5 fw-semibold mb-1">{review.name}</h3>
                              <div className="d-flex align-items-center">
                                {renderStars(review.rating)}
                                <span className="ms-2 fs-xs text-muted">{review.date}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-muted mb-0">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-5">
              <p className="text-muted mb-4">
                Join thousands of happy students who are enjoying the Campus Bites experience.
              </p>
              <button className="btn btn-campus">
                Start Ordering
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
