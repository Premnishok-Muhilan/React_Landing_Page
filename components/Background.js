import { Container, Col, Row, Image, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Background({ height, pContent }) {
  return (
    <Container fluid className="p-0">
      <Row className="align-items-center">
        <Col md={12} className="text-center position-relative">
          <Image
            src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-masthead.jpg"
            style={{ width: "100%", height: height }}
          />
          <div className="position-absolute top-50 start-50 translate-middle text-white">
            <p
              className="fs-4 fs-md-5 lato-bold"
              style={{ fontSize: "50px", color: "white" }}
            >
              {pContent}
            </p>
            <Form className="d-flex justify-content-center">
              <Form.Control
                type="email"
                placeholder="Email Address"
                className="me-2"
                style={{ height: "auto" }}
              />
              <Button variant="primary">Submit</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export { Background };
