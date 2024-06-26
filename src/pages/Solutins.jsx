import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import icon1 from '../assets/images/icon1.png';
import icon2 from '../assets/images/icon2.png';
import map from '../assets/images/map.png';
import Testimonials from './Testimonials';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Features from '../components/Features';
import '../App.css';

const Solutions = () => {
  return (
    <>
      {/* Card part */}
      <Container className='card-box'>
        <h2 className='sub-title'>Build and scale business solutions with us.</h2>
        <Row xs={1} sm={2} md={3} lg={3} className="mt-3">
          <Col>
            <Card className="h-100">
              <Card.Body className="text-center">
                <img className='cloud' src={icon1} height='100' width='100' alt="Icon1" />
                <Card.Title>Innovative Solutions</Card.Title>
                <Card.Text>
                  We provide innovative solutions to your business problems, offering creative strategies and cutting-edge technologies.
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button variant="outline-primary">Learn More</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card className="h-100">
              <Card.Body className="text-center">
                <img className='cloud' src={icon2} height='100' width='100' alt="Icon2" />
                <Card.Title>Consulting Services</Card.Title>
                <Card.Text>
                  Our consulting services are tailored to your needs, providing expert advice and guidance to help you succeed.
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button variant="outline-primary">Learn More</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card className="h-100">
              <Card.Body className="text-center">
                <img className='cloud' src={icon1} height='100' width='100' alt="Icon1" />
                <Card.Title>Custom Solutions</Card.Title>
                <Card.Text>
                  We develop custom solutions to meet your specific business needs, ensuring optimal performance and efficiency.
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button variant="outline-primary">Learn More</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <hr></hr>
      {/* Map part */}
      <div className='container map-box'>
        <h2 className='sub-title'>Business sucks locally, so screw global ambitions.</h2>
        <Container fluid className="d-flex justify-content-center align-items-center ">
          <img src={map} alt="Banner" className="img-fluid " />
        </Container>
        <br />
        <div className="d-flex justify-content-center">
          <Button variant="outline-primary" size="lg">Explore Established Marketplaces</Button>
        </div>
      </div>
      {/* Feature part */}
      <Features />
      <Testimonials />
      <Banner />
      <Footer />
    </>
  );
};

export default Solutions;