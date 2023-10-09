import React from "react";
import pic11 from "../Images/pic11.jpg";
import { Col, Row } from "react-bootstrap";

function Seventh() {
  return (
    <>
      <br />
      <br />

      <Row style={{backgroundColor:"#02445D", color:"white"}}>
        <Col>
          <p>
            Get in touch:
            <br />
            info@mobiusf.org
            <br />
            icse@mobiusf.org
          </p>
        </Col>
        <Col>
          <p>SECRETARIAT</p>
          <img src={pic11} />
          <br></br>
          <br></br>

          <p>
            301, Antriksh Bhawan, 22 K.G. Marg,
            <br></br>
            New Delhi - 110001, India
            <br></br>
            Phone: +91 11 4985 4523, 4943 3823
          </p>
        </Col>
        <Col>
          <p>SOCIAL MEDIA LINKS</p>
        </Col>
      </Row>
    </>
  );
}

export default Seventh;
