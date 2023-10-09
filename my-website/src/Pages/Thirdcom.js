import { Button, Col, Row } from "react-bootstrap";
import pic4 from "../Images/pic4.jpg";
import pic5 from "../Images/pic5.jpg";
import pic6 from "../Images/pic6.jpg";


function Thirdcom() {
  return (
    <>
      <br></br>
      <br></br>
      <h1>ICSE 2023</h1>
      <Row>
        <Col
          sm={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
           
          }}
        >
          <div>
            <img
              className="d-block w-50"
              src={pic4}
              alt="First slide"
              style={{ borderRadius: "600px",  marginLeft:"100px" }}
            />
            <h4>Registration</h4>
            <Button variant="success">Registration Link</Button>
          </div>
        </Col>

        <Col
          sm={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <img
              className="d-block w-50"
              src={pic5}
              alt="First slide"
              style={{ borderRadius: "600px",  marginLeft:"100px" }}
            />
            <h4>Souvenir and Abstract Volume </h4>
            <Button variant="success">Download pdf</Button>
          </div>
        </Col>
        <Col
          sm={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <img
              className="d-block w-50"
              src={pic6}
              alt="First slide"
              style={{ borderRadius: "600px",  marginLeft:"100px" }}
            />
            <h4>Concept note</h4>
            <Button variant="success">Download pdf</Button>
          </div>
        </Col>
      </Row>
    </>
  );
}
export default Thirdcom;
