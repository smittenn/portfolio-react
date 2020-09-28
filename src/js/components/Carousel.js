import React, {Component} from "react"
import classNames from "classnames"
import { connect } from "react-redux"

import Icon from "../components/Icon"
import palette from "../services/palette"

class Carousel extends Component {

	constructor(props) {
		super(props);

		this.state = {
			index: 0,
			childWidth: []
		}
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState(prevState => ({
				index: prevState.index >= (this.props.children.length - 1) ? 0 : prevState.index + 1,
			}))
			// Stacking Effect
			if (this.props.stacking) {
				const items = Array.prototype.slice.call(document.querySelectorAll('.carousel__item'))
				const beforeWidths = items.slice(0, this.state.index).map(item => 100);
				const totalWidth = beforeWidths.reduce((acc, width) => acc + width, 0)

				const before = items.slice(0, this.state.index);
				const after = items.slice(this.state.index);

				after.forEach(el => { el.style.transform = 'translate3d(-' + (totalWidth) + '%, 0, 0)' });				
			}
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

		const items = this.props.children.map((item, i) => (
			<div
			className="carousel__item"
			key={i}>
				{ item }
			</div>
		))

		return (
			<div className={classnames}>
				<div className="carousel__items" style={{ transform: `translate3d(-${index * 100}%,0,0)`}}>
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