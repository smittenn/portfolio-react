import React, {Component} from 'react'

export default (text, style) => (
	text.split(" ").map((item, i) =>
		<span key={i} style={style} className="split--word">
			<span>{item}&nbsp;</span>
		</span>
	)
)