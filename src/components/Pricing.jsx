import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const pricingData = [
  {
    id: 1,
    plan: "Basic",
    price: "$9.99/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
  },
  {
    id: 2,
    plan: "Pro",
    price: "$19.99/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
  },
  {
    id: 3,
    plan: "Enterprise",
    price: "$29.99/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="block pricing-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Pricing &amp; Plans</h2>
          <div className="subtitle">Choose a plan that works for you</div>
        </div>
        <Row>
          {pricingData.map((plan) => (
            <Col sm={4} key={plan.id}>
              <div className="heading">
                <h3>{plan.plan}</h3>
                <span className="price">{plan.price}</span>
              </div>
              <div className="content">
                <ListGroup>
                  {plan.features.map((feature, index) => (
                    <ListGroup.Item key={index}>{feature}</ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
              <div className="btn-holder">
                <a href="#" className="btn btn-primary">
                  Order Now
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;
