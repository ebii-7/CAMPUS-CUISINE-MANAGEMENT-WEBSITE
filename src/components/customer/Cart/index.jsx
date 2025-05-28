import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckOutPage";
import FoodList from "./FoodList";
import FoodCard from "./FoodCard";
import SupportFeatures from "./SupportFeatures";

// ✅ Add this line to export `CartPage`
export { CartPage };

function Cart() {
    return (
        <div>
            <NavBar />
            <Hero />
            <CartPage />
            <FoodList />
            <FoodCard />
            <CheckoutPage />
            <SupportFeatures />
        </div>
    );
}

export default Cart;
