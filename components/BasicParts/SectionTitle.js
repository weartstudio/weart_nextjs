import React from 'react'

export default function SectionTitle({data, className}) {
	return (
		<div className={`${className} text-center`}>
			<h3 className="uppercase font-bold font-display text-weart-500 mb-2">{data.subtitle}</h3>
			<h3 className="text-4xl font-display font-bold">{data.title}</h3>
		</div>
	)
}
