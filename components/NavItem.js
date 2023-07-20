import Link from "next/link"

export default function NavItem({children, href, className}) {
	return (
		<li className="block">
			<Link href={href} className={`${className} transition px-4 py-2`}>
				<span className="hover:border-weart-500 border-b-2 border-transparent transition">{children}</span>
			</Link>
		</li>
	)
}
