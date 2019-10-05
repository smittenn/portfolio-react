import { connect } from "react-redux"
import React, {Component} from "react"

class Icon extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const icons = {
			arrow: 'M5.01226595,18.2016651 L35.2284348,18.2016651 M24.4846448,7 L35.0122659,18.2016651 M35.0122659,18.2016651 L24.4846448,28.7224199',
			download: 'M25.9212464,10 L29,10 C31.209139,10 33,11.790861 33,14 L33,31 C33,33.209139 31.209139,35 29,35 L11,35 C8.790861,35 7,33.209139 7,31 L7,14 C7,11.790861 8.790861,10 11,10 L13.9289244,10 M20,4 L20,27 M12.5,19.5 L20,26.666 M27.5,19.5 L20,26.666',
		};


		const { icon, size, color, isMobile } = this.props;

		const adjustedSize = isMobile ? size * 0.75 : size;

		return (
			<svg className={`icon-${icon}`} width={adjustedSize} height={adjustedSize} viewBox={`0 0 40 40`} fillRule="evenodd">
				<path d={icons[icon]} stroke={color} strokeWidth="1" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>
			</svg>
		);
	}
}

const mapStateToProps = state => ({
	isMobile: state.isMobile,
})

export default connect(mapStateToProps)(Icon)