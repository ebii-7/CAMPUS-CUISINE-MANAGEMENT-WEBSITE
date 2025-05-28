
import React, { useState } from 'react';
import { useCart } from '../../../context/cart/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const CheckoutPage = () => {
  const { cart, total, subtotal, shippingFee, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [isProcessing, setIsProcessing] = useState(false);

  const [shippingDetails, setShippingDetails] = useState({
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlaceOrder = () => {
    // Validate form
    const requiredFields = ['fullName', 'address', 'city', 'zipCode', 'phone'];
    const missingFields = requiredFields.filter(field => !shippingDetails[field]);

    if (missingFields.length > 0) {
      toast.error('Please fill all required fields');
      return;
    }

    setIsProcessing(true);

    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      navigate('/');
      toast.success('Order placed successfully! Thank you for your purchase.');
    }, 2000);
  };

  if (cart.length === 0) {
    navigate('/');
    return null;
  }

  return (
    <div className="container py-5">
      <button
        onClick={() => navigate('/cart')}
        className="btn btn-link text-decoration-none mb-4 p-0"
      >
        <i className="bi bi-arrow-left me-2"></i>
        <span>Back to Cart</span>
      </button>

      <h1 className="display-6 fw-bold mb-4">Checkout</h1>

      <div className="row g-4">
        <div className="col-lg-8">
          {/* Payment method */}
          <div className="card shadow mb-4">
            <div className="card-body">
              <h2 className="h5 mb-4">Payment Method</h2>
              <div className="row g-3">
                <div className="col-md-6">
                  <div
                    className={`card ${paymentMethod === 'stripe' ? 'border-primary' : 'border'}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setPaymentMethod('stripe')}
                  >
                    <div className="card-body d-flex align-items-center p-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="paymentMethod"
                          checked={paymentMethod === 'stripe'}
                          onChange={() => setPaymentMethod('stripe')}
                        />
                      </div>
                      <div className="ms-3">
                        <i className="bi bi-credit-card me-2"></i>
                        <span>Credit / Debit Card</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div
                    className={`card ${paymentMethod === 'cash' ? 'border-primary' : 'border'}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setPaymentMethod('cash')}
                  >
                    <div className="card-body d-flex align-items-center p-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="paymentMethod"
                          checked={paymentMethod === 'cash'}
                          onChange={() => setPaymentMethod('cash')}
                        />
                      </div>
                      <div className="ms-3">
                        <i className="bi bi-cash me-2"></i>
                        <span>Cash on Delivery</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping address */}
          <div className="card shadow">
            <div className="card-body">
              <div className="d-flex align-items-center mb-4">
                <i className="bi bi-truck me-2"></i>
                <h2 className="h5 m-0">Shipping Address</h2>
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={shippingDetails.fullName}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="John Doe"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="text"
                    name="phone"
                    value={shippingDetails.phone}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={shippingDetails.address}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="123 Main St, Apt 4B"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">City *</label>
                  <input
                    type="text"
                    name="city"
                    value={shippingDetails.city}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="New York"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">ZIP Code *</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={shippingDetails.zipCode}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="10001"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order summary */}
        <div className="col-lg-4">
          <div className="card shadow position-sticky" style={{ top: "5rem" }}>
            <div className="card-body">
              <h2 className="h5 mb-4">Order Summary</h2>

              <div className="mb-4 overflow-auto" style={{ maxHeight: "250px" }}>
                {cart.map(item => (
                  <div key={item.id} className="d-flex align-items-center py-3 border-bottom">
                    <div className="flex-shrink-0 me-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded"
                        style={{ width: "50px" }}
                      />
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-0 fw-medium">{item.name}</p>
                      <p className="text-muted small mb-0">Qty: {item.quantity}</p>
                    </div>
                    <div className="ms-3">
                      <p className="mb-0 fw-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Shipping</span>
                  <span>${shippingFee.toFixed(2)}</span>
                </div>
                <hr className="my-2" />
                <div className="d-flex justify-content-between">
                  <span className="fw-bold">Total</span>
                  <span className="fw-bold">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className="btn btn-primary w-100 py-2"
              >
                {isProcessing ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Processing...
                  </>
                ) : (
                  'Place Order'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
