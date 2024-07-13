import { Container, Col, Row, Image, Form, Button } from "react-bootstrap";

function BackgroundNew({ height, pContent }) {
  return (
    <Container fluid>
      <Row style={{ position: "relative" }}>
        <Col
          style={{
            backgroundColor: "green",
            padding: "0px",
          }}
        >
          <Image
            src={require("../assets/background_image.jpg")}
            style={{ width: "100%", height: height }}
          />

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <p
              className="lato-bold"
              style={{
                fontSize: "35px",
                color: "white",
                textAlign: "center",

                padding: "0px",
              }}
            >
              {pContent}
              {/* Generate more leads with a professional landing page! */}
            </p>
            <Form className="d-flex justify-content-center">
              <Form.Control
                type="email"
                placeholder="Email Address"
                className="me-2"
                style={{ height: "70px", width: "450px" }}
              />
              <Button variant="primary">Submit</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export { BackgroundNew };
