import React, {Component} from "react"
import classNames from "classnames"
import { connect } from "react-redux"

import ArrowGroup from "../components/ArrowGroup"
import Icon from "../components/Icon"
import palette from "../services/palette"

class Carousel extends Component {

	constructor(props) {
		super(props);

		this.state = {
			index: 0,
			childWidth: [],
			clones: []
		}
	}

	incrementIndex = () => {
		this.setState(prevState => ({
			// clones: prevState.clones.concat(this.props.children[this.state.index]),
			index: prevState.index >= (this.props.children.length - 1) ? 0 : prevState.index + 1,
		}))
		this.stackingAnimation();
	}

	decrementIndex = () => {
		this.setState(prevState => ({
			index: prevState.index == 0 ? (this.props.children.length - 1) : prevState.index - 1,
		}))
		this.stackingAnimation();	
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState(prevState => ({
				index: prevState.index >= (this.props.children.length - 1) ? 0 : prevState.index + 1,
			}))
			this.stackingAnimation();
		}, 6000);
		if (!this.props.disableNavigation) {
			clearInterval(this.interval);
		}
	}

	stackingAnimation = () => {
		// if (this.props.stacking) {
		// 	const items = Array.prototype.slice.call(document.querySelectorAll('.carousel__item'))
		// 	const beforeWidths = items.slice(0, this.state.index).map(item => 100);
		// 	const totalWidth = beforeWidths.reduce((acc, width) => acc + width, 0)

		// 	const before = items.slice(0, this.state.index);
		// 	const after = items.slice(this.state.index);

		// 	after.forEach(el => { el.style.transform = `translate3d(-${totalWidth}) + %, 0, 0)` });				
		// }
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		const { style, bottomNav } = this.props;
		const { index, clones } = this.state

		const classnames = classNames({
			"carousel": true,
			"carousel--nav-bottom": bottomNav,
		})

		const length = this.props.children.length
		const items = this.props.children.map((item, i) => (
			<div className="carousel__item" 
			key={i}
			style={this.props.stacking ? {
				transform: `translate3d(
				${-2 + (i * 2) - (i * 100)}%,
				${-2 + (i * 2) + (i >= length - index ? (Math.min(index, i) * 103) : 0)}%,
				0) rotate(${i >= length - index ? 90 : 0}deg)`
			} : null }>
				{ item }
			</div>
		))

		return (
			<div className={classnames}>
				<div className="carousel__item-wrapper">
					<div className="carousel__items" style={this.props.stacking ? { margin: '2%' } : { transform: `translate3d(-${index * 100}%,0,0)`}}>
						{ items }
					</div>
				</div>
				{ !this.props.disableNavigation ?
					<ArrowGroup>
						<a><div onClick={this.decrementIndex}/></a>
						<a><div onClick={this.incrementIndex}/></a>
					</ArrowGroup> : null
				}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isMobile: state.isMobile,
})

export default connect(mapStateToProps)(Carousel)
