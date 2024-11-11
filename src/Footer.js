import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Footer.css";
import Newsletter_img1 from './image/Newslitter_img1.webp'
import Newsletter_img2 from './image/Newslitter_img1.webp'
export const Footer = () => {
  return (
    <div>
     {/* Newsletter Section */}
      <div className="newsletter-section">
        <Container className="newsletter-container">
          <Row className="align-items-center">
            <Col md={5} className="d-none d-md-block">
              <img src={Newsletter_img1} alt="Left Model" className="side-image left-image" />
            </Col>
            
            <Col md={7} className="text-center newsletter-content">
              <h3>Subscribe To Our Newsletter</h3>
              <p className="newsletter-text">
                Don’t miss out on the latest trends, exclusive deals, and special events—subscribe to our newsletter today. Join our newsletter and unlock a world of shopping possibilities! Sign up now and enjoy a special welcome offer on your next purchase! 🛍️💌
              </p>
              <div className='newsletterbtn'>
              <input type="email" placeholder="example@mail.com" className="newsletter-input" />
              <Button variant="dark" className="subscribe-btn">Subscribe Now</Button>
              </div>
              
            </Col>
            
            <Col md={5} className="d-none d-md-block">
              <img src={Newsletter_img2} alt="Right Model" className="side-image right-image" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#support">Support Center</a>
          <a href="#invoicing">Invoicing</a>
          <a href="#contract">Contract</a>
          <a href="#careers">Careers</a>
          <a href="#blog">Blog</a>
        </div>
        <p className="copyright">
          © 2024 Xpro. All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}
