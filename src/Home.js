import React, { useState } from 'react';
import { Carousel, Card, Button, Container, Row, Col } from "react-bootstrap";
import products from './Product.js'; // Import products data
import hero_bg1 from './image/hero_bag1.jpg'
import hero_bg2 from './image/hero_bag2.jpg'
import hero_bg3 from './image/hero_bag3.jpg'
import marquee_img1 from './image/marquee_img1.png'
import marquee_img2 from './image/marquee_img2.png'
import marquee_img3 from './image/marquee_img3.png'
import {insta_modal_img1,insta_modal_img2,insta_modal_img3,insta_modal_img4,insta_modal_img5,insta_modal_img6,insta_modal_img7} from './utils/images.js'
import './Home.css';

export const Home = () => {
  const [showAll, setShowAll] = useState(false);

  // Display the first 6 products if showAll is false, else show all products
  const displayedProducts = showAll ? products : products.slice(0, 6);

  return (
    <div className="page-content">
      {/* Hero Section with Carousel */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={hero_bg1} alt="First slide" />
          <Carousel.Caption>
            <h3>Ultimate Sale</h3>
            <p>Find the perfect bag for every occasion at BagZone.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hero_bg2} alt="Second slide" />
          <Carousel.Caption >
            <h3>Trendy Collections</h3>
            <p>Stay on top of fashion with our latest designs.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hero_bg3} alt="Third slide" />
          <Carousel.Caption >
            <h3>Quality You Can Trust</h3>
            <p>Exceptional materials and craftsmanship for long-lasting use.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Animated Marquee for Brand Logos */}
      <div className="marquee-container mt-3" >
        <marquee>
          <img src={marquee_img1} alt="Brand 1" className="brand-logo" />
          <img src={marquee_img2} alt="Brand 2" className="brand-logo" />
          <img src={marquee_img3} alt="Brand 3" className="brand-logo" />
        </marquee>
      </div>

      {/* Card Section for Brand Bags */}
      <Container className="cards-container">
        <h2>Our Top Picks</h2>
        <Row>
          {displayedProducts.map((data, idx) => (
            <Col sm={6} md={3} lg={4} key={data.id}>
              <Card>
                <Card.Img variant="top" src={data.image} />
                <Card.Body>
                  <Card.Title>{data.productName}</Card.Title>
                  <Card.Text>Price: ₹{data.price}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Button className="view-more-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "View More"}
        </Button>
      </Container>

      {/* Instagram Section */}
      <Container className="instagram-container">
        <h3>Follow Us On Instagram</h3>
        <p className="instagram-subtitle">
          Stay connected and get inspired by following us on Instagram! 🌟
        </p>
        <Row className="justify-content-center">
          <Col xs={6} sm={4} md={3} lg={2} className="insta-img">
            <img src={insta_modal_img1} alt="Instagram 1" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className="insta-img">
            <img src={insta_modal_img2} alt="Instagram 2" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className="insta-img">
            <img src={insta_modal_img3} alt="Instagram 3" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className="insta-img">
            <img src={insta_modal_img4} alt="Instagram 4" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className="insta-img">
            <img src={insta_modal_img5} alt="Instagram 5" />
          </Col>
        
        </Row>
      </Container>
    </div>
  );
};

export default Home;
