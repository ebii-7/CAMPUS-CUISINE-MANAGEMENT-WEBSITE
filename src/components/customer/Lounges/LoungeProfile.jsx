import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./LoungeProfile.css";

// Updated import paths using @/assets prefix
import likeBanner from "../../../assets/images/Lounges/injera.jpg";
import likeProfile from "../../../assets/images/Lounges/like.jpg";
import holaBanner from "../../../assets/images/Lounges/injera.jpg";
import holaProfile from "../../../assets/images/Lounges/hola.jpg";
import enjoheBanner from "../../../assets/images/Lounges/injera.jpg";
import enjoheProfile from "../../../assets/images/Lounges/enjohe.jpg";

// Menu images
import firfirImg from "../../../assets/images/Lounges/firfir.jpg";
import dorowatImg from "../../../assets/images/Lounges/doro.jpg";
import tibsImg from "../../../assets/images/Lounges/tibs.jpg";
import kitfoImg from "../../../assets/images/Lounges/kitfo.jpg";
import shiroImg from "../../../assets/images/Lounges/shiro.jpg";
import beyanatImg from "../../../assets/images/Lounges/beyanat.jpg";
import gomenImg from "../../../assets/images/Lounges/gomen.jpg";
import misirwatImg from "../../../assets/images/Lounges/misir.jpg";

// Sample data with a bit more detail
const lounges = [
  {
    id: "1",
    name: "Like Ethiopian Cuisine",
    banner: likeBanner,
    profilePic: likeProfile,
    rating: 4.8,
    reviewCount: 120,
    description: "Experience the rich flavors of Ethiopia in a cozy and inviting atmosphere. Perfect for a quick bite or a relaxed meal.",
    menu: [
      { name: "Misir Wat (Spicy Lentils)", image: misirwatImg, price: 5.99, description: "Red lentils simmered in a berbere spice blend." },
      { name: "Shiro (Chickpea Stew)", image: shiroImg, price: 4.99, description: "A mild and flavorful stew made from ground chickpeas." },
      { name: "Firfir (Shredded Injera with Spices)", image: firfirImg, price: 6.99, description: "Torn injera sautéed with spices and often beef or vegetables." },
      { name: "Gomen (Collard Greens)", image: gomenImg, price: 3.99, description: "Steamed collard greens with garlic and onions." },
      { name: "Tibs (Sautéed Meat)", image: tibsImg, price: 7.99, description: "Tender pieces of beef or lamb sautéed with onions, peppers, and spices." },
      { name: "Kitfo (Minced Raw Beef)", image: kitfoImg, price: 8.99, description: "Lean minced beef seasoned with mitmita and niter kibbeh." },
    ],
  },
  {
    id: "2",
    name: "Hola International Cafe",
    banner: holaBanner,
    profilePic: holaProfile,
    rating: 4.5,
    reviewCount: 200,
    description: "A vibrant cafe offering a diverse menu of international dishes and refreshing beverages. A great place to socialize and enjoy delicious meals.",
    menu: [
      { name: "Doro Wat (Chicken Stew)", image: dorowatImg, price: 9.99, description: "Chicken drumsticks simmered in a rich and spicy berbere sauce with hard-boiled eggs." },
      { name: "Beyainatu (Vegetarian Platter)", image: beyanatImg, price: 6.49, description: "A colorful assortment of vegetarian stews and salads served on injera." },
      { name: "Tibs (Sautéed Meat)", image: tibsImg, price: 7.99, description: "Tender pieces of beef or lamb sautéed with onions, peppers, and spices." },
      { name: "Misir Wat (Spicy Lentils)", image: misirwatImg, price: 5.99, description: "Red lentils simmered in a berbere spice blend." },
      { name: "Shiro (Chickpea Stew)", image: shiroImg, price: 4.99, description: "A mild and flavorful stew made from ground chickpeas." },
      { name: "Gomen (Collard Greens)", image: gomenImg, price: 3.99, description: "Steamed collard greens with garlic and onions." },
    ],
  },
  {
    id: "3",
    name: "Enjohe Traditional Restaurant",
    banner: enjoheBanner,
    profilePic: enjoheProfile,
    rating: 4.5,
    reviewCount: 20,
    description: "Savor authentic Ethiopian flavors in a traditionally decorated setting. Perfect for experiencing the cultural cuisine.",
    menu: [
      { name: "Firfir (Shredded Injera with Spices)", image: firfirImg, price: 6.99, description: "Torn injera sautéed with spices and often beef or vegetables." },
      { name: "Gomen (Collard Greens)", image: gomenImg, price: 3.99, description: "Steamed collard greens with garlic and onions." },
      { name: "Shiro (Chickpea Stew)", image: shiroImg, price: 4.99, description: "A mild and flavorful stew made from ground chickpeas." },
      { name: "Beyainatu (Vegetarian Platter)", image: beyanatImg, price: 6.49, description: "A colorful assortment of vegetarian stews and salads served on injera." },
      { name: "Misir Wat (Spicy Lentils)", image: misirwatImg, price: 5.99, description: "Red lentils simmered in a berbere spice blend." },
      { name: "Kitfo (Minced Raw Beef)", image: kitfoImg, price: 8.99, description: "Lean minced beef seasoned with mitmita and niter kibbeh." },
    ],
  },
];

function LoungeProfile() {
  const { id } = useParams();
  const lounge = lounges.find((l) => l.id === id);
  const [cart, setCart] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!lounge) {
    return <div className="not-found"><h2>Lounge not found!</h2></div>;
  }

  const handleAddToCart = (item) => {
    setCart((prevCart) => ({
      ...prevCart,
      [item.name]: (prevCart[item.name] || 0) + 1,
    }));
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="lounge-profile-container">
      <div className="banner-container">
        <img src={lounge.banner} alt={`${lounge.name} Banner`} className="lounge-banner" />
        <div className="banner-overlay">
          <h1>{lounge.name}</h1>
          <p className="location"> {lounge.location}</p>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="lounge-card">
          <img src={lounge.profilePic} alt={`${lounge.name} Profile`} className="lounge-profile-pic" />
          <div className="lounge-details">
            <div className="lounge-header">
              <h2>{lounge.name}</h2>
              <div className="rating">
                ⭐ {lounge.rating} ({lounge.reviewCount} reviews)
              </div>
            </div>
            <p className="description">{lounge.description}</p>
          </div>
        </div>

        <div className="cart-info">
          <p>Items in cart: {Object.values(cart).reduce((acc, count) => acc + count, 0)}</p>
        </div>

        <div className="menu-section">
          <h3>🍽️ Our Delicious Menu</h3>
          <div className="menu-grid">
            {lounge.menu.map((item, index) => (
              <div key={index} className="menu-item-card">
                <img src={item.image} alt={item.name} className="menu-image" />
                <div className="menu-item-details">
                  <h4>{item.name}</h4>
                  <p className="item-description">{item.description}</p>
                  <div className="price-add">
                    <p className="menu-price">${item.price.toFixed(2)}</p>
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>
                      Add +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="view-full-menu-btn">View Full Menu</button>
        </div>
      </div>
    </div>
  );
}

export default LoungeProfile;