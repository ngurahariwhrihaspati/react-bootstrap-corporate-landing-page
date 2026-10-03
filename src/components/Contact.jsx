import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Contact = () => {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>CONTACT US</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className="contact-form">
          <Row>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Enter your Full Name"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                placeholder="Enter your Email Address"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="tel"
                placeholder="Enter your Phone Number"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                placeholder="Enter your message here..."
              />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className="google-map">
        <iframe
          title="Address Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7888.559765011387!2d115.20425877361802!3d-8.664910388180385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2416061ea1ad3%3A0x3db5358b762f6164!2sJero%20Kelakan%20Tegal%20Denpasar!5e0!3m2!1sen!2sid!4v1780627592139!5m2!1sen!2sid"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <i className="fas fa-envelope"></i>hello@domain.com
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>123 Main Street, Anytown,
              USA
            </li>
            <li>
              <i className="fas fa-phone"></i>(123) 456-7890
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
