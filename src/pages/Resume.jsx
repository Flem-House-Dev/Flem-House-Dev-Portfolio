import { Button, ListGroup } from "react-bootstrap";
import resume from "../assets/Jeremy_Fleming_resume.pdf";

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
              <em>Languages</em> (JavaScript (ES6+), HTML5, CSS3, SQL)
            </ListGroup.Item>
            <ListGroup.Item>
              <em>Frameworks/Libraries</em> (React, Express.js, Node.js, jQuery,
              Bootstrap, Handlebars.js)
            </ListGroup.Item>
            <ListGroup.Item>
              <em>Databases</em> (MongoDB, PostgreSQL)
            </ListGroup.Item>
            <ListGroup.Item>
              <em>Version Control</em> (Git, GitHub)
            </ListGroup.Item>
            <ListGroup.Item>
              <em>API Development</em> (RESTful APIs)
            </ListGroup.Item>
            <ListGroup.Item>
              <em>Other Tools</em> (Jira,VSCode, Azure, Webpack, Babel, npm)
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
