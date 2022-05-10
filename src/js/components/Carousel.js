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
			index: 0
		}
	}

	incrementIndex = () => {
		this.setState(prevState => ({
			index: prevState.index >= (this.props.children.length - 1) ? 0 : prevState.index + 1,
		}))
	}

	decrementIndex = () => {
		this.setState(prevState => ({
			index: prevState.index == 0 ? (this.props.children.length - 1) : prevState.index - 1,
		}))
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState(prevState => ({
				index: prevState.index >= (this.props.children.length - 1) ? 0 : prevState.index + 1,
			}))
		}, 6000);
		if (!this.props.disableNavigation) {
			clearInterval(this.interval);
		}
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		const { style, bottomNav, stacking } = this.props;
		const { index } = this.state

		const classnames = classNames({
			"carousel": true,
			"carousel--nav-bottom": bottomNav,
			"carousel--stacking": stacking,
		})

		const length = this.props.children.length
		const items = this.props.children.map((item, i) => (
			<div className="carousel__item" 
			key={i}
			style={stacking ? {
				transform: `
					translate3d(
						${-2 + (i * 2) - (i * 100)}%,
						${-2 + (i * 2) + (i >= length - index ? (Math.min(index, i) * 103) : 0)}%,
						0
					)
					rotate(${i >= length - index ? 90 : 0}deg
				)`
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
