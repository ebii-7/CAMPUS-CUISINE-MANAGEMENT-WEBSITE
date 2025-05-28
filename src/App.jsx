import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";  // ✅ Ensure correct store import

// Page Components
import Home from "./components/customer/Home";
import CartPage from "./components/customer/Cart/CartPage";
import Profile from "./components/customer/Profile/ProfilePage";
import Lounges from "./components/customer/Lounges";
import Prepaid from "./components/customer/Prepaid";

function App() {
  return (
    <Provider store={store}>  {/* ✅ Redux now correctly wraps the app */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/lounges" element={<Lounges />} />
          <Route path="/prepaid" element={<Prepaid />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
