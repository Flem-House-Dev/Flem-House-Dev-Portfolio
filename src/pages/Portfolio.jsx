import Cards from "../components/Cards";
import { Row, Container } from "react-bootstrap";

const titleOne = "Project 1";
const descriptionOne = "This was some kind of project";

const titleTwo = "Project 2";
const descriptionTwo = "Another project I worked on";

const titleThree = "Project 3";
const descriptionThree = "This was a project I worked on";

const titleFour = "Project 4";
const descriptionFour = "This was a project I worked on";

const titleFive = "Project 5";
const descriptionFive = "This was a project I worked on";

const titleSix = "Project 6";
const descriptionSix = "This was a project I worked on";

function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>My portfolio will go here...</p>

      <Container>
        <Row xs={1} md={2} lg={3}  className="justify-content-center mb-3">
          <Cards title={titleOne} text={descriptionOne} />
          <Cards title={titleTwo} text={descriptionTwo} />
          <Cards title={titleThree} text={descriptionThree} />
          <Cards title={titleFour} text={descriptionFour} />
          <Cards title={titleFive} text={descriptionFive} />
          <Cards title={titleSix} text={descriptionSix} />
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
