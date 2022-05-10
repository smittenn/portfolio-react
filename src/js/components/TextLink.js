import React, {Component} from 'react';
import { connect } from "react-redux"
import classNames from 'classnames'

import { setCursorHover, setCursorUnhover } from "../actions/cursor"

class TextLink extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isHovered: false,
		}
	}

	handleMouseEnter = () => {
		this.setState({
			isHovered: true,
		})
		this.props.setCursorHover();
	}

	handleMouseLeave = () => {
		this.setState({
			isHovered: false,
		})
		this.props.setCursorUnhover();			
	}

	render() {

		const { hideUnderline, hideLine, style, disabled } = this.props;
		const { isHovered } = this.state;

		const classnames = classNames({
			"text-link": true,
			"text-link--hide-underline": hideUnderline,
			"text-link--hide-line": hideLine,
			"text-link--hovered": isHovered,
			"text-link--disabled": disabled,
		})

		return (
			<span 
			className={classnames} 
			onMouseEnter={this.handleMouseEnter} 
			onMouseLeave={this.handleMouseLeave} 
			onClick={this.handleMouseLeave}
			style={style ? style : null}>
				{ this.props.children }
				<span className="text-link__line-container">
					<span className="text-link__line"/>
				</span>
			</span>
		);
	}
}




const mapStateToProps = state => ({
	isMobile: state.isMobile,
})

const mapDispatchToProps = dispatch => ({
	setCursorHover: () => dispatch(setCursorHover()),
	setCursorUnhover: () => dispatch(setCursorUnhover()),
})


export default connect(mapStateToProps, mapDispatchToProps)(TextLink)