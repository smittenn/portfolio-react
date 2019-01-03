import React, {Component} from 'react'

export default function(text) {
	return text.split(" ").map((item, index) =>
		<span key={index}>{item}{ (index != text.split(" ").length) ? "\u00A0" : null}</span>
	)
}