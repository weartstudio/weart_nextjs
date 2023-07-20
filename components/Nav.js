'use client'

import Image from "next/image"
import Link from "next/link"
import NavItem from "./NavItem"
import { useState } from "react"
import { BsList, BsXLg } from "react-icons/bs";


export default function Nav() {

	const [menu,setMenu] = useState('hidden')

	return (
		<nav className="w-full px-2 py-4 border-b-2 border-weart-100 relative">
			<div className="container mx-auto flex flex-wrap items-center justify-between text-white">
				<div className="logo"><Link href="/"><Image src="/logo.png" width={99} height={35} /></Link></div>
				<div className="menu">
					<button className="block md:hidden text-2xl text-black" onClick={()=>{ setMenu( menu !== 'hidden' ? 'hidden' : '' )}}>
						{menu !== 'hidden' ? <BsXLg /> :	<BsList />	}
					</button>
					<ul className={`py-2 text-center ${menu}
							bg-white
							text-gray-600
							absolute inset-x-0 top-full z-10
							shadow-md
							md:py-0 md:relative	md:flex	md:shadow-none
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
