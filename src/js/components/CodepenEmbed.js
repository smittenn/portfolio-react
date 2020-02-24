import React, {Component} from "react"
import classNames from "classnames"
// import IntersectionVisible from "react-intersection-visible"

import palette from "../services/palette"
import hexToRgb from "../services/hexToRgb"


export default class CodepenEmbed extends Component {

	constructor(props) {
		super(props);

		this.ref = React.createRef();

		this.state = {
			isVisible: false,
		}
	}

	componentDidMount() {
		const observer = new IntersectionObserver(
			([entry]) => this.setState({
				isVisible: entry.intersectionRatio > 0
			})
		);

		if (this.ref.current) {
			observer.observe(this.ref.current);
		}
	}
		
	render() {

		const { slug, title, aspectRatioWidth, aspectRatioHeight } = this.props;
		const { isVisible } = this.state;

		const height = (() => {
			if (this.ref.current && (aspectRatioWidth && aspectRatioHeight))
				return ((aspectRatioHeight * this.ref.current.clientWidth) / aspectRatioWidth)
			else return 720
		})()

		return (
			<div ref={this.ref} className="codepen-wrapper">
				<iframe 
				height={height} 
				scrolling="no" 
				title={title} 
				src={isVisible ? `https://codepen.io/erchsm/embed/${this.props.slug}?height=${height}&theme-id=dark&default-tab=result` : null} 
				frameBorder="no" 
				allowtransparency="true" 
				allowFullScreen={true}>
					See the Pen <a href={`https://codepen.io/erchsm/pen/${slug}`}>{title}</a> by eric smith
					(<a href='https://codepen.io/erchsm'>@erchsm</a>) on <a href='https://codepen.io'>CodePen</a>.
				</iframe>
			</div>
		);
	}
}

