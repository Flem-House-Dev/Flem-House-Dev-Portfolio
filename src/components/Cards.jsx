import Card from "react-bootstrap/Card";

function Cards(props) {
  return (
    <Card className="m-3 p-3 shadow">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <div style={{ position: 'absolute', bottom: 10, display: 'flex'}}>
          <Card.Link href={props.viewLink}>View</Card.Link>
          <Card.Link href={props.githubLink}>GitHub</Card.Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;
