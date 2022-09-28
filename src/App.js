import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import BasicCard from "./card";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import "./App.css";

function App() {
	const [data, setData] = useState();
	const [errMsg, setErrMsg] = useState(true);

	const getmovies = (e) => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts`)
			.then((response) => setData(response.data.slice(0, 12)))
			.catch((error) => {
				if (error) setErrMsg(false);
				console.log(error);
			});
	};

	useEffect(() => {
		getmovies();
	}, []);
	const deletemovies = (e) => {
		console.log(e.target.id);
		let newState = [...data];
		newState.splice(e.target.id, 1);
		setData(newState);
	};

	return (
		<div className="App">
			<h1 hidden={errMsg} className="h1">
				please connect to internet first !
			</h1>
			<Row>
				{data &&
					data.map((obj, index) => {
						return (
							<Col xs="8" md="4" key={index}>
								<BasicCard index={index} id={obj.id} title={obj.title} delete={deletemovies} />
							</Col>
						);
					})}
			</Row>
		</div>
	);
}

export default App;
