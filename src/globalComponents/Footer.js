import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
      <footer className="custom-footer">
        <Container fluid>
          <Row>
            <Col md={3} className="d-flex justify-content-center">
              <Link to="/about" className="text-light mx-2">About</Link>
            </Col>
            <Col md={3} className="d-flex justify-content-center">
              <Link to="/FAQs" className="text-light mx-2">FAQs</Link>
            </Col>
            <Col md={3} className="d-flex justify-content-center">
              <Link to="/terms" className="text-light mx-2">Terms & Conditions</Link>
            </Col>
            <Col md={3} className="d-flex justify-content-center">
              <Link to="/accessibility" className="text-light mx-2">Accessibility</Link>
            </Col>
          </Row>
        </Container>
      </footer>
    );
}
  
export default Footer;
