import React, {Component, Fragment} from 'react'
import classNames from "classnames"

export default (text, style, className) => {
	const cn = { 'split--word': true };
	cn[className] = className;

	return text.split(" ").map((item, i) =>
		<span key={i} style={style} className={classNames(cn)}>
			<span>{item}&nbsp;</span>
		</span>
	)
}
