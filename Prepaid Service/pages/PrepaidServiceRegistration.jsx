import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { CheckCircle, Lock, Info, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import "../styles/prepaid-service-registration-member.css";
import HeroSection from "../component/HeroSection";

const PrepaidServiceRegistration = () => {
  // Form state
  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    email: "",
    phone: "",
    amount: "",
    terms: false,
  });

  // Form validation state
  const [errors, setErrors] = useState({});

  // UI state
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Predefined amounts
  const amountOptions = [100, 250, 500, 1000, 1500, 2000];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear error when field is changed
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  // Handle amount selection
  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setFormData({
      ...formData,
      amount: amount,
    });

    // Clear amount error
    if (errors.amount) {
      setErrors({
        ...errors,
        amount: "",
      });
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    // First Name validation
    if (!formData.Fname.trim()) {
      newErrors.Fname = "First name is required";
    }

    // Last Name validation
    if (!formData.Lname.trim()) {
      newErrors.Lname = "Last name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    // Amount validation
    if (!formData.amount) {
      newErrors.amount = "Please select or enter an amount";
    } else if (formData.amount <= 0) {
      newErrors.amount = "Amount must be greater than 0";
    }

    // Terms validation
    if (!formData.terms) {
      newErrors.terms = "You must agree to the Terms and Conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccess(true);

        // Reset form fields after a short delay
          setFormData({
            Fname: "",
            Lname: "",
            email: "",
            phone: "",
            amount: "",
            terms: false,
          });
          setSelectedAmount(null);
      }, 1500);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="prepaid-service-page">
      {/* Hero Section */}
      <HeroSection
        title="LKe Lounge Prepaid Wallet"
        subtitle="Seamless dining experience with the digital wallet service"
      />

      {/* Features Section */}
      <section className="features-section">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Row className="justify-content-center">
              <Col lg={10}>
                <div className="glass-card">
                  <motion.div
                    variants={itemVariants}
                    className="feature-content"
                  >
                    <h2 className="section-title">
                      Enhance Your Dining Experience
                    </h2>
                    <p className="section-description">
                      Enjoy seamless and convenient food ordering with our
                      prepaid wallet system. Add funds, order with ease, and
                      experience a new level of dining convenience.
                    </p>

                    <ul className="feature-list">
                      <motion.li variants={itemVariants}>
                        <CheckCircle className="feature-icon" size={16} />
                        <span>
                          Exclusive for food orders across our locations
                        </span>
                      </motion.li>
                      <motion.li variants={itemVariants}>
                        <CheckCircle className="feature-icon" size={16} />
                        <span>Automatic deduction for seamless payments</span>
                      </motion.li>
                      <motion.li variants={itemVariants}>
                        <CheckCircle className="feature-icon" size={16} />
                        <span>Secure payment processing via Chapa</span>
                      </motion.li>
                      <motion.li variants={itemVariants}>
                        <CheckCircle className="feature-icon" size={16} />
                        <span>
                          Special offers and promotions for wallet users
                        </span>
                      </motion.li>
                    </ul>
                  </motion.div>
                </div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Payment Form Section */}
      <section className="form-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="form-wrapper"
              >
                <div className="section-header text-center mb-5">
                  <h2 className="section-title">Top Up Your Wallet</h2>
                  <p className="section-description">
                    Fill out the form below to add funds to your prepaid wallet
                  </p>
                </div>

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="Fname"
                          value={formData.Fname}
                          onChange={handleChange}
                          isInvalid={!!errors.Fname}
                          placeholder="Enter your first name"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.Fname}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="Lname"
                          value={formData.Lname}
                          onChange={handleChange}
                          isInvalid={!!errors.Lname}
                          placeholder="Enter your last name"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.Lname}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          isInvalid={!!errors.phone}
                          placeholder="Enter your 10-digit phone number"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.phone}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                          placeholder="Enter your email"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="form-group">
                    <Form.Label>Select Amount (ETB)</Form.Label>
                    <div className="amount-options">
                      {amountOptions.map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          variant={
                            selectedAmount === amount
                              ? "primary"
                              : "outline-primary"
                          }
                          className="amount-button"
                          onClick={() => handleAmountSelect(amount)}
                        >
                          {amount} ETB
                        </Button>
                      ))}
                    </div>

                    <div className="custom-amount-wrapper">
                      <Form.Label>Or enter custom amount</Form.Label>
                      <Form.Control
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={(e) => {
                          handleChange(e);
                          setSelectedAmount(null);
                        }}
                        isInvalid={!!errors.amount}
                        placeholder="Enter amount in ETB"
                        min="1"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.amount}
                      </Form.Control.Feedback>
                    </div>
                  </Form.Group>
                  <div className="d-flex align-items-center gap-3 mt-3">
                    <Form.Group className="form-group terms-group">
                      <Form.Check
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                        label={
                          <span className="text-nowrap">
                            I agree to the{" "}
                            <a href="#terms" className="terms-link">
                              Terms and Conditions <FileCheck size={14} />
                            </a>
                          </span>
                        }
                      />
                    </Form.Group>

                    <div className="form-action">
                      <Button
                        type="submit"
                        variant="primary"
                        className="submit-button"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Processing..." : "Make Payment"}
                      </Button>
                    </div>
                  </div>
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {errors.terms}
                  </Form.Control.Feedback>

                  {showSuccess && (
                    <Alert variant="success" className="success-alert">
                      <CheckCircle className="me-2" size={16} />
                      Payment processed successfully! Your wallet has been
                      credited.
                    </Alert>
                  )}

                  <div className="secure-payment-note">
                    <Lock size={14} /> Secure payment powered by Chapa
                  </div>
                </Form>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} className="text-center mb-3">
              <h2 className="section-title">Frequently Asked Questions</h2>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="faq-container">
                <motion.div
                  className="faq-item"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="faq-question">
                    <Info className="faq-icon" size={16} />
                    <h4>How do I use my prepaid wallet?</h4>
                  </div>
                  <div className="faq-answer">
                    <p>
                      When placing an order, the system will automatically
                      deduct the amount from your wallet balance.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="faq-item"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="faq-question">
                    <Info className="faq-icon" size={16} />
                    <h4>Is there an expiration date for my wallet balance?</h4>
                  </div>
                  <div className="faq-answer">
                    <p>
                      No, your prepaid wallet balance does not expire and
                      remains valid as long as your account is active.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="faq-item"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="faq-question">
                    <Info className="faq-icon" size={16} />
                    <h4>Can I transfer my balance to another account?</h4>
                  </div>
                  <div className="faq-answer">
                    <p>
                      No, prepaid wallet balances are non-transferable between
                      accounts. Each wallet is tied to a specific user account.
                    </p>
                  </div>
                </motion.div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default PrepaidServiceRegistration;
