import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

var testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO, Company A",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Mary Smith",
    designation: "Marketing Director, Company A",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    name: "Jane Johnson",
    designation: "CEO, Company B",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client Testimonials</h2>
          <div className="subtitle">What our customers say about us</div>
        </div>
        <Carousel controls={false} indicators={false} interval={3000}>
          {testimonialsData.map((testimonial) => (
            <Carousel.Item key={testimonial.id}>
              <blockquote>
                <p>{testimonial.description}</p>
                <cite>
                  <span className="name">{testimonial.name}</span>
                  <span className="designation">{testimonial.designation}</span>
                </cite>
              </blockquote>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonials;
