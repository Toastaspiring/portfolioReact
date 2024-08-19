import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ MOI ME <span className="purple"> PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
              Je suis passioné de Développement et pense avoir appris certaine chose... 🤷‍♂️
              <br />
              <br />Je connais mes classics tel que
              <i>
                <b className="purple"> Python, Javascript and C#. </b>
              </i>
              <br />
              <br />
              Mes points d'intêret sont de construire de nouvelles&nbsp;
              <i>
                <b className="purple">Applications Métiers et des modules Web </b> ainsi
                que les domaine touchant à {" "}
                <b className="purple">
                  l'IA.
                </b>
              </i>
              <br />
              <br />
              Quand l'opportunité se présente, J'aime aussi Touché au domaine serveurs grâce à <b className="purple">Node.js</b> et
              <i>
                <b className="purple">
                  {" "}
                  les Framework moderne de Javascript
                </b>
              </i>
              &nbsp; comme
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTACT</h1>
            <p>
              N'hésiter pas à vous <span className="purple">connecter</span> avec moi
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Toastaspiring"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/marec-louis/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
