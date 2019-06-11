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

		return (
			<IntersectionVisible 
				onShow={this.setSource}
				onHide={this.unsetSource}
				style={{ width: '100%' }}
				>
				<iFrame src={this.state.src} height={adjustedHeight} />
			</IntersectionVisible>
		);	
	}
}

const mapStateToProps = state => ({
	isMobile: state.isMobile,
})

export default connect(mapStateToProps)(IFrame)
