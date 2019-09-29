import React, {Component} from "react"

export default class Icon extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const icons = {
			arrow: 'M5.01226595,18.2016651 L35.2284348,18.2016651 M24.4846448,7 L35.0122659,18.2016651 M35.0122659,18.2016651 L24.4846448,28.7224199',
		};


		const { icon, size, color } = this.props;

		return (
			<svg className={`icon-${icon}`} width={size} height={size} viewBox={`0 0 40 40`} fillRule="evenodd">
				<path d={icons[icon]} stroke={color} strokeWidth="1" vectorEffect="non-scaling-stroke"/>
			</svg>
		);
	}
}