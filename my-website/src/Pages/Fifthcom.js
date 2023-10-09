import { Col, Row } from "react-bootstrap";
import pic8 from "../Images/pic8.jpg";
import pic9 from "../Images/pic9.png";

function Fifthcom() {
  return (
    <>
      <Row>
        <Col>
          <h4>Venue: India Habitat Centre</h4>
          <img
            className="c-block"
            style={{ width: "700px" }}
            src={pic8}
            alt="First slide"
          />
        </Col>
        <Col>
          <h4>Watch Video</h4>
          <img
            className="c-block"
            w={10}
            style={{ width: "700px" }}
            src={pic9}
            alt="First slide"
          />
        </Col>
      </Row>
      <br></br>
      <Row style={{textAlign:"initial", marginLeft:"15px"}}>
        <p>
          <b>ABOUT THE VENUE: </b>Spread over an area of nine acres the IHC
          campus has created an island of architectural excellence in the busy
          metropolis of India's capital, Delhi. The campus weaves in a unique
          interplay of institutions, supporting infrastructure and facilities
          such as conference venues, auditoria, hospitality areas, the library
          and resource centre, and art galleries. Elegantly designed, the campus
          is a hub of activity while simultaneously being serene. The
          architectural and design elements that Stein has built in enable this
          paradoxical blend.
        </p>
        <p>
         <b>VENUE ADDRESS:</b>  India Habitat Centre (IHC),Lodhi Road Near Airforce Bal
          Bharati School, Lodhi Rd, Lodhi Estate, New Delhi, Delhi 110003
        </p>
      </Row>
    </>
  );
}
export default Fifthcom;
