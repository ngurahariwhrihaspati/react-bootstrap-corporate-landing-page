import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const servicesData = [
  {
    id: 1,
    icon: "fas fa-code",
    title: "Web Development",
    description:
      "We build responsive and high-performance websites tailored to your business needs.",
  },
  {
    id: 2,
    icon: "fas fa-mobile-alt",
    title: "Mobile App Development",
    description:
      "Our team creates user-friendly mobile applications for both iOS and Android platforms.",
  },
  {
    id: 3,
    icon: "fas fa-paint-brush",
    title: "UI/UX Design",
    description:
      "We design intuitive and engaging user interfaces to enhance user experience.",
  },
  {
    id: 4,
    icon: "fas fa-chart-line",
    title: "Consulting",
    description:
      "Our experts provide strategic consulting to help you achieve your business goals.",
  },
  {
    id: 5,
    icon: "fas fa-cloud",
    title: "Cloud Services",
    description:
      "We offer cloud solutions to improve scalability, security, and performance.",
  },
  {
    id: 6,
    icon: "fas fa-headset",
    title: "Support",
    description:
      "Our dedicated support team is available to assist you with any questions or issues.",
  },
];

const AppServices = () => {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Services</h2>
          <div className="subtitle">Here are the services we offer</div>
        </div>

        <Row>
          {servicesData.map((service) => {
            return (
              <Col sm={4} className="holder" key={service.id}>
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default AppServices;
