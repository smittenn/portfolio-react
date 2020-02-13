import React, {Component} from "react"
import classNames from "classnames"
import { connect } from 'react-redux'

import { setCursorHover, setCursorUnhover } from "../actions/cursor"

import IntersectionVisible from "react-intersection-visible"

import Icon from "../components/Icon"

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
			<IntersectionVisible 
			onShow={this.setSource}>
				<div ref={this.ref} className="iframe-wrapper">
					<a href={this.state.src} target="_blank" onMouseEnter={this.props.setCursorHover} onMouseLeave={this.props.setCursorUnhover}>
						<Icon icon='arrow' size={16}/>
					</a>
					<iframe src={this.state.src} width={this.ref.current ? this.ref.current.clientWidth : null} height={height}/>
				</div>
			</IntersectionVisible>
		);	
	}
}

const mapStateToProps = state => ({
	isMobile: state.isMobile,
})

const mapDispatchToProps = dispatch => ({
	setCursorHover: () => dispatch(setCursorHover()),
	setCursorUnhover: () => dispatch(setCursorUnhover()),
})


export default connect(mapStateToProps, mapDispatchToProps)(IFrame)
