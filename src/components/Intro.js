import { Col, Row, Container } from "react-bootstrap"

const Intro = () => {
    return(
        <div className="intro">
            <Container className="d-flex justify-content-center align-items-center">
              <Row>
                <Col>
                  <h1 className="title">IBOS COMMUNITY</h1>
                  <div className="introButton mt-4 text-center">
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
    )
}
export default Intro