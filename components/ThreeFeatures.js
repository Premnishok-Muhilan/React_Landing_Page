import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
// Import the Lato font
import "typeface-lato";

import ThreeFeaturesData from "../data/ThreeFeaturesData.json";

function ThreeFeatures() {
  return (
    <Container fluid style={{ backgroundColor: "rgb(248, 249, 250)" }}>
      <Row
        className="justify-content-center"
        style={{
          marginTop: "100px",
          marginBottom: "50px",
          backgroundColor: "rgb(248, 249, 250)",
        }}
      >
        {ThreeFeaturesData.map((featureData, index) => (
          <IndivudialFeature featureData={featureData} key={index} />
        ))}
      </Row>
    </Container>
  );
}

function IndivudialFeature({ featureData }) {
  return (
    <Col className="text-center" md={4}>
      <Card
        className="card"
        style={{ backgroundColor: "rgb(248, 249, 250)", border: "none" }}
      >
        <i
          class={featureData.icon}
          style={{ fontSize: "5rem", color: "rgb(13, 110, 253)" }}
        ></i>
        <Card.Body>
          <Card.Title>
            <h3 className="lato-bold">{featureData.title}</h3>
          </Card.Title>
          <Card.Text>
            <p className="lato-light">{featureData.content}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
export { ThreeFeatures };
