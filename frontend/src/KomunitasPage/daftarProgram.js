import React from "react";
import { Row, Col, Form, Container } from "react-bootstrap";

const categories = [
  {
    title: "Program Bidang Iman",
    programs: ["MTT", "Persekutuan Doa", "Forum Hindu"],
  },
  {
    title: "Program Bidang Budaya",
    programs: [
      "Tari Tradisional",
      "Paduan Suara",
      "Band",
      "Tari Modern",
      "Sketsa",
      "Toys Community",
    ],
  },
  {
    title: "Program Bidang Olahraga",
    programs: [
      "Basket",
      "Sepakbola",
      "Futsal",
      "Panahan",
      "Tenis Lapangan",
      "Bulutangkis",
      "Catur",
      "Gym",
      "Cardio-Poundfit",
      "Karatedo",
      "Muaythai",
      "Tenis Meja",
      "Yoga",
      "Taekwondo",
      "Aikido",
      "Atletik-Lari",
      "Voli",
    ],
  },
  { title: "Program Bidang Sosial", programs: ["Donatur", "Relawan"] },
];

const CheckInlineExample = () => (
  <Container>
    <Row className="justify-content-center">
      {categories.map((category, index) => (
        <Col
          key={index}
          lg={6}
          className="p-4 col-auto mt-4"
          style={{
            borderRadius: "25px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="font-semibold text-pretty mb-3">{category.title}</div>
          {category.programs.map((program, idx) => (
            <Form.Check
              key={idx}
              label={program}
              type="checkbox"
              id={`inline-checkbox-${index}-${idx}`}
              className="ml-4"
            />
          ))}
        </Col>
      ))}
    </Row>
    <Row className="d-flex justify-content-center">
      <button className="myButton mt-4" style={{ width: "120px" }}>
        Submit
      </button>
    </Row>
  </Container>
);

export default CheckInlineExample;
