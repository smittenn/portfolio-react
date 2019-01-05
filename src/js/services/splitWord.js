import React, {Component} from 'react'

export default function(text, style) {
	return text.split(" ").map((item, index) =>
		<span style={style} key={index}>{item}{ (index != text.split(" ").length) ? "\u00A0" : null}</span>
	)
}