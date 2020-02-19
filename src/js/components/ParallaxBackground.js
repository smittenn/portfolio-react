import React, {Component} from "react"
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
		this.parallax();
	}

	parallax = debounce(() => {
		this.setState({
			scrollAmount: window.pageYOffset,
			isHidden: (document.body.scrollTop > (window.innerHeight))
		});
	}, 10)


	render() {

		const { bgImage, style } = this.props;
		const { isHidden } = this.state;

		let updatedStyle = {
			display: isHidden ? 'none' : 'block',
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100vw',
			transform: isHidden ? null : `
				translate3d(
					0,
					${(this.state.scrollAmount * -0.15)}px,
					0
				) 
			`,
			minHeight: 'calc(100vh + 1px',
		};

		Object.assign(updatedStyle, style);

		return (
			<section style={updatedStyle}>
			</section>				
		);
	}
}

const mapStateToProps = state => ({
	isMobile: state.isMobile,
})

export default connect(mapStateToProps)(ParallaxBackground)