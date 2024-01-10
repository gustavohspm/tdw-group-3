import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import NavBar from '../globalComponents/NavBar';

function FAQs() {
  return (
    <div>
      <NavBar />
      <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Q1: How can I identify sustainable clothing?</Accordion.Header>
        <Accordion.Body>
        Our platform ensures the identification of sustainable clothing through various certifications. Look for labels such as GOTS, Fair Trade, Bluesign, and others mentioned in our terms and conditions. These certifications guarantee environmentally friendly production, fair working conditions, and ethical practices throughout the supply chain.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Q2: What is GOTS certification, and how does it contribute to sustainability?</Accordion.Header>
        <Accordion.Body>
        The Global Organic Textile Standard (GOTS) certification ensures that textile products have a minimum of 70% organic agriculture contribution. It guarantees environmentally friendly production, better working conditions, and the prohibition of hazardous inputs such as toxic heavy metals and aromatic solvents.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Q3: What does the Fair Trade certificate signify in the textile industry?</Accordion.Header>
        <Accordion.Body>
        The Fair Trade certificate, issued by the World Fair Trade Organisation, ensures sustainable and equitable trade relationships. It focuses on fair working conditions, primarily using fair-trade cotton, and applies to end products exported from developing to developed countries. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Q4: How does Bluesign contribute to sustainable textile production?</Accordion.Header>
        <Accordion.Body>
        Bluesign certification emphasizes the responsible use of resources and minimal impact on people and the environment. It combines consumer safety, water and air emissions, and occupational health, ensuring the final textile product meets stringent consumer safety requirements worldwide.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Q5: What is SA8000 certification, and how does it promote social standards?</Accordion.Header>
        <Accordion.Body>
        SA8000 is a leading social certification program ensuring a fair and decent environment for workers. It checks for criteria such as child labor, health, and safety, freedom of association, and right to collective bargaining, promoting the highest social standards.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Q6: How does the Zero Discharge of Hazardous Chemicals (ZDHC) certification improve environmental conditions?</Accordion.Header>
        <Accordion.Body>
        ZDHC aims to treat toxic substances in the textile, leather, and footwear value chain, assuring safer health conditions. It involves signatory brands, value chain affiliates, and associates to improve the environment and people’s wellbeing.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Q7: What does Responsible Wool Standard (RWS) certification guarantee in wool sourcing?</Accordion.Header>
        <Accordion.Body>
        RWS focuses on proper treatment of sheep and maintaining the quality of land they graze on. It provides verification of practices at the farm level, ensuring the best quality of wool following global standards.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>Q8: How does the Recycled Claim Standard (RCS) contribute to sustainable fashion?</Accordion.Header>
        <Accordion.Body>
        RCS is a chain of custody standard tracking recycled raw materials in the supply chain. It ensures minimal wastage in processing stages and checks for the presence and amount of recycled material in the final product.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header>Q9: What is the Sustainable Fibre Alliance (SFA) and its role in the cashmere industry?</Accordion.Header>
        <Accordion.Body>
        SFA's Sustainable Cashmere Standard tackles sustainability challenges in cashmere production, focusing on the safety and welfare of goats and herders. It is the world’s first holistic sustainability cashmere standard.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10">
        <Accordion.Header>Q10: How does Cradle to Cradle certification contribute to eco-intelligent product design?</Accordion.Header>
        <Accordion.Body>
        Cradle to Cradle certification is a multi-attribute label showcasing efforts in eco-intelligent product design. It focuses on eco-friendly and recyclable materials, efficient use of water and energy, making it applicable from raw materials to finished products.
        For more details on certifications and sustainable practices, refer to our terms and conditions and the provided references.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    
  );
}

export default FAQs;