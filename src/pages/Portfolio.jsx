import Cards from "../components/Cards";
import { Row, Container } from "react-bootstrap";

// Card data ----------------------------------------------------
import imageOne from "../assets/bit-blog.png";
const titleOne = "Bit-Blog";
const descriptionOne = `This website provides a place to read the latest in web 
  developement news, as well as share your own stories.`;
const viewLinkOne = "https://bit-blog-web-dev.onrender.com/";
const githubLinkOne = "https://github.com/Flem-House-Dev/Bit-Blog-Web-Dev";

import imageTwo from "../assets/good-notes.png";
const titleTwo = "Good Notes";
const descriptionTwo = `Good Notes is a simple yet useful note taking app. 
  Taking notes can be a great 
  way to keep track of ideas. And, this app makes it simple to keep track of them 
  by enabling the user to enter, save, and delete them.`;
const viewLinkTwo = "https://good-notes-13au.onrender.com/";
const githubLinkTwo = "https://github.com/Flem-House-Dev/Good-Notes";

import imageThree from "../assets/skycast-weather.png";
const titleThree = "SkyCast Weather";
const descriptionThree = `This handy weather app allows the user to see the 
  current weather conditions of a city as well as the 5-day forcast.`;
const viewLinkThree = "https://flem-house-dev.github.io/SkyCast-Weather-App/";
const githubLinkThree = "https://github.com/Flem-House-Dev/SkyCast-Weather-App";

import imageFour from "../assets/JATE.png";
const titleFour = "JATE Text Editor";
const descriptionFour = `JATE is a text editor that allows the user to save text 
  or code into the indexedDB on the local web browser. It can also be installed 
  locally as a PWA.`;
const viewLinkFour = "https://github.com/Flem-House-Dev/JATE-Text-Editor";
const githubLinkFour = "https://github.com/Flem-House-Dev/JATE-Text-Editor";

import imageFive from "../assets/Dino-finder.png";
const titleFive = "Dino Finder";
const descriptionFive = `This blogging website allows you to log information about 
  your favorite dinos.`;
const viewLinkFive = "https://flem-house-dev.github.io/Dino-Finder/";
const githubLinkFive = "https://github.com/Flem-House-Dev/Dino-Finder";

import imageSix from "../assets/crew-roster-query.png";
const titleSix = "Crew Roster Query";
const descriptionSix = `This app enables users to query data about crew members 
  of the U.S.S. Enterprise. By answering a few questions, users can view or 
  update data for crew members, roles, and departments.`;
const viewLinkSix = "https://github.com/Flem-House-Dev/Crew-Roster-Query";
const githubLinkSix = "https://github.com/Flem-House-Dev/Crew-Roster-Query";

// Portfolio page ------------------------------------------------
function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      {/* <p>My portfolio will go here...</p> */}

      <Container fluid>
        <Row xs={1} md={2} lg={3} className="justify-content-evenly mb-3">
          <Cards
            img={imageOne}
            title={titleOne}
            text={descriptionOne}
            viewLink={viewLinkOne}
            githubLink={githubLinkOne}
          />
          <Cards
            img={imageTwo}
            title={titleTwo}
            text={descriptionTwo}
            viewLink={viewLinkTwo}
            githubLink={githubLinkTwo}
          />
          <Cards
            img={imageThree}
            title={titleThree}
            text={descriptionThree}
            viewLink={viewLinkThree}
            githubLink={githubLinkThree}
          />
          <Cards
            img={imageFour}
            title={titleFour}
            text={descriptionFour}
            viewLink={viewLinkFour}
            githubLink={githubLinkFour}
          />
          <Cards
            img={imageFive}
            title={titleFive}
            text={descriptionFive}
            viewLink={viewLinkFive}
            githubLink={githubLinkFive}
          />
          <Cards
            img={imageSix}
            title={titleSix}
            text={descriptionSix}
            viewLink={viewLinkSix}
            githubLink={githubLinkSix}
          />
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
