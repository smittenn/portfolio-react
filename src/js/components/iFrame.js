import React, {Component} from "react"
import classNames from "classnames"
import { connect } from 'react-redux'

import IntersectionVisible from "react-intersection-visible"


class IFrame extends Component {

	constructor(props) {
		super(props);

		this.state = {
			src: '',
		}
	}

	setSource = () => {
		this.setState({
			src: this.props.src
		})
	}
	
	unsetSource = () => {
		this.setState({
			src: ''
		})
	}

	render() {

		const { src, height } = this.props;

		let adjustedHeight = height ? height : 720;
		this.props.isMobile ? (adjustedHeight *= 0.75) : null;

		const style = {
			width: '1px',
			minWidth: '100%',
			maxWidth: '100%',
		}

		return (
			<IntersectionVisible 
				onShow={this.setSource}
				onHide={this.unsetSource}
				style={{ width: '100%' }}
				>
				<iframe src={this.state.src} width={this.props.isMobile ? (window.innerWidth - 48) : null} height={adjustedHeight} style={style}/>
			</IntersectionVisible>
		);	
	}
}

const mapStateToProps = state => ({
	isMobile: state.isMobile,
})

export default connect(mapStateToProps)(IFrame)
