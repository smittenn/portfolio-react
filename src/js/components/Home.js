import React, {Component} from 'react'
import { Parallax } from "react-parallax"

import detectMobile from "../services/detectMobile"


export default class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isMobile: detectMobile(),
		}
	}

	// componentDidMount() {
	// 	window.addEventListener('resize', this.detectMobile);
	// }

	// componentWillUnmount() {
	// 	window.removeEventListener('resize', this.detectMobile);
	// }

	// detectMobile = (event) => {
	// 	this.setState({
	// 		isMobile: detectMobile()
	// 	})
	// }

	render() {


		const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
		
		return (
			<div>
				<Parallax bgImage={image1} blur={null} strength={600}>
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