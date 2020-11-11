import React, { Component, Fragment } from "react"
import { Parallax } from "react-parallax"
import classNames from "classnames"
import { connect } from 'react-redux'

import debounce from "../services/debounce"

class ParallaxBackground extends Component {

	constructor(props) {
		super(props);

		this.state = {
			scrollAmount: 0,
		}
	}

	componentDidMount() {
		document.addEventListener('scroll', this.handleScroll, {passive: true});
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.handleScroll, {passive: true});
	}

	handleScroll = (event) => {
		const windowHeight = window.innerHeight;
		const scrollPosition = window.scrollY;

		const animationViewportHeight = windowHeight * 1;

		if (scrollPosition < animationViewportHeight) {
		  window.requestAnimationFrame(() => {
			this.parallax(scrollPosition);
		  })
		} else {
			this.setState({
				isHidden: true
			});
		}
	}

	parallax = (scrollPosition) => {
		this.setState({
			scrollAmount: window.pageYOffset,
			isHidden: false
		});
	}


	render() {

		const { bgImage, style } = this.props;
		const { scrollAmount, isHidden } = this.state;

		const classnames = classNames({
			"parallax-background": true,
			"parallax-background--hidden": isHidden,
			"p0": this.props.isMobile ? false : true
		})

		const multiplier = 0.15

		let updatedStyle = {
			transform: `translate3d(0, ${(scrollAmount * multiplier)}px, 0)`
		};

		Object.assign(updatedStyle, style);

		return (
			<Fragment>
				<section className={classnames} style={updatedStyle}>
					{ this.props.children }
				</section>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	isMobile: state.isMobile,
})

export default connect(mapStateToProps)(ParallaxBackground)
