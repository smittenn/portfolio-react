import React, {Component} from "react"
import classNames from "classnames"

export default class Image extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	componentWillUnmount() {
	}

	render() {

		const { src, aspectRatio } = this.props;
		
		let style;
		( aspectRatio == '16x9' ) ? ( style =  {
			position: 'relative',
			display: 'block',
			height: 0,
			paddingBottom: '56.25%',
			overflow: 'hidden',
		}) : null

		return (
			<div style={style}>
				<img src={src} style={{
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
		);
	}
}
