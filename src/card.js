import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicCard(props) {
	return (
		<Card className="mt-5" style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Title className="title">{props.id}</Card.Title>
				<Card.Text>{props.title.length <= 12 ? props.title : props.title.slice(0, 12)} </Card.Text>
			</Card.Body>
			<Button
				id={props.index}
				variant="info"
				onClick={(e) => {
					props.delete(e);
				}}>
				Delete
			</Button>
		</Card>
	);
}

export default BasicCard;
