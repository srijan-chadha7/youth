import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import pic2 from "../Images/pic2.jpg";
import pic3 from "../Images/pic3.jpg";


function Secondcom() {
  return (
    <Carousel style={{backgroundColor:"#1A3C1C"}}>
      <Carousel.Item >
        <Row style={{color:"white", marginTop:"20px"}}>
          <Col sm={4}>
            <img className="d-block w-70" src={pic2} alt="First slide"  style={{paddingLeft:"140px"}} />
            <br></br>
            <br></br>

          </Col>
          <Col sm={8}>
            <h2>Message from Dr. Ram Boojh, Convener, ICSE 2023</h2>
            <br></br>
            <p>
              A very warm welcome to the 5th International Conference on
              Sustainability Education (ICSE), focused on the theme "Educating
              for Climate Action and Sustainability. In today's world, this
              theme holds immense significance as climate change remains one of
              humanity"... Read More
            </p>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row style={{color:"white", marginTop:"20px"}}>
          <Col sm={4}>
            <img className="d-block w-70" src={pic3} alt="First slide" style={{paddingLeft:"140px"}}/>
            <br></br>
            <br></br>
          </Col>
          <Col sm={8}>
            <h2>Chairman’s Vision: ICSE 2023</h2>
            <br></br>
            <p>
              Welcome to the 5th International Conference on Sustainability
              Education (ICSE), focused on the theme "Educating for Climate
              Action and Sustainability." This theme holds great significance in
              today's world, as climate change remains one of humanity's most
              pressing challenges.... Read More
            </p>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}

export default Secondcom;
