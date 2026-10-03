import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Pagination from "react-bootstrap/Pagination";
import { assetUrl } from "../utils/assetUrl";

const worksData = [
  {
    id: 2,
    link: "Project 2",
    image: assetUrl("assets/images/img2.jpg"),
    title: "Project 2",
    subtitle: "Description of Project 2",
  },
  {
    id: 3,
    link: "Project 3",
    image: assetUrl("assets/images/img3.jpg"),
    title: "Project 3",
    subtitle: "Description of Project 3",
  },
  {
    id: 4,
    link: "Project 4",
    image: assetUrl("assets/images/img4.jpg"),
    title: "Project 4",
    subtitle: "Description of Project 4",
  },
  {
    id: 6,
    link: "Project 6",
    image: assetUrl("assets/images/img6.jpg"),
    title: "Project 6",
    subtitle: "Description of Project 6",
  },
  {
    id: 7,
    link: "Project 7",
    image: assetUrl("assets/images/img7.jpg"),
    title: "Project 7",
    subtitle: "Description of Project 7",
  },
  {
    id: 8,
    link: "Project 8",
    image: assetUrl("assets/images/img8.jpg"),
    title: "Project 8",
    subtitle: "Description of Project 8",
  },
  {
    id: 9,
    link: "Project 9",
    image: assetUrl("assets/images/img9.jpg"),
    title: "Project 9",
    subtitle: "Description of Project 9",
  },
  {
    id: 10,
    link: "Project 10",
    image: assetUrl("assets/images/img10.jpg"),
    title: "Project 10",
    subtitle: "Description of Project 10",
  },
  {
    id: 12,
    link: "Project 12",
    image: assetUrl("assets/images/img12.jpg"),
    title: "Project 12",
    subtitle: "Description of Project 12",
  },
  {
    id: 13,
    link: "Project 13",
    image: assetUrl("assets/images/img13.jpg"),
    title: "Project 13",
    subtitle: "Description of Project 13",
  },
  {
    id: 14,
    link: "Project 14",
    image: assetUrl("assets/images/img14.jpg"),
    title: "Project 14",
    subtitle: "Description of Project 14",
  },
  {
    id: 15,
    link: "Project 15",
    image: assetUrl("assets/images/img15.jpg"),
    title: "Project 15",
    subtitle: "Description of Project 15",
  },
];

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const Works = () => {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Works</h2>
          <div className="subtitle">
            Our portfolio showcases a diverse range of projects
          </div>
        </div>
        <Row className="portfoliolist">
          {worksData.map((work) => {
            return (
              <Col sm={4} key={work.id}>
                <div className="portfolio-wrapper">
                  <a href={work.link}>
                    <Image src={work.image} />
                    <div className="label text-center">
                      <h3>{work.title}</h3>
                      <p>{work.subtitle}</p>
                    </div>
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
        <Pagination>{items}</Pagination>
      </Container>
    </section>
  );
};

export default Works;
