import React, {Component} from 'react'
import { Parallax } from "react-parallax"


export default class Home extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);
	}

	render() {

		const insideStyles = {
			background: "white",
			padding: 20,
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-50%,-50%)"
		};

		const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
		
		return (
			<div>
				<Parallax bgImage={image1} blur={{ min: -3, max: 6 }} strength={600}>
					<div className="grid">
						<div className="grid__item grid__item--col-9 grid__item--col-12-medium">
							<h1 className="white">Eric C. Smith is a UI/UX Designer and Developer in New York City</h1>
						</div>
					</div>
				</Parallax>
				<div style={{ height: 500 }} />
				<h2>{"\u2728"}</h2>
			</div>
		);
	}
}