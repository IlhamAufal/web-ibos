import { Col, Container, Row } from "react-bootstrap";
import imgBasket from "../OlahragaPage/asset/imgBasket.png";
import "./sosialStyle.css";

const pendahuluan = () => {
  return (
    <Container
      style={{
        marginBlock: "40px",
        position: "relative",
        padding: "25px",
        borderRadius: "20px",
      }}
    >
      <Row className="mt-4">
        <Col className="col-3">
          <div
            style={{
              backgroundColor: "#001A41",
              width: "200px",
              height: "200px",
              borderRadius: "0 50px 0 50px",
              position: "absolute",
              zIndex: "1",
              marginTop: "30px",
            }}
          ></div>
          <div
            style={{
              position: "relative",
              zIndex: "2",
              margin: "0 0 40px 30px",
            }}
          >
            <img
              src={imgBasket}
              style={{
                borderRadius: "0 50px 0 50px",
                position: "relative",
                width: "70%",
                height: "200px",
              }}
            />
          </div>
        </Col>
        <Col>
          <div className="w-4/5 text-justify">
            <h3 className="font-bold mb-3">Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lacus viverra in
              adipiscing enim eu habitasse morbi imperdiet. Ornare dui non
              suspendisse massa. Et purus nibh blandit ipsum. Sed habitant dolor
              aliquet sit tellus pulvinar eu erat nibh. Tellus vestibulum ut
              nisi quis lectus dignissim. Volutpat ac consequat natoque at
              convallis ut lectus fames morbi. Risus laoreet vel luctus
              fermentum mauris morbi. Nisl mattis purus massa ipsum sed. Amet
              neque integer elementum in justo proin turpis congue. Nunc
              adipiscing nibh consequat volutpat interdum feugiat euismod{" "}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default pendahuluan;
