import React, {Component} from 'react'

export default function(text, style) {
	return text.split(" ").map((item, i) =>
		<span key={i} style={style}>
			<span>{item}&nbsp;</span>
		</span>
	)
}