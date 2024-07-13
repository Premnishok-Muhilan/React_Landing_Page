import { Container, Row, Col } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

function Footer() {
  return (
    <Container>
      <Row style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Col md={6}>
          <Stack gap={0}>
            <div >
              <ul className="list-container">
                <li style={{ marginRight: "20px" }}>
                  <a href="">About</a>
                </li>

                <li className="list-item">
                  <a href="">Contact</a>
                </li>
                <li className="list-item">
                  <a href="">Terms of Use</a>
                </li>
                <li className="list-item">
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div >
              <small>© Your Website 2023. All Rights Reserved.</small>
            </div>
          </Stack>
        </Col>
        <Col md={6} style={{ display: "flex", justifyContent: "flex-end",padding:"10px" }}>
          <div>
          <div style={{ display: "inline-block" }}>
            <i
              class="bi bi-facebook"
              style={{
                fontSize: "28px",
                color: "rgb(13, 110, 253)",
                marginRight: "25px",
              }}
            ></i>
          </div>
          <div style={{ display: "inline-block" }}>
            <i
              class="bi bi-twitter"
              style={{
                fontSize: "28px",
                color: "rgb(13, 110, 253)",
                marginRight: "25px",
              }}
            ></i>
          </div>
          <div style={{ display: "inline-block" }}>
            <i
              class="bi bi-instagram"
              style={{
                fontSize: "28px",
                color: "rgb(13, 110, 253)",
                marginRight: "25px",
              }}
            ></i>
          </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export { Footer };
