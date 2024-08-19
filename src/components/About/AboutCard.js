import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut ! Je m'appelle <span className="purple">Louis Marec </span>
            et je viens de <span className="purple"> Rennes.</span>
            <br />
            Je suis alternant chez BCPE-SI.
            <br />
            Diplomé d'un BTS SIO, je suis en Bachelor à l'EPSI pour le titre d'ingénieur DEVOPS.
            <br />
            <br />
            EN plus du Code, d'autre activité me passionne !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jeux Vidéo
            </li>
            <li className="about-activity">
              <ImPointRight /> Films
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Computer Science is gaslighting rocks into thinking!"{" "}
          </p>
          <footer className="blockquote-footer">NaniLemons</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
