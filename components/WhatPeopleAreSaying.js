import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import CardData from "../data/CardData.json";

import Card from "react-bootstrap/Card";

function WhatPeopleAreSaying() {
  return (
    <Container fluid style={{ backgroundColor: "rgb(248, 249, 250)" }}>
      <Row>
        <Col md={12} style={{ textAlign: "center", marginTop: "75px" }}>
          <h2>What People Are Saying...</h2>
        </Col>

        {CardData.map((cardData, index) => (
          <IndivudialPeople cardData={cardData} key={index} />
        ))}
      </Row>
    </Container>
  );
}

function IndivudialPeople({ cardData }) {
  return (
    <Col md={4} className="d-flex justify-content-center align-items-center">
      <Card
        style={{ width: "18rem", border: "none" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Image
          className="img-fluid"
          src={require(`../assets/${cardData.image}`)}
          alt="Image Alt Text"
          roundedCircle
          style={{ height: "192px", width: "192px" }}
        />
        <Card.Body>
          <Card.Title className="text-center">
            <h3>{cardData.name}</h3>
          </Card.Title>
          <Card.Text className="text-center">
            <p>{cardData.comment}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export { WhatPeopleAreSaying };
