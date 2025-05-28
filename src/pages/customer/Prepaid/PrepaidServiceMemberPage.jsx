import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { CheckCircle, Lock, History } from "lucide-react";
import { motion } from "framer-motion";
import "../styles/prepaid-service-registration-member.css";
import HeroSection from '../component/HeroSection';

const PrepaidServiceMemberPage = () => {
  // State for add money form
  const [amount, setAmount] = useState(0);
  const [amountError, setAmountError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Sample wallet data
  const walletData = {
    balance: 500,
    totalDeposit: 1500,
    totalSpent: 1000,
    expiry: "2024-12-31",
    lastTransaction: "2024-11-15",
  };

  // Sample transaction data
  const recentTransactions = [
    {
      id: 1,
      name: "Burger",
      date: "2025-03-14",
      transactionId: "#12345",
      amount: 250,
      type: "payment",
    },
    {
      id: 2,
      name: "Deposit",
      date: "2025-03-10",
      transactionId: "#12346",
      amount: 1000,
      type: "deposit",
    },
    {
      id: 3,
      name: "Pizza",
      date: "2025-03-05",
      transactionId: "#12347",
      amount: 350,
      type: "payment",
    },
    {
      id: 4,
      name: "Deposit",
      date: "2025-02-28",
      transactionId: "#12348",
      amount: 500,
      type: "deposit",
    },
    {
      id: 5,
      name: "Pasta",
      date: "2025-02-22",
      transactionId: "#12349",
      amount: 400,
      type: "payment",
    },
  ];

  // Form validation
  const validateForm = () => {
    // Reset error
    setAmountError("");

    // Validate amount
    if (!amount || amount <= 0 || isNaN(amount)) {
      setAmountError("Please enter a valid amount");
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");

    if (validateForm()) {
      setIsSubmitting(true);
      
      // we need a logic to update the wallet balance here
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccess(true);  
        setAmount("");
        console.log("Success alert shown!");

        setTimeout(() => {
          setShowSuccess(false); 
          console.log("Success alert hidden!");
        }, 3000);  
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
    <HeroSection title="LKe Lounge Wallet Dashboard" subtitle="Manage your digital wallet and track your spending" />

      {/* Wallet Info Section */}
      <section>
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Row className="justify-content-center">
              <Col lg={8}>
                <motion.div variants={itemVariants} className="feature-content">
                  {/* Wallet Card */}
                  <div className="wallet-card">
                    <div className="wallet-card-main">
                      <div className="wallet-label">Wallet Balance</div>
                      <div className="wallet-balance-amount">
                        {walletData.balance} ETB
                      </div>

                      <div className="wallet-secondary-info">
                        <div className="wallet-expires">
                          <span>Expires:</span> {walletData.expiry}
                        </div>
                        <div className="wallet-last-transaction">
                          <span>Last Transaction:</span>{" "}
                          {walletData.lastTransaction}
                        </div>
                      </div>
                    </div>

                    <div className="wallet-summary-section">
                      <div className="wallet-summary-box">
                        <div className="summary-label">Total Deposit</div>
                        <div className="summary-amount">
                          {walletData.totalDeposit} ETB
                        </div>
                      </div>

                      <div className="wallet-summary-box">
                        <div className="summary-label">Total Spent</div>
                        <div className="summary-amount">
                          {walletData.totalSpent} ETB
                        </div>
                      </div>
                    </div>

                    <div className="section-header text-center mb-3 mt-4">
                      <h2 className="section-title">Top Up Your Wallet</h2>
                      <p className="section-description">
                        Enter an amount below to add funds to your prepaid
                        wallet
                      </p>
                    </div>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="form-group">
                          <Form.Label>Amount (ETB)</Form.Label>
                          <div className="d-flex align-items-center gap-3">
                          <Form.Control
                            type="number"
                            name="amount"
                            value={amount > 0 ? amount : ""}
                            onChange={(e) => {
                              setAmount(e.target.value);
                              setAmountError("");
                            }}
                            isInvalid={!!amountError}
                            placeholder="Enter amount in ETB"
                            min="1"
                          />
                        <Button
                          type="submit"
                          variant="primary"
                          className="submit-button"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Processing..." : "Add Money"}
                        </Button>
                        </div>
                        </Form.Group>
                 
                          <Form.Control.Feedback type="invalid" className="d-block">
                            {amountError}
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
                  </div>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Transactions Section */}
      <section className="transactions-section">
        <Container fluid>
          <Row className="justify-content-center">
            <Col lg={10}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-card"
              >
                <div className="section-header">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div>
                      <h2 className="section-title">Transaction History</h2>
                    </div>
                    <Button variant="outline-primary" className="view-all-btn">
                      <History className="me-2" size={16} />
                      View All
                    </Button>
                  </div>
                </div>

                <div className="table-responsive">
                  <table className="transaction-table">
                    <thead>
                      <tr>
                        <th>Food Name</th>
                        <th>Date</th>
                        <th>Transaction ID</th>
                        <th>Amount (ETB)</th>
                        <th>Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentTransactions.map((transaction) => (
                        <tr key={transaction.id}>
                          <td>{transaction.name}</td>
                          <td>{transaction.date}</td>
                          <td>{transaction.transactionId}</td>
                          <td className={`amount ${transaction.type}`}>
                            {transaction.type === "deposit" ? "+" : "-"}
                            {transaction.amount}
                          </td>
                          <td className={transaction.type}>
                            {transaction.type === "deposit" ? (
                              <span className="deposit-label">Deposit</span>
                            ) : (
                              <span className="payment-label">Payment</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default PrepaidServiceMemberPage;
