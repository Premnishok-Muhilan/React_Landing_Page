import { Container, Col, Row, Image } from "react-bootstrap";
import DetailedFeaturesData from "../data/DetailedFeatures.json";
function DetailedFeatures() {
  return (
    <Container fluid>
      {DetailedFeaturesData.map((featureData, index) => (
        featureData.id % 2 === 0 ? <ImageFirst featureData={featureData} key={index} /> : <TextFirst featureData={featureData} key={index} />  
      ))}
    </Container>
  );
}

function TextFirst({ featureData }) {
  return (
    <Row className="no-gutters">
      <Col
        md={6}
        style={{
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
    
          padding: "120px",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <h2>{featureData.title}</h2>

          <p>{featureData.content}</p>
        </div>
      </Col>
      <Col
        md={6}
        style={{

          padding: 0,
          maxWidth: "100%",
          height: "auto",
        }}
      >
        <Image
          fluid
          src={require(`../assets/${featureData.image}.jpg`)}
          alt="Responsive image"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </Col>
    </Row>
  );
}

function ImageFirst({ featureData }) {
  return (
    <Row className="no-gutters">
      <Col
        md={6}
        style={{
   
          padding: 0,
          maxWidth: "100%",
          height: "auto",
        }}
      >
        <Image
          fluid
          src={require(`../assets/${featureData.image}.jpg`)}
          alt="Responsive image"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </Col>
      <Col
        md={6}
        style={{
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
      
          padding: "120px",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <h2>{featureData.title}</h2>

          <p>{featureData.content}</p>
        </div>
      </Col>
    </Row>
  );
}
// function IndivudialDetailedFeature() {
//   return (
//     <Row className="no-gutters">
//       <Col
//         md={6}
//         style={{
//           display: "flex",

//           justifyContent: "center",
//           alignItems: "center",
//           backgroundColor: "teal",
//           padding: "120px",
//         }}
//       >
//         <div style={{ textAlign: "left" }}>
//           <h2>Fully Responsive Design</h2>

//           <p>
//             When you use a theme created by Start Bootstrap, you know that the
//             theme will look great on any device, whether it's a phone, tablet,
//             or desktop the page will behave responsively!
//           </p>
//         </div>
//       </Col>
//       <Col
//         md={6}
//         style={{
//           backgroundColor: "firebrick",
//           padding: 0,
//           maxWidth: "100%",
//           height: "auto",
//         }}
//       >
//         <Image
//           fluid
//           src={require("../assets/FullyResponsiveDesign.jpg")}
//           alt="Responsive image"
//           style={{ objectFit: "cover", width: "100%", height: "100%" }}
//         />
//       </Col>
//     </Row>
//   );
// }

export { DetailedFeatures };
