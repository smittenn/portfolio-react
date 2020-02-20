import React, {Component} from "react"
import { Parallax } from "react-parallax"
import classNames from "classnames"
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller} from "react-scroll"
import { connect } from 'react-redux'

import NavToggle from "../NavToggle"
import Sidebar from "../Sidebar"
import GridLines from "../GridLines"
import ScrollArrow from "../ScrollArrow"

import splitWord from "../../services/splitWord"
import splitLetter from "../../services/splitLetter"
import hexToRgb from "../../services/hexToRgb"
import palette from "../../services/palette"


export default class HeroBlock extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const { headerText} = this.props;

		const classnames = classNames({
			"grid": true,
		})

		const style = {}

		let updatedText = [];

		headerText.forEach((item, idx) => {
			typeof(item) == "string" ? updatedText[idx] = splitWord(item, style) : updatedText[idx] = React.cloneElement(item, { style: style, key: idx, className: 'split--word' })
		})

		return (
			<div className={classnames}>
				<div className="grid__item grid__item--col-1 grid__item--col-hide-bp-medium"/>
				<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
					<h1 className={ classNames({ "mb0": true })}>{updatedText}</h1>
				</div>
			</div>				
		);
	}
}