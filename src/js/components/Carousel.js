import React, {Component} from "react"
import classNames from "classnames"
import { connect } from "react-redux"

import Icon from "../components/Icon"
import palette from "../services/palette"

class Carousel extends Component {

	constructor(props) {
		super(props);

		this.state = {
			index: 1,
			childWidth: []
		}
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState(prevState => ({
				index: prevState.index >= this.props.children.length ? 1 : prevState.index + 1,
			}))
		}, 6000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {

		const { style, aspectRatioWidth, aspectRatioHeight } = this.props;
		const { index } = this.state

		const classnames = classNames({
			"carousel": true,
		})

		const beforeWidths = this.props.children.slice(0, index).map(item => 100);
		const totalWidth = beforeWidths.reduce((acc, width) => acc + width)

		// const after = this.props.children.slice(index);
		// console.log(beforeWidths, totalWidth)

		// const before = this.props.children.slice(0, index).map((item, i) => (
		// 	<div
		// 	className="carousel__item"
		// 	key={i + this.props.children.length}>
		// 		{ item }
		// 	</div>
		// ))

		// const after = this.props.children.slice(index).map((item, i) => (
		// 	<div
		// 	className="carousel__item"
		// 	key={i}
		// 	style={{ transform: `translate3d(-${totalWidth}%,0,0)`}}>
		// 		{ item }
		// 	</div>
		// ))

		const items = this.props.children.map((item, i) => (
			<div
			className="carousel__item"
			key={i}
			style={{ transform: `translate3d(${i * 100}%,0,0)`}}>
				{ item }
			</div>
		))

		// after.forEach(el => { el.style.transform = 'translate3d(-' + (totalWidth) + '%, 0, 0)' });

		const pb = aspectRatioHeight / (aspectRatioWidth / 100);
		
		const _style =  {
			paddingBottom: pb + '%',
		}	

		style ? Object.assign(_style, style) : null

		return (
			<div className={classnames} style={_style}>
				<div className="carousel__items" style={{ transform: `translate3d(-${(index - 1) * 100}%,0,0)`}}>
					{ items }
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isMobile: state.isMobile,
})

export default connect(mapStateToProps)(Carousel)