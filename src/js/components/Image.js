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
			loaded: false,
			intersectionRatio: 0,
		}

		this.ref = React.createRef();
	}

	componentDidMount() {
		this.setState({
			src: this.props.src
		});

		// detect native browser lazy loading
		if ('loading' in HTMLImageElement.prototype) {
			this.loadImage();
		} else {
			this.setState({
				src: ''
			});

			const observer = new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting && this.state.src == '') {
					this.setState({
						src: this.props.src,
					})
					this.loadImage();
				}
			});
	
			observer.observe(this.ref.current);
		}
	}

	loadImage = () => {
		if (this.ref.current.complete) {
			this.setState({ loaded: true });
		}

		this.ref.current.onload = () => {
			this.setState({ loaded: true });
		}
	}

	render() {

		const brandBlack = hexToRgb(palette("brand-black"));

		const { aspectRatioWidth, aspectRatioHeight, style, caption, alt } = this.props;

		const { src, loaded } = this.state;

		const classnames = classNames({
			"image-wrapper": true,
			"image-wrapper--loaded": loaded
		})

		const pb = aspectRatioHeight / (aspectRatioWidth / 100);
		
		const _style =  {
			paddingBottom: pb + '%',
		}

		style ? Object.assign(_style, style) : null

		return (
			<figure>
				<div className={classnames} style={_style}>
					<img src={src} loading="lazy" alt={alt} ref={this.ref}/>
				</div>
				{ caption ? (<figcaption><p className="mb0">{caption}</p></figcaption>) : null }
			</figure>
		);
	}
}
