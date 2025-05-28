import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import ListCard from '../component/ListCard';
import { Info } from "lucide-react";
import "../styles/prepaid-service.css";
import HeroSection from '../component/HeroSection';
import placeholder from "../assets/placeholder.png";

const PrepaidService = () => {
  // Mock lounge items data
  const loungeItems = [
    {
      id: 1,
      name: "LKe Lounge",
      rating: 4.7,
      image: placeholder,
      description: "A cozy place with delicious meals and a great view.",
    },
    {
      id: 2,
      name: "Enjohe Lounge",
      rating: 5,
      image: placeholder,
      description: "A vibrant spot with live music and a wide selection of drinks.",
    },
    {
      id: 3,
      name: "Hola Lounge",
      rating: 4.7,
      image: placeholder,
      description: "A relaxed atmosphere with a focus on craft cocktails and small plates.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="prepaid-service-page">

      {/* Hero Section */}
    <HeroSection title="Prepaid Service" subtitle="Exclusive benefits and discounts with the prepaid service" />
      
      {/* Not Subscribed Message */}
      <section className="message-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut", type: "tween" }}
                className="subscription-message glass-card"
              >
                <h4>You are not currently subscribed to any prepaid service</h4>
                <p className="message-description">
                  Subscribe to the prepaid service to enjoy exclusive discounts and benefits
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Available Lounges Section */}
      <section className="lounges-section">
        <Container>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Row className="justify-content-center">
              <Col lg={10}>
                <div className="section-header mb-4">
                  <h2 className="section-title">Available Lounges</h2>
                </div>
              </Col>
            </Row>
            
            <Row className="lounge-list">
              {loungeItems.map((lounge) => (
                <Col key={lounge.id} lg={6} md={12} className="mb-4">
                  <motion.div 
                    variants={itemVariants}
                    className="lounge-card"
                  >
                  <ListCard key={lounge.id} lounge={lounge} />
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>
      
      {/* FAQ Section */}
      <section className="faq-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} className="text-center mb-5">
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
                    <h4>What are the benefits of the prepaid service?</h4>
                  </div>
                  <div className="faq-answer">
                    <p>The prepaid service offers exclusive discounts on the lounges that give the service.</p>
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
                    <h4>How do I subscribe to the prepaid service?</h4>
                  </div>
                  <div className="faq-answer">
                    <p>To subscribe, choose a lounge, complete the form, and make the payment.</p>
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
                    <h4>Is there a minimum subscription period or a time limit?</h4>
                  </div>
                  <div className="faq-answer">
                    <p>No, the prepaid service is flexible with no minimum subscription period.</p>
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

export default PrepaidService;
