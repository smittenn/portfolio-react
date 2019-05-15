import React, {Component} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"

// import GridLines from "../components/GridLines"
// import Sidebar from "../components/Sidebar"

export default class Cursor extends Component {

	constructor(props) {
		super(props);

		this.state = {	
			arrowX: 0,
			arrowY: 0,
			isVisible: false,
		}
	}

	componentDidMount() {
		window.addEventListener('mousemove', this.setArrowPosition)
	}

	componentWillUnmount() {
		window.removeEventListener('mousemove', this.setArrowPosition)
	}

	// componentDidUpdate(prevProps) {}

	setArrowPosition = (event) => {
		// console.log(event)
		const { pageX, pageY } = event;
		
		this.setState({
			arrowX: pageX,
			arrowY: pageY,
			isVisible: true,
		})
	}

	handleHover = () => {
		this.setState({ 
			isHovering: !this.state.isHovering 
		})
	}

	render() {

		const { to, name, style, sections, activeSection } = this.props;

		const classnames = classNames({
			"cursor": true,
			"cursor--visible": this.state.isVisible,
		})
		
		return (
			<div className={classnames}>
				<div className="cursor__circle" style={{ left: this.state.arrowX, top: this.state.arrowY }} />
				<div className="cursor__lines" style={{ left: this.state.arrowX, top: this.state.arrowY }}>
					{/*<div className="cursor__line" />*/}
					{/*<div className="cursor__line" />*/}
				</div>
			</div>
		);
	}
}