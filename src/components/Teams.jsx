import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { assetUrl } from "../utils/assetUrl";

const teamsData = [
  {
    id: 1,
    name: "Gabriel Hart",
    designation: "CEO",
    description:
      "A skilled, dedicated team driving innovation, collaboration, and success together.",
    image: assetUrl("assets/images/team1.jpg"),
    fbLink: "https://www.facebook.com/",
    xLink: "https://www.x.com/",
    linkedinLink: "https://www.linkedin.com/",
  },
  {
    id: 2,
    name: "Daniel Smith",
    designation: "Manager",
    description:
      "A experienced manager with a proven track record of leading successful teams.",
    image: assetUrl("assets/images/team2.jpg"),
    fbLink: "https://www.facebook.com/",
    xLink: "https://www.x.com/",
    linkedinLink: "https://www.linkedin.com/",
  },
  {
    id: 3,
    name: "Sarah Willson",
    designation: "UX Designer",
    description:
      "A creative and detail-oriented UX designer passionate about creating intuitive and engaging user experiences.",
    image: assetUrl("assets/images/team3.jpg"),
    fbLink: "https://www.facebook.com/",
    xLink: "https://www.x.com/",
    linkedinLink: "https://www.linkedin.com/",
  },
  {
    id: 4,
    name: "Nicholas Perry",
    designation: "Developer",
    description:
      "A passionate developer with a strong background in building scalable and maintainable web applications.",
    image: assetUrl("assets/images/team4.jpg"),
    fbLink: "https://www.facebook.com/",
    xLink: "https://www.x.com/",
    linkedinLink: "https://www.linkedin.com/",
  },
  {
    id: 5,
    name: "Sophia Pitt",
    designation: "Developer",
    description:
      "A dedicated developer with expertise in modern web technologies and a commitment to writing clean, efficient code.",
    image: assetUrl("assets/images/team5.jpg"),
    fbLink: "https://www.facebook.com/",
    xLink: "https://www.x.com/",
    linkedinLink: "https://www.linkedin.com/",
  },
  {
    id: 6,
    name: "Taylor Lopez",
    designation: "Developer",
    description:
      "A dedicated developer with a passion for creating innovative and user-friendly web applications.",
    image: assetUrl("assets/images/team6.jpg"),
    fbLink: "https://www.facebook.com/",
    xLink: "https://www.x.com/",
    linkedinLink: "https://www.linkedin.com/",
  },
  {
    id: 7,
    name: "Alice Johnson",
    designation: "Content Writer",
    description:
      "A creative and detail-oriented content writer passionate about crafting compelling narratives and engaging copy.",
    image: assetUrl("assets/images/team7.jpg"),
    fbLink: "https://www.facebook.com/",
    xLink: "https://www.x.com/",
    linkedinLink: "https://www.linkedin.com/",
  },
  {
    id: 8,
    name: "Emily Davis",
    designation: "Researcher",
    description:
      "A dedicated researcher with a passion for exploring new ideas and advancing knowledge in their field.",
    image: assetUrl("assets/images/team8.jpg"),
    fbLink: "https://www.facebook.com/",
    xLink: "https://www.x.com/",
    linkedinLink: "https://www.linkedin.com/",
  },
];

const Teams = () => {
  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Teams</h2>
          <div className="subtitle">Some of our experts</div>
        </div>

        <Row>
          {teamsData.map((team) => (
            <Col sm={3} key={team.id}>
              <div className="image">
                <Image src={team.image} alt={team.name} />
                <div className="overlay">
                  <div className="socials">
                    <ul>
                      <li>
                        <a
                          href={team.fbLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href={team.xLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href={team.linkedInLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="content">
                <h3>{team.name}</h3>
                <span className="designation">{team.designation}</span>
                <p>{team.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Teams;
