import Link from "next/link"

export default function NavItem({children, href}) {
	return (
		<li className="block px-4 py-2">
			<Link href={href} className="transition hover:border-weart-100 border-b-2 border-transparent">
				{children}
			</Link>
		</li>
	)
}
