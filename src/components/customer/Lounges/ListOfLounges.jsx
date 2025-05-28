import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ListOfLounges.css";

const ListOfLounges = () => {
  const lounges = useSelector((state) => state.lounges.lounges); // ✅ Get lounges from Redux
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="lounges-page">
      {/* Hero Banner */}
      <div className="lounges-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-6">
              <div className="hero-content fade-in">
                <h1 className="display-4 fw-bold">Discover Lounges</h1>
                <p className="lead">
                  Find the perfect place to relax and enjoy authentic cuisine
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lounges List */}
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-12">
            <div className="section-header text-center slide-up">
              <h2 className="fw-bold">Available Lounges</h2>
              <p className="text-muted">
                Explore our handpicked selection of premium lounges
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {lounges.length > 0 ? (
            lounges.map((lounge, index) => (
              <div key={lounge.id} className="col-md-6 col-lg-4">
                <div
                  className={`lounge-card card h-100 border-0 shadow-sm ${
                    isLoaded ? "fade-in" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="card-img-container">
                    <img
                      src={lounge.image}
                      className="card-img-top"
                      alt={lounge.name}
                    />
                    <div className="card-badge">
                      {lounge.category || "Featured"}
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{lounge.name}</h5>

                    {/* ⭐ Star Rating */}
                    <div className="ratings mb-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span
                          key={i}
                          className={
                            i < Math.floor(lounge.rating) ? "star filled" : "star"
                          }
                        >
                          ★
                        </span>
                      ))}
                      <span className="rating-number ms-2">
                        {lounge.rating?.toFixed(1) || "4.5"}
                      </span>
                    </div>

                    <p className="card-text flex-grow-1">{lounge.description}</p>

                    {/* Lounge Features */}
                    <div className="lounge-features mb-3">
                      {lounge.features && lounge.features.length > 0 ? (
                        lounge.features.map((feature, i) => (
                          <span key={i} className="feature-badge">
                            {feature}
                          </span>
                        ))
                      ) : (
                        <>
                        </>
                      )}
                    </div>

                    <Link to={`/lounge/${lounge.id}`} className="btn btn-primary mt-auto">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            /* No Results */
            <div className="container py-5 text-center">
              <div className="no-results">
                <div className="no-results-icon">
                  <i className="bi bi-search"></i>
                </div>
                <h3>No lounges found</h3>
                <p>Try adjusting your search criteria or check back later.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListOfLounges;
