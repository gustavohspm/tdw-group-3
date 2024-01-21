import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import NavBar from "../globalComponents/NavBar";
import "./FAQs.css";
import Footer from "../globalComponents/Footer";
import chart from "../chart.png";

function FAQs() {
  const circleStyle1 = {
    height: "50px",
    width: "50px",
    backgroundColor: "#EEAD6D",
    borderRadius: "50%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "10px",
  };

  const circleStyle2 = {
    height: "50px",
    width: "50px",
    backgroundColor: "#EDD57F",
    borderRadius: "50%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "10px",
  };

  const circleStyle3 = {
    height: "50px",
    width: "50px",
    backgroundColor: "#61BEAD",
    borderRadius: "50%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "10px",
  };

  const circleStyle4 = {
    height: "50px",
    width: "50px",
    backgroundColor: "#628FC5",
    borderRadius: "50%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "10px",
  };

  const circleStyle5 = {
    height: "50px",
    width: "50px",
    backgroundColor: "#B39AC7",
    borderRadius: "50%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "10px",
  };

  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (eventKey) => {
    setOpenItem(openItem === eventKey ? null : eventKey);
  };

  return (
    <div>
      <NavBar />
      <div className="accordion-container">
        <h2 style={{ textAlign: "left", marginBottom: "20px" }}>
          FAQs - Identifying Sustainable Clothing and Certifications
        </h2>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src={chart}
            alt="Sustainable Clothing Certifications Chart"
            style={{ maxWidth: "50%", height: "auto" }}
          />
        </div>
        <Accordion defaultActiveKey="0" onSelect={toggleItem}>
          <Accordion.Item eventKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div style={{ textAlign: "left", marginLeft: "10px" }}>
                  What are these charts and what are they used for? What does
                  each colour mean?
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div style={{ textAlign: "Left" }}>
                  <div>
                    The clothes available on our platform are categorized based
                    on the certifications that represent them and which also
                    identify the clothes through graphics and their respective
                    colors that identify how sustainable a garment is based on
                    the predominance of its colors, as we can see below.
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Header>
              <div style={{ display: "flex", alignItems: "center" }}>
                {openItem !== "1" && (
                  <span
                    style={{
                      ...circleStyle1,
                      height: "25px",
                      width: "25px",
                      flexShrink: 0,
                    }}
                  ></span>
                )}
                <div style={{ textAlign: "left", marginLeft: "10px" }}>
                  1. Organic Material Certification
                </div>
              </div>
            </Accordion.Header>

            <Accordion.Body>
              <div style={{ textAlign: "Left" }}>
                <span style={circleStyle1}></span>
                <div>
                  <p>
                    <strong>GOTS (Global Organic Textiles Standard):</strong>
                    <br />
                    Certifies products with at least 70% organic agriculture
                    contribution.
                    <br />
                    Ensures environmentally friendly production, better working
                    conditions, and quality assurance.
                    <br />
                    Prohibits hazardous inputs like toxic heavy metals and
                    aromatic solvents.
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="https://global-standard.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      More
                    </a>
                  </div>
                  <br />
                  <p>
                    <strong>OCS (Organic Content Standard):</strong>
                    <br />
                    Enables the use of organic material in processing.
                    <br />
                    Validates the presence and amount of organic material in the
                    final product.
                    <br />
                    Applies to fibers, wool, fabrics, clothes, and upholstery
                    fabrics, excluding leather.
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="https://textileexchange.org/organic-content-standard/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      More
                    </a>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <div style={{ display: "flex", alignItems: "center" }}>
                {openItem !== "2" && (
                  <span
                    style={{
                      ...circleStyle2,
                      height: "25px",
                      width: "25px",
                      flexShrink: 0,
                    }}
                  ></span>
                )}
                <div style={{ textAlign: "left", marginLeft: "10px" }}>
                  2. Fair Trade and Ethical Manufacturing:
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div style={{ textAlign: "Left" }}>
                <span style={circleStyle2}></span>
                <div>
                  <p>
                    <strong>Fair Trade Textile Standard:</strong>
                    <br />
                    Facilitates sustainable and equitable trade relationships.
                    <br />
                    Applicable for end products exported from developing to
                    developed countries.
                    <br />
                    Ensures fair-trade cotton usage and safe working conditions
                    in the supply chain.
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="https://www.fairtrade.net/standard/textile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      More
                    </a>
                  </div>
                  <br />
                  <p>
                    <strong>
                      WRAP (Worldwide Responsible Apparel Production):
                    </strong>
                    <br />
                    Independent certification fostering safe, lawful, humane,
                    and ethical manufacturing.
                    <br />
                    Demonstrates a commitment to social and ethical standards.
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="https://wrapcompliance.org/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      More
                    </a>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <div style={{ display: "flex", alignItems: "center" }}>
                {openItem !== "3" && (
                  <span
                    style={{
                      ...circleStyle3,
                      height: "25px",
                      width: "25px",
                      flexShrink: 0,
                    }}
                  ></span>
                )}
                <div style={{ textAlign: "left", marginLeft: "10px" }}>
                  3. Environmental Impact and Resource Responsibility:
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div style={{ textAlign: "Left" }}>
                <span style={circleStyle3}></span>
                <div>
                  <p>
                    <strong>Bluesign:</strong>
                    <br />
                    Emphasizes responsible resource use and minimal impact on
                    people and the environment.
                    <br />
                    Certifies stringent consumer safety requirements and
                    promotes an ideal production process.
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="https://www.bluesign.com/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      More
                    </a>
                  </div>
                  <br />
                  <p>
                    <strong>SFA (Sustainable Fibre Alliance):</strong>
                    <br />
                    Tackles sustainability challenges in cashmere production.
                    <br />
                    Focuses on the safety and welfare of goats and herders.
                    <br />
                    Developed as the world's first holistic sustainability
                    cashmere standard.
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="https://sustainablefibre.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      More
                    </a>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <div style={{ display: "flex", alignItems: "center" }}>
                {openItem !== "4" && (
                  <span
                    style={{
                      ...circleStyle4,
                      height: "25px",
                      width: "25px",
                      flexShrink: 0,
                    }}
                  ></span>
                )}
                <div style={{ textAlign: "left", marginLeft: "10px" }}>
                  4. Animal Welfare Certification:
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div style={{ textAlign: "Left" }}>
                <span style={circleStyle4}></span>
                <div>
                  <p>
                    <strong>RWS (Responsible Wool Standard):</strong>
                    <br />
                    Ensures the proper treatment of sheep and maintains the
                    quality of grazing land.
                    <br />
                    Provides verification of farm-level practices, allowing
                    brands to claim sustainable wool sourcing.
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="https://textileexchange.org/responsible-wool-standard/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      More
                    </a>
                  </div>
                  <br />
                  <p>
                    <strong>RDS (Responsible Down Standard):</strong>
                    <br />
                    Ensures animal welfare in down and feather products.
                    <br />
                    Examines various animal products to guarantee their welfare.
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="https://textileexchange.org/responsible-down-standard/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      More
                    </a>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <div style={{ display: "flex", alignItems: "center" }}>
                {openItem !== "5" && (
                  <span
                    style={{
                      ...circleStyle5,
                      height: "25px",
                      width: "25px",
                      flexShrink: 0,
                    }}
                  ></span>
                )}
                <div style={{ textAlign: "left", marginLeft: "10px" }}>
                  5. Textile Industry Safety and Workplace Conditions:
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div style={{ textAlign: "Left" }}>
                <span style={circleStyle5}></span>
                <div>
                  <p>
                    <strong>FWF (Fair Wear Foundation):</strong>
                    <br />
                    Works for safer working conditions and sustainable workplace
                    improvements.
                    <br />
                    Brands can prioritize manufacturers certified by FWF for
                    safe working conditions.
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="https://www.fairwear.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      More
                    </a>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <p style={{ marginTop: "20px" }}>
          These categories cover a range of certifications addressing
          environmental impact, ethical manufacturing, animal welfare, and
          workplace conditions in the textile industry.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default FAQs;
