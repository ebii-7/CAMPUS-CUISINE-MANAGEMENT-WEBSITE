
import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'sonner';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('foodCart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart from localStorage', error);
        setCart([]);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('foodCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (food) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(item => item.id === food.id);

      if (existingItemIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        toast.success(`Added another ${food.name} to cart`);
        return updatedCart;
      } else {
        toast.success(`${food.name} added to cart`);
        return [...prevCart, { ...food, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (foodId) => {
    setCart(prevCart => {
      const foodItem = prevCart.find(item => item.id === foodId);
      if (foodItem) {
        toast.success(`${foodItem.name} removed from cart`);
      }
      return prevCart.filter(item => item.id !== foodId);
    });
  };

  const updateQuantity = (foodId, newQuantity) => {
    if (newQuantity < 1) return;

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === foodId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    toast.success('Cart cleared');
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const shippingFee = subtotal > 0 ? 12 : 0;

  const total = subtotal + shippingFee;

  const openCart = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsCartOpen(true);
    }, 800);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      subtotal,
      shippingFee,
      total,
      isCartOpen,
      openCart,
      closeCart,
      isLoading
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
