import React from "react";
import "./styles/skills.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";
import ScrollTrigger from "react-scroll-trigger";

function Skills() {
  const [lastYPos] = React.useState(0);
  const [shouldShowActions, setShouldShowActions] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingDn = yPos >= lastYPos;

      setShouldShowActions(isScrollingDn);

      //setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);
  return (
    <section className="skills">
      <motion.div
        className="skills__wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: shouldShowActions ? 1 : 0 }}
        transition={{ opacity: { duration: 2 } }}
      >
        <div className="container">
          <div className="heading">
            <h2
              style={{
                padding: "1.3rem",
                textAlign: "center",
              }}
            >
              SKILLS
            </h2>
          </div>
          <Container fluid>
            <Row>
              <Col className="d-flex align-items-stretch" md="10" lg="4">
                <Card className="card1" style={{ width: "20rem" }}>
                  <Card.Img variant="top" />
                  <Card.Body>
                    <Card.Title>
                      <strong>Wev Development</strong>
                    </Card.Title>
                    <Card.Text>
                      <ul style={{ listStyle: "none", padding: "2rem" }}>
                        <li>React</li>
                        <li>Redux</li>
                        <li>PostgreSQL</li>
                        <li>Sequelize</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Node</li>
                        <li>Restful APIs</li>
                        <li>Ruby on Rails</li>
                        <li>PHP</li>
                        <li>Express.js</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="d-flex align-items-stretch" md="10" lg="4">
                <Card className="card2" style={{ width: "20rem" }}>
                  <Card.Img variant="top" />
                  <Card.Body>
                    <Card.Title>
                      <strong>Software Engineer</strong>
                    </Card.Title>
                    <Card.Text>
                      <ul style={{ listStyle: "none", padding: "2rem" }}>
                        <li>Java</li>
                        <li>JavaFX</li>
                        <li>Python</li>
                        <li>C++</li>
                        <li>Data Structures</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="d-flex align-items-stretch" md="10" lg="4">
                <Card className="card3" style={{ width: "20rem" }}>
                  <Card.Img variant="top" />
                  <Card.Body>
                    <Card.Title>
                      <strong>Tools And Expertise</strong>
                    </Card.Title>
                    <Card.Text>
                      <ul style={{ listStyle: "none", padding: "2rem" }}>
                        <li>Microsoft Word</li>
                        <li>Excel</li>
                        <li>Powerpoint</li>
                        <li>Visual Studio</li>
                        <li>Visual Studio Code</li>
                        <li>Git/Git BASH</li>
                        <li>Github</li>
                        <li>Postman</li>
                        <li>Anaconda</li>
                        <li>Spydr</li>
                        <li>Ubuntu-18.04 WSL 2</li>
                        <li>Windows 10</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
