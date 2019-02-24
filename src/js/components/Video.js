import React, {Component} from "react"
import IntersectionVisible from "react-intersection-visible"

export default class Video extends Component {

	constructor(props) {
		super(props);

		this.state = { 
			playing: false,
		}
	}

	componentDidMount() {
	}

	componentWillUnmount() {
	}

	componentDidUpdate(prevProps) {
	}

	render() {

		const { src } = this.props;
		const { playing } = this.props;
		
		return (
				<IntersectionVisible 
				onShow={this.setState({ playing: true })} 
				onHide={this.setState({ playing: false })}
				>
					<video src={src} autoPlay={playing} loop playsInline preload="auto" muted />
				</IntersectionVisible>
		);
	}
}