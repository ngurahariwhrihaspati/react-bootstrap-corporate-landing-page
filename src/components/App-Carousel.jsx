import Carousel from "react-bootstrap/Carousel";
import { assetUrl } from "../utils/assetUrl";

var data = [
  {
    id: 1,
    image: assetUrl("assets/images/img-hero1.jpg"),
    title: "The perfect design for your website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.",
    link: "#",
  },
  {
    id: 2,
    image: assetUrl("assets/images/img-hero2.jpg"),
    title: "Start your future financial plan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.",
    link: "#",
  },
  {
    id: 3,
    image: assetUrl("assets/images/img-hero3.jpg"),
    title: "Enjoy the experience of our services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.",
    link: "#",
  },
];

const AppCarousel = () => {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {data.map((item) => (
          <Carousel.Item key={item.id}>
            <img src={item.image} className="d-block w-100" alt={item.title} />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} className="btn btn-primary">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default AppCarousel;
