import React, {Component} from "react"
import classNames from "classnames"
import { connect } from 'react-redux'

import IntersectionVisible from "react-intersection-visible"


class IFrame extends Component {

	constructor(props) {
		super(props);

		this.state = {
			src: '',
		}

		this.ref = React.createRef();
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

		const { src, aspectRatioWidth, aspectRatioHeight } = this.props;

		const height = (() => {
			if (this.ref.current && (aspectRatioWidth && aspectRatioHeight))
				return ((aspectRatioHeight * this.ref.current.clientWidth) / aspectRatioWidth)
			else return 720
		})()


		// const height = (aspectRatioWidth || aspectRatioHeight) ?  : 720;
		// this.props.isMobile ? (adjustedHeight *= 0.75) : null;

		// console.log(height);

		return (
			<div ref={this.ref}>
				<IntersectionVisible 
				onShow={this.setSource}>
					<iframe src={this.state.src} width={this.ref.current ? this.ref.current.clientWidth : null} height={height}/>
				</IntersectionVisible>
			</div>
		);	
	}
}

const mapStateToProps = state => ({
	isMobile: state.isMobile,
})

export default connect(mapStateToProps)(IFrame)
