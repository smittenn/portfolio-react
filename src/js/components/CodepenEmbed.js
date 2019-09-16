import React, {Component} from "react"
import classNames from "classnames"
import IntersectionVisible from "react-intersection-visible"

import palette from "../services/palette"
import hexToRgb from "../services/hexToRgb"


export default class CodepenEmbed extends Component {

	constructor(props) {
		super(props);

		this.state = {
			codepen: false,
		}
	}

	componentDidMount() {
		const codepen = document.getElementsByClassName('codepen');

		if (codepen.length > 0) {

			if (!document.getElementById('codepen-script') || !this.state.codepen) {

				const s = document.createElement('script')
				s.async = s.defer = true
				s.src = `//static.codepen.io/assets/embed/ei.js`
				s.id = 'codepen-script'
				const body: HTMLElement | null = document.body

				if (body) {
					body.appendChild(s)
				}

				this.setState({
					'codepen': true
				});
			}
	    }
	}

		
	render() {

		const { slug, height, title, handle } = this.props;

		const style = { 
			width: "100%", 
			height: `${height}px`, 
			backgroundColor: palette("brand-white"),
			boxSizing: "border-box", 
			display: "flex", 
			alignItems: "center", 
			justifyContent: "center", 
			border: "1px solid black", 
			margin: "1em 0", 
			padding: "1em",
		}

		return (
			<div className="codepen" data-height={height} data-theme-id={this.props.theme ? this.props.theme : "dark"} data-default-tab="result" data-user={handle} data-slug-hash={slug} style={style} data-pen-title={title}>
				<span>See the Pen <a href={`https://codepen.io/erchsm/pen/${slug}/`}>{title}</a>
				 &nbsp; by Eric Smith (<a href="https://codepen.io/erchsm">@{handle}</a>)
				on <a href="https://codepen.io">CodePen</a>.</span>
			</div>
		);
	}
}

