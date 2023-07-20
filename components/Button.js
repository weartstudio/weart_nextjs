export default function Button({children, href, className}) {
	return (
		<a href={href}
			className={`bg-weart-500 hover:bg-weart-600 transition
			py-4 px-8 rounded-sm
			text-white tracking-wider
			font-display
			inline-flex items-center gap-3 hover:gap-5 transition-all ${className}`}
			>
			{children}
		</a>
	)
}
