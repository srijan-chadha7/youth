import { Col, Row } from "react-bootstrap";
import pic14 from "../Images/pic14.png";

function Youth() {
  return (
    <div style={{ textAlign: "initial"}}>
      <br></br>
      <br></br>

      <Row style={{ textAlign: "initial", marginLeft: "10px" ,backgroundColor: "#CCF5FF" }}>
        <Col sm={8}>
          <h3>
            Concept Note: International Youth and Sustainability Conclave with
            ESG Theme
          </h3>
          <br></br>
          <h3>
            <b>1. Introduction:</b>
          </h3>
          <p>
            In an era characterized by environmental, social, and governance
            (ESG) concerns, the need for global cooperation and youth engagement
            in sustainable development has never been greater. The International
            Youth and Sustainability Conclave aims to bring together young
            leaders, experts, and stakeholders from around the world to explore,
            discuss, and champion ESG principles and practices. This concept
            note outlines the key objectives, themes, and activities for this
            event.
          </p>
        </Col>
        <Col sm={4}>
          <img src={pic14} />
        </Col>
      </Row>
      <br></br>
      <Row style={{ marginLeft: "10px", backgroundColor: "#CCF5FF" }}>
      <br></br>
      <br></br>
      <br></br>


        <h3>
          <b>2. Objectives:</b>
        </h3>
      <br></br>

      <br></br>

        <p>
          - Raise awareness and understanding of ESG principles among the youth.
          <br></br>- Inspire and empower young leaders to become advocates for
          sustainable development.<br></br> - Foster global collaboration and
          networking among young change-makers.<br></br> - Showcase innovative
          ESG initiatives and solutions.
        </p>
      </Row>
      <br></br>
      <Row style={{ marginLeft: "10px",backgroundColor: "#CCF5FF"  }}>
        <h4>
          <b>4. Key Themes and Topics: </b>
          <br></br>
          <b>a. Environmental Responsibility:</b>
        </h4>
        <p>
          {" "}
          - Climate action and mitigation strategies.<br></br> - Biodiversity
          conservation and ecosystem restoration.<br></br> - Sustainable
          agriculture and food systems.<br></br> - Circular economy and waste
          reduction.
        </p>
        <br></br>
        <h4>
          <b>b. Social Equity:</b>
        </h4>
        <p>
          - Social justice and inclusive communities. - Gender equality and
          diversity. - Access to education and healthcare. - Youth engagement in
          community development.
        </p>
        <h4>
          <b>c. Governance & Accountability:</b>
        </h4>
        <p>
          {" "}
          - Ethical business practices and corporate governance. - Transparency
          and responsible leadership. - ESG reporting and measurement. -
          Government policies and regulatory frameworks.
        </p>

        <h4>
          <b>5. Format and Activities:</b>
        </h4>
        <p>
          a. Plenary Sessions: Keynote speeches and panel discussions with
          experts in ESG and sustainability. b. Interactive Workshops:
          Practical sessions on ESG implementation and project development. c.
          Youth Presentations: Opportunities for young leaders to showcase
          their ESG initiatives. d. Networking Sessions: Virtual and in-person
          networking to facilitate collaboration. e. Exhibition: Display of
          innovative ESG projects and solutions. f. Youth Declaration:
          Crafting a youth-led declaration outlining commitments to ESG
          principles.
        </p>
        <h4>
          <b>6. Target Audience:</b>
        </h4>
        <p>
          - Youth leaders (age 18-35) passionate about sustainability and ESG. -
          ESG professionals and experts. - NGOs, academic institutions, and
          governmental bodies. - Corporations committed to ESG initiatives.
        </p>

        <h4>
          <b>7. Expected Outcomes:</b>
        </h4>
        <p>
          - Increased ESG awareness and knowledge among youth. - Networking and
          collaboration opportunities for global youth leaders. - Showcasing of
          innovative ESG projects and solutions. - A youth-led declaration
          outlining commitments to ESG principles.
        </p>

        <h4>
          <b>8. Event Logistics:</b>
        </h4>
        <p>
          - Date: 9th - 10th March - Venue: Symbiosis Viman Nagar - Duration: 2
          days
        </p>

        <h4>
          <b>9. Partnerships and Sponsorships:</b>
        </h4>
        <p>
          Seek partnerships with ESG-focused organizations, academic
          institutions, and sustainability-minded corporations to support the
          event financially and logistically.
        </p>

        <h4>
          <b>10. Conclusion:</b>
        </h4>
        <p>
          The International Youth and Sustainability Conclave with an ESG theme
          will serve as a platform for young leaders to engage, learn, and
          collaborate on pressing global issues. By unlocking the potential of
          youth and promoting ESG principles, we aim to contribute to a more
          sustainable and equitable future for all. ExploreiT is committed to
          making this event a resounding success and invites stakeholders from
          around the world to join us in this endeavor.
        </p>
      </Row>
    </div>
  );
}
export default Youth;
