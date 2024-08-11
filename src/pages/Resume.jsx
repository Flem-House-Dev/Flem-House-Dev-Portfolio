import { Button, ListGroup } from "react-bootstrap";
import resume from "../assets/ResumeComingSoon.pdf";

function Resume() {


  return (
    <div>
      <h2>Resume</h2>
      <div className="row">
        <div className="col">
          <ListGroup className="shadow mb-4" variant="flush">
            <ListGroup.Item variant="dark">
              <strong>Skills:</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <em>Frontend Development</em> (HTML, CSS, JavaScript)
            </ListGroup.Item>
            <ListGroup.Item>
              <em>Backend Development</em> (Node.js, Express.js, MongoDB, MySQL)
            </ListGroup.Item>
            <ListGroup.Item>
              <em>Frameworks</em> (React, GraphQL)
            </ListGroup.Item>
            <ListGroup.Item>
              <em>DevOps</em> (Git, Netlify)
            </ListGroup.Item>
            <ListGroup.Item>
              <em>Other</em> (Agile, Responsive Design, Accessibility)
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="col">
          <h3>Download resume:</h3>
          <Button className="downloadBtn" href={resume} Download File>
            Download
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
