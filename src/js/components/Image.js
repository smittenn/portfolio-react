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

		const { src, aspectRatioWidth, aspectRatioHeight, style, caption } = this.props;

		const { isVisible, intersectionRatio } = this.state;

		const classnames = classNames({
			"image-wrapper": true,
			"image-wrapper--visible": this.state.isVisible
		})

		const pb = aspectRatioHeight / (aspectRatioWidth / 100);
		
		const _style =  {
			paddingBottom: pb + '%',
		}

		// let docScroll;
		// const getPageYScroll = () => docScroll = window.pageYOffset || document.documentElement.scrollTop;
		// getPageYScroll();
		// console.log(docScroll)

		// const transform = isVisible ? intersectionRatio * 4 : 0;	

		style ? Object.assign(_style, style) : null

		return (
			<figure>
				<div className={classnames} style={_style} ref={this.ref}>
					<img src={src} loading="lazy"/>
				</div>
				{ caption ? (<figcaption><p className="mb0">{caption}</p></figcaption>) : null }
			</figure>
		);
	}
}
