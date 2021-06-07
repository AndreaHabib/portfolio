import React from "react";
import "./styles/skills.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Skills() {
  return (
    <section className="skills">
      <div
        data-aos="fade-up"
        data-aos-delay="20"
        data-aos-duration="300"
        data-aos-easing="ease-in-out"
        className="container"
      >
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
                    <strong>Frontend</strong>
                  </Card.Title>
                  <Card.Text>
                    <ul style={{ listStyle: "none", padding: "2rem" }}>
                      <li>React</li>
                      <li>Redux</li>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Javascript</li>
                      <li>Restful APIs</li>
                      <li>JavaFX</li>
                      <li>Swift</li>
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
                    <strong>Backend</strong>
                  </Card.Title>
                  <Card.Text>
                    <ul style={{ listStyle: "none", padding: "2rem" }}>
                      <li>Sequelize</li>
                      <li>Javascript</li>
                      <li>Node</li>
                      <li>Ruby on Rails</li>
                      <li>PHP</li>
                      <li>Django</li>
                      <li>Express.js</li>
                      <li>Java</li>
                      <li>Python</li>
                      <li>C++</li>
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
                    <strong>Databases</strong>
                  </Card.Title>
                  <Card.Text>
                    <ul style={{ listStyle: "none", padding: "2rem" }}>
                      <li>PostgreSQL</li>
                      <li>MongoDB</li>
                      <li>MySQL</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex align-items-stretch" md="10" lg="4">
              <Card className="card4" style={{ width: "20rem" }}>
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
                      <li>Data Structures</li>
                      <li>Algorithms</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Skills;
