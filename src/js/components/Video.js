import React, {Component} from "react"
import IntersectionVisible from "react-intersection-visible"
import createNewId from '../services/createNewId'

export default class Video extends Component {

	constructor(props) {
		super(props);

		this.state = { 
			// isPlaying: false,
		}
	}

	componentWillMount() {
        this.id = createNewId('video');
    }

	play = () => {
		document.getElementById(this.id).play();
		// this.refs.vid.play();
		// this.setState({
		// 	isPlaying: true
		// })
	}
	
	stop = () => {
		document.getElementById(this.id).pause();
		// this.refs.vid.pause();
		// this.setState({
		// 	isPlaying: false
		// })
	}

	render() {

		const { src, loop } = this.props;
		const { isPlaying } = this.state;


		return (
				<IntersectionVisible 
				onShow={this.play} 
				onHide={this.stop}
				>
					<video ref="vid" id={this.id} src={src} playsInline preload="auto" muted loop={loop ? true : false} />
				</IntersectionVisible>
		);
	}
}