import React, {Component} from 'react'
import { Parallax } from 'react-parallax'


export default class Vai extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);
	}

	render() {
		const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

		return (
			<div>
				<Parallax bgImage={image1} blur={{ min: -3, max: 6 }} strength={600}>
					<div className="grid">
						<div className="grid__item grid__item--col-9">
							<h1 className="white">V.ai: Video Artificial Intelligence</h1>
						</div>
					</div>
				</Parallax>
				<div style={{ height: 500 }} />
				<h2>{"\u2728"}</h2>
			</div>
		);
	}
}