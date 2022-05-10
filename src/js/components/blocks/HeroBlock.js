import React, { Component, Fragment } from "react"
import classNames from "classnames"
import { connect } from 'react-redux'

import NavToggle from "../NavToggle"
import Sidebar from "../Sidebar"
import GridLines from "../GridLines"

import splitWord from "../../services/splitWord"
import splitLetter from "../../services/splitLetter"
import hexToRgb from "../../services/hexToRgb"
import palette from "../../services/palette"

export class HeroBlockItem extends Component {
	render() {
		const { word } = this.props;

		return (
			<span><span className="outline">{this.props.children} </span></span>
		)
	}
}

export class HeroBlock extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const { headerText, split } = this.props;

		const style = {}

		let updatedText = [];

		headerText.forEach((item, idx) => {
			typeof(item) == "string" ? (
				updatedText[idx] = splitWord(item, style) 
			) : (
				updatedText[idx] = React.cloneElement(item, { style: style, key: idx, className: 'split--word' })
			)
		})

		return (
			<div className="grid">
				<div className={`grid__item ${ split ? "grid__item--col-1" : "grid__item--col-1"} grid__item--col-hide-bp-medium`}/>
				<div className={`grid__item ${ split ? "grid__item--col-6" : "grid__item--col-10" } grid__item--col-12-medium`}>
					<h1 className="h1 mb0">{ updatedText }</h1>
				</div>
			</div>
		);
	}
}
