'use client'

import Image from "next/image"
import Link from "next/link"
import NavItem from "./NavItem"
import { useState } from "react"


export default function Nav() {

	const [menu,setMenu] = useState('hidden')

	return (
		<nav className="relative w-full px-2 py-4 border-b-2 border-weart-100">
			<div className="container flex flex-wrap items-center justify-between mx-auto text-white">
				<div className="logo"><Link href="/"><Image src="/logo.png" width={99} height={35} alt='' /></Link></div>
				<div className="menu">
					<button className="block text-2xl text-black md:hidden" onClick={()=>{ setMenu( menu !== 'hidden' ? 'hidden' : '' )}}>
						{menu !== 'hidden' ? <i className="fa-solid fa-xmark"></i> :	<i className="fa-solid fa-bars"></i>	}
					</button>
					<ul className={`pt-2 pb-8 text-center ${menu}
							bg-white
							text-gray-600
							absolute inset-x-0 top-full z-10
							flex flex-col gap-4
							shadow-md
							md:py-0 md:flex md:relative	md:flex-row	md:shadow-none md:gap-0
						`}>
						<NavItem href="#tech">Technológiák</NavItem>
						<NavItem href="#about">Rólam</NavItem>
						<NavItem href="#portfolio">Portfolió</NavItem>
						<NavItem href="#contact" className="border-2 hover:bg-weart-500 hover:text-white border-weart-500">Kapcsolat</NavItem>
					</ul>
				</div>
			</div>
		</nav>
	)
}
