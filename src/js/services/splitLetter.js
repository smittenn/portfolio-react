import React, {Component} from 'react'

export default (text, style) => {
	return text.split(" ").map((word, i) =>
		<span key={i} className="split--letter">
			{ word.split("").map((letter, j) => <span key={j} style={style}>{letter}</span>) }
			{ /*(text.split(" ").length > 1) ? "\u00A0" : null */}
		</span>
	)
}