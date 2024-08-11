
import { Github, Linkedin, TwitterX  } from 'react-bootstrap-icons';
import { Container, Row, Col } from "react-bootstrap";

function SocialLinks() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={12}>
          <div className="social-links">
            <a className='mx-3' href="https://github.com/Flem-House-Dev" target="_blank" rel="noopener noreferrer">
                <Github className='social-icons' size={32} />
            </a>
            <a className='mx-3' href="https://www.linkedin.com/in/jeremy-fleming-647a992aa/" target="_blank" rel="noopener noreferrer">
                <Linkedin className='social-icons' size={32} />
            </a>
            <a className='mx-3' href="https://x.com/JeremyF80308646" target="_blank" rel="noopener noreferrer">
                <TwitterX className='social-icons' size={32} />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SocialLinks;
