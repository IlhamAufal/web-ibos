import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./tentangStyle.css";

const sejarahKomunitas = () => {
  return (
    <Container style={{ marginTop: "80px" }}>
      <h5
        className="mySubMenu1"
        style={{ marginBlock: "auto", fontWeight: "bold" }}
      >
        Sejarah Komunitas IBOS
      </h5>
      <Row
        className="bg-white mt-4"
        style={{ padding: "20px", borderRadius: "15px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)"}}
      >
        <Col className="col-auto"></Col>
        <Col>
          <div className="text-justify">
            Lorem ipsum dolor sit amet consectetur. Curabitur sit enim in
            vulputate faucibus suspendisse sit. Vulputate eros nulla rutrum
            felis quam. Nulla elit elit ut ut eros ac velit. Et consequat massa
            adipiscing dignissim odio. Auctor etiam sed in aliquet eleifend
            arcu. Ut ultrices ac enim mattis lorem. Lorem et diam nulla est. In
            lorem pretium urna nibh condimentum aliquam. Enim turpis at sodales
            leo eget commodo sem volutpat. Malesuada mauris accumsan sed
            convallis sed facilisis. Euismod dignissim ut tincidunt lobortis
            vitae nunc pulvinar. Scelerisque lacus eget egestas est magna
            fermentum velit senectus sed. Non ornare lectus sollicitudin lorem
            tortor. Suspendisse urna molestie dolor sit id. Mauris diam risus
            dictumst tortor. Sed scelerisque sapien faucibus ut risus enim nam
            id. Feugiat ut nibh tellus congue eget. A a sit pretium sed sit
            blandit blandit feugiat eget. Risus senectus tellus auctor ante
            tempor scelerisque diam tellus pulvinar.
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default sejarahKomunitas;
