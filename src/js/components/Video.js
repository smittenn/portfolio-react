import React, {Component} from "react"
import IntersectionVisible from "react-intersection-visible"
// import createNewId from '../services/createNewId'

export default class Video extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isPlaying: false
		}

		this.ref = React.createRef();
	}

	componentWillMount() {
    }

	playVideo = () => {
		this.ref.current.play();
		this.setState({ isPlaying: true });
	}
	
	pauseVideo = () => {
		this.ref.current.pause();
		this.setState({ isPlaying: false });
	}

	render() {

		const { src, loop, poster } = this.props;
		const { isPlaying } = this.state;

		return (
			<IntersectionVisible 
			onShow={this.playVideo} 
			onHide={this.pauseVideo}
			>
				<video
				onClick={isPlaying ? this.pauseVideo : this.playVideo}
				ref={this.ref}
				src={src} 
				playsInline 
				autoPlay={false} 
				preload="auto" 
				muted 
				loop={loop ? true : false}
				poster={poster ? poster : null}/>
			</IntersectionVisible>
		);
	}
}