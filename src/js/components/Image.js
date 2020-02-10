import React, {Component} from "react"
import classNames from "classnames"
// import IntersectionVisible from "react-intersection-visible"

import palette from "../services/palette"
import hexToRgb from "../services/hexToRgb"

export default class Image extends Component {

	constructor(props) {
		super(props);

		this.state = {
			src: '',
			isVisible: false,
			intersectionRatio: 0,
		}

		this.ref = React.createRef();
	}

	componentDidMount() {
		// const observer = new IntersectionObserver(([entry]) => this.setState({
		// 	isVisible: entry.intersectionRatio > 0,
		// }));

		// if (this.ref.current) {
		// 	observer.observe(this.ref.current);
		// }

		// document.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount() {
		// document.removeEventListener('scroll', this.onScroll);
	}

	onScroll = () => {

	}


	setSource = () => {
		// this.setState({
		// 	src: this.props.src
		// })
	}
	
	unsetSource = () => {
		// this.setState({
		// 	src: ''
		// })
	}


	render() {

		const brandBlack = hexToRgb(palette("brand-black"));

		const { src, aspectRatioWidth, aspectRatioHeight, style } = this.props;

		const { isVisible, intersectionRatio } = this.state;

		const classnames = classNames({
			"image": true,
			"image--visible": this.state.isVisible
		})

		// console.log(this.ref.current, src, isVisible, intersectionRatio);

		const pb = aspectRatioHeight / (aspectRatioWidth / 100);
		
		const _style =  {
			position: 'relative',
			display: 'block',
			height: 0,
			paddingBottom: pb + '%',
			overflow: 'hidden',
		}

		// let docScroll;
		// const getPageYScroll = () => docScroll = window.pageYOffset || document.documentElement.scrollTop;
		// getPageYScroll();
		// console.log(docScroll)

		// const transform = isVisible ? intersectionRatio * 4 : 0;	

		style ? Object.assign(_style, style) : null

		return (
			<div className={classnames} style={_style} ref={this.ref}>
				<img src={src} style={{
					display: 'block',
					// width: '100%',
					height: '100%',
					position: 'absolute',
					top: 0,
					// bottom: 0,
					left: 0,
					// transform: `translate3d(0, ${intersectionRatio * 100}px, 0)`,
					// right: 0,
				}}/>
				{/*<div style={{
					background: `rgba(${brandBlack.r}, ${brandBlack.g}, ${brandBlack.b}, .12)`,
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
				}}/>*/}
			</div>
		);
	}
}
