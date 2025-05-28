import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import './hero-section.css';

const HeroSection = (props) => {
  return (
    <section className="hero-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-content"
            >
              <h1 className="hero-title">{props.title}</h1>
              <p className="hero-subtitle">{props.subtitle}</p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
