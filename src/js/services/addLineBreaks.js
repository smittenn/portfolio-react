import React, {Fragment} from 'react'

export default (str) => (
	str ? str.split("\\n").map((text, i) => (
		<Fragment key={i}>
			{text}
			<br/>
		</Fragment>
	)) : null
)