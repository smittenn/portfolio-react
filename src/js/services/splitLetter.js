import React, {Component} from 'react'

export default function(text) {
	return text.split("").map((item, index) =>
		<span key={index}>{item}</span>
	)
}