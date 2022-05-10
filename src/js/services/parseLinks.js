import React from "react";
import TextLink from "../components/TextLink";

export default (str) => {
  const regex = /\[(.*?)\]\((.*?)\)/gi
	const matches = str.toString().match(regex);
	
	if (matches) {
		const reformatted = matches.map((item, i) => {
			const square = /\[(.*?)\]/gi
			const round = /\((.*?)\)/gi
			const text = item.match(square)[0].replace('[', '').replace(']', '');
			const link = item.match(round)[0].replace('(', '').replace(')', '');
			return <TextLink key={i}><a href={link} target="_blank">{text}</a></TextLink>
		})
		let rendered = str.toString().split(matches);
		rendered.splice(1, 0, reformatted);
		return rendered
	} else {
		return str
	}
}