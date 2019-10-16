import React, {Component} from "react"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom"
import classNames from "classnames"


class Cursor extends Component {

	constructor(props) {
		super(props);

		this.state = {	
			arrowX: 0,
			arrowY: 0,
			isVisible: false,
		}
	}

	componentDidMount() {
		window.addEventListener('mousemove', this.handleMouseMove)
		// window.addEventListener('scroll', this.handleScroll)
	}

	componentWillUnmount() {
		window.removeEventListener('mousemove', this.handleMouseMove)
		// window.removeEventListener('scroll', this.handleScroll)
	}


	// handleScroll = (event) => {
	// 	// const { pageX, pageY } = event;
		
	// 	this.setState({
	// 		arrowY: window.scrollY,
	// 		isVisible: true,
	// 	})
	// }

	handleMouseMove = (event) => {
		// console.log(event)
		const { clientX, clientY } = event;
		
		this.setState({
			arrowX: clientX,
			arrowY: clientY,
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
			"cursor--hovering": this.props.isCursorHovering,
		})
		
		return (
			<div className={classnames}>
				<div style={{ transform: 'translate(' + this.state.arrowX + 'px, ' + this.state.arrowY + 'px)' }}>
					<div className="cursor__wrapper">
						<div className="cursor__inner"/>
						<div className="cursor__outer"/>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isCursorHovering: state.isCursorHovering,
})

// const mapDispatchToProps = dispatch => ({
// 	openTakeover: () => dispatch(openTakeover()),
// 	closeTakeover: () => dispatch(closeTakeover()),
// 	openPrimaryPanel: () => dispatch(openPrimaryPanel()),
// 	closePrimaryPanel: () => dispatch(closePrimaryPanel()),
// 	openSecondaryPanel: () => dispatch(openSecondaryPanel()),
// 	closeSecondaryPanel: () => dispatch(closeSecondaryPanel()),
// 	hoverToggle: () => dispatch(hoverToggle()),
// 	unhoverToggle: () => dispatch(unhoverToggle()),
// })


export default connect(mapStateToProps)(Cursor)