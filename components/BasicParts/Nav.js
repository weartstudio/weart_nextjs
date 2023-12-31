'use client'

import Image from "next/image"
import Link from "next/link"
import NavItem from "./NavItem"
import { useState } from "react"


export default function Nav() {

	const [menu,setMenu] = useState('hidden')

	return (
		<nav className="w-full px-2 py-4 border-b-2 border-weart-100 relative">
			<div className="container mx-auto flex flex-wrap items-center justify-between text-white">
				<div className="logo"><Link href="/"><Image src="/logo.png" width={99} height={35} alt='' /></Link></div>
				<div className="menu">
					<button className="block md:hidden text-2xl text-black" onClick={()=>{ setMenu( menu !== 'hidden' ? 'hidden' : '' )}}>
						{menu !== 'hidden' ? <i className="fa-solid fa-xmark"></i> :	<i className="fa-solid fa-bars"></i>	}
					</button>
					<ul className={`py-2 text-center ${menu}
							bg-white
							text-gray-600
							absolute inset-x-0 top-full z-10
							flex flex-col gap-4
							shadow-md
							md:py-0 md:flex md:relative	md:flex-row	md:shadow-none md:gap-0
						`}>
						<NavItem href="#">Miben segítek?</NavItem>
						<NavItem href="#">Magamról</NavItem>
						<NavItem href="#">Munkáim</NavItem>
						<NavItem href="#" className="hover:bg-weart-500 hover:text-white border-2 border-weart-500">Kapcsolat</NavItem>
					</ul>
				</div>
			</div>
		</nav>
	)
}
