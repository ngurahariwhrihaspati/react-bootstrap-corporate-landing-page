import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
      console.log("scrollY", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container fluid>
      <div className="copyright">
        &copy; 2024 Your Company. All rights reserved.
      </div>
      <div className="socials">
        <ul>
          <li>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
      {showTopBtn && (
        <div
          className="go-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        ></div>
      )}
      {console.log("Footer render", showTopBtn)}
    </Container>
  );
};

export default Footer;
