import React, {Component} from 'react'

export default function(text, style) {
	return text.split(" ").map((item, i) =>
		<span key={i} style={style} className="split--word">
			<span>{item}&nbsp;</span>
		</span>
	)
}