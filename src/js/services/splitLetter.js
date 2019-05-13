import React, {Component} from 'react'

export default function(text, style) {
	return text.split("").map((item, index) =>
		<span key={index}><span style={style}>{item}</span></span>
	)
}