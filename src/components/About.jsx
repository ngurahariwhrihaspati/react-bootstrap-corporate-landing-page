import { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import { assetUrl } from "../utils/assetUrl";

const About = () => {
  const [visible, setVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const html = visible ? 90 : 0;
  const responsive = visible ? 80 : 0;
  const analytic = visible ? 85 : 0;

  return (
    <section id="about" className="block about-block" ref={aboutRef}>
      <Container fluid="md">
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">Learn more about our company</div>
        </div>
        <Row>
          <Col sm={6}>
            <img src={assetUrl("assets/images/img1.jpg")} alt="About Us" />
          </Col>
          <Col sm={6}>
            <p>
              Welcome to Corporate, where professionalism meets innovation. We
              are dedicated to helping businesses and individuals achieve their
              goals with tailored solutions that inspire growth and success. Our
              team combines expertise, creativity, and technology to deliver
              services that truly make a difference. At Corporate, we value
              trust, integrity, and long-term partnerships.
            </p>

            <div className="progress-block">
              <h4>HTML / CSS / JAVASCRIPT</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className="progress-block">
              <h4>Responsive Design</h4>
              <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>
            <div className="progress-block">
              <h4>Analytics</h4>
              <ProgressBar now={analytic} label={`${analytic}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
