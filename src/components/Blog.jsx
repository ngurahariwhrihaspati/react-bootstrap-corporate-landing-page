import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { assetUrl } from "../utils/assetUrl";

const blogPostsData = [
  {
    id: 1,
    title: "Card Title",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    date: "March 15, 2023",
    image: assetUrl("assets/images/blog1.jpg"),
  },
  {
    id: 2,
    title: "Card Title",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    date: "March 16, 2023",
    image: assetUrl("assets/images/blog2.jpg"),
  },
  {
    id: 3,
    title: "Card Title",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    date: "March 17, 2023",
    image: assetUrl("assets/images/blog3.jpg"),
  },
  {
    id: 4,
    title: "Card Title",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    date: "March 18, 2023",
    image: assetUrl("assets/images/blog4.jpg"),
  },
  {
    id: 5,
    title: "Card Title",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    date: "March 19, 2023",
    image: assetUrl("assets/images/blog5.jpg"),
  },
  {
    id: 6,
    title: "Card Title",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    date: "March 20, 2023",
    image: assetUrl("assets/images/blog6.jpg"),
  },
];

const Blog = () => {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Latest Blog Posts</h2>
          <div className="subtitle">Read our latest news and updates</div>
        </div>
        <Row>
          {blogPostsData.map((post) => (
            <Col sm={4} key={post.id}>
              <div className="holder">
                <Card>
                  <Card.Img variant="top" src={post.image} />
                  <time>{post.date}</time>
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.content}</Card.Text>
                    <a href="#" className="btn btn-primary">
                      READ MORE <i className="fas fa-chevron-right"></i>
                    </a>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
