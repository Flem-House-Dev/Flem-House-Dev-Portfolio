import Cards from "../components/Cards";
import { Container, Row } from "react-bootstrap";
import { cardData } from "../data/cardData";

function Portfolio() {
  return (
    <Container fluid>
      <Row xs={1} md={2} lg={3} className="justify-content-evenly mb-3">
        {cardData.map((card, index) => (
          <Cards
            key={index}
            img={card.img}
            title={card.title}
            text={card.text}
            viewLink={card.viewLink}
            githubLink={card.githubLink}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;