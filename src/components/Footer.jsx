import { Container, Row, Col } from "react-bootstrap";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="py-4 ">
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            <p>Created by Flem Fouse Dev</p>
            <p>© 2024</p>
          </Col>
          <Col md={4}>
            <SocialLinks />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
