import React, {Component} from "react"
import IntersectionVisible from "react-intersection-visible"

export default class Video extends Component {

	constructor(props) {
		super(props);

		this.state = { 
			// isPlaying: false,
		}
	}

	play = () => {
		this.refs.vid.play();
		// this.setState({
		// 	isPlaying: true
		// })
	}
	
	stop = () => {
		this.refs.vid.pause();
		// this.setState({
		// 	isPlaying: false
		// })
	}

	render() {

		const { src } = this.props;
		const { isPlaying } = this.state;


		return (
				<IntersectionVisible 
				onShow={this.play} 
				onHide={this.stop}
				>
					<video ref="vid" src={src} loop playsInline preload="auto" muted />
				</IntersectionVisible>
		);
	}
}