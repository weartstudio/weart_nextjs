'use client'

import Image from "next/image"
import Link from "next/link"
import NavItem from "./NavItem"
import { useState } from "react"
import { BsList, BsXLg, BsGithub } from "react-icons/bs";


export default function Nav() {

	const [menu,setMenu] = useState('hidden')

	return (
		<nav className="w-full px-2 py-4 bg-weart-800 relative">
			<div className="container mx-auto flex flex-wrap items-center justify-between text-white">
				<div className="logo"><Link href="/"><Image src="/logo.png" width={99} height={35} /></Link></div>
				<div className="menu">
					<button className="block md:hidden text-2xl " onClick={()=>{ setMenu( menu !== 'hidden' ? 'hidden' : '' )}}>
						{menu !== 'hidden' ? <BsXLg /> :	<BsList />	}
					</button>
					<ul className={`py-2 text-center ${menu}
							bg-weart-50
							text-gray-600
							absolute inset-x-0 top-full z-10
							shadow-md
							md:text-gray-200
							md:py-0 md:relative	md:flex	md:shadow-none md:bg-transparent
						`}>
						<NavItem href="#">Weboldal készítés</NavItem>
						<NavItem href="#">Egyedi fejlesztés</NavItem>
						<NavItem href="#">Magamról</NavItem>
						<NavItem href="#">Munkáim</NavItem>
						<NavItem href="#">Kapcsolat</NavItem>
					</ul>
				</div>
			</div>
		</nav>
	)
}
