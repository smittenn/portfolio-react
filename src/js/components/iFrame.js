import React, {Component} from "react"
import classNames from "classnames"
import { connect } from 'react-redux'

import { setCursorHover, setCursorUnhover } from "../actions/cursor"

import IntersectionVisible from "react-intersection-visible"

import Icon from "../components/Icon"

class IFrame extends Component {

	constructor(props) {
		super(props);

		this.ref = React.createRef();

		this.state = {
			src: this.props.src,
		}
	}

	setSource = () => {
		this.setState({
			src: this.props.src
		})
	}
	
	unsetSource = () => {
		this.setState({
			src: undefined
		})
	}

	refreshSource = () => {
		this.unsetSource();

		setTimeout(() => {
			this.setSource();
		}, 300);
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
					<div className="iframe-wrapper__controls">
						<div onClick={this.refreshSource} onMouseEnter={this.props.setCursorHover} onMouseLeave={this.props.setCursorUnhover}>
							<Icon icon='refresh' size={16}/>
						</div>
						<figcaption className="m0" style={{ lineHeight: 1 }}>{ src.split('//').slice(-1)[0] }</figcaption>
						<a href={src} target="_blank" onMouseEnter={this.props.setCursorHover} onMouseLeave={this.props.setCursorUnhover}>
							<Icon icon='arrow' size={16}/>
						</a>
					</div>
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
