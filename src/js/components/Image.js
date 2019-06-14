import React, {Component} from "react"
import classNames from "classnames"
import IntersectionVisible from "react-intersection-visible"

export default class Image extends Component {

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

		const { src, aspectRatioWidth, aspectRatioHeight, style } = this.props;

		const pb = aspectRatioHeight / (aspectRatioWidth / 100);
		
		const _style =  {
			position: 'relative',
			display: 'block',
			height: 0,
			paddingBottom: pb + '%',
			overflow: 'hidden',
		}	

		style ? Object.assign(_style, style) : null

		return (
			<IntersectionVisible 
				onShow={this.setSource}
				onHide={this.unsetSource}
				>
				<div style={_style}>
					<img src={this.state.src} style={{
						display: 'block',
						// width: '100%',
						height: '100%',
						position: 'absolute',
						top: 0,
						// bottom: 0,
						left: 0,
						// right: 0,
					}}/>
				</div>
			</IntersectionVisible>
		);
	}
}
