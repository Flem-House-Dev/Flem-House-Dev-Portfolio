import Card from "react-bootstrap/Card";

function Cards(props) {
  return (
    <Card className="m-2">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
