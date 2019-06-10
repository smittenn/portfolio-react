import React, {Component} from "react"
import classNames from "classnames"

import IntersectionVisible from "react-intersection-visible"


export default class IFrame extends Component {

	constructor(props) {
		super(props);

		this.state = {
			src: '',
		}
	}

	componentDidMount() {
	}

	componentWillUnmount() {
	}

	setSource = () => {
		this.setState({
			src: this.props.src
		})
	}
	
	unsetSource = () => {
		this.setState({
			src: ''
		})
	}

	render() {

		const { src, height } = this.props;

		return (
			<IntersectionVisible 
				onShow={this.setSource}
				onHide={this.unsetSource}
				>
				<iframe src={this.state.src} height={height ? height : "720"} />
			</IntersectionVisible>
		);	
	}
}
