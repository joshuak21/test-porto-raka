import { useState } from 'react'
import NextImage from 'next/image'
import NextLink from 'next/link'

import Styles from './header-style.module.css'

import SidebarBg from '../../public/landing/sidebar-bg.png'

export default function HeaderComponent(): JSX.Element {
	const [sidebar, setSidebar] = useState(false)

	function toggleSidebar(): void {
		setSidebar(!sidebar)
	}

	return (
		<header className="fixed w-full p-[100px] bg-transparent top-0 z-[2] flex justify-end">
			<div className="relative z-[1]">
				<button type="button" onClick={toggleSidebar}>
					<NextImage src="./landing/menu-icon.png" alt="" width={48} height={48} />
				</button>
			</div>
			<div className={`${Styles['sidebar-modal']} ${sidebar ? Styles['show'] : ''}`}>
				<div className={`relative w-full h-full flex justify-end`}>
					<NextImage src={SidebarBg} alt="" className="w-full h-full object-fill absolute z-[1]" />
					<div className="relative z-[2] p-[100px] flex flex-col items-end max-w-[90%]">
						<button type="button" onClick={toggleSidebar}>
							<NextImage src="./landing/close-icon.png" width={48} height={48} alt="" />
						</button>
						<NextLink href="/#portfolio" onClick={toggleSidebar} className={`text-[#505050] text-[4em] flex flex-row ${Styles['header-content']}`}>
							<i className="uil uil-arrow-down-right leading-[1] w-0 overflow-hidden opacity-0" />
							<p className="leading-[1] w-auto text-left">PORTFOLIO</p>
							<p className={Styles['header-content-subtitle']}>Selected works of<br />mine</p>
						</NextLink>
						<div className="w-[80px] h-[2px] bg-[#505050] my-[1.25em] mr-[64px]" />
						<NextLink href="/#personal-info" scroll={false} onClick={toggleSidebar} className={`text-[#505050] text-[4em] flex flex-row ${Styles['header-content']}`}>
							<i className="uil uil-arrow-down-right leading-[1] w-0 overflow-hidden opacity-0" />
							<p className="leading-[1] w-auto text-left">PERSONAL INFO</p>
							<p className={Styles['header-content-subtitle']}>Get to know me<br />better</p>
						</NextLink>
						<button type="button" onClick={toggleSidebar} className={`text-[#505050] text-[4em] flex flex-row ${Styles['header-content']}`}>
							<i className="uil uil-arrow-down-right leading-[1] w-0 overflow-hidden opacity-0" />
							<p className="leading-[1] w-auto text-left">EXPERIENCE</p>
							<p className={Styles['header-content-subtitle']}>Working experiences<br />&amp; others</p>
						</button>
						<button type="button" onClick={toggleSidebar} className={`text-[#505050] text-[4em] flex flex-row ${Styles['header-content']}`}>
							<i className="uil uil-arrow-down-right leading-[1] w-0 overflow-hidden opacity-0" />
							<p className="leading-[1] w-auto text-left">CONTACTS</p>
							<p className={Styles['header-content-subtitle']}>Get in touch<br />with me</p>
						</button>
						<div className="w-[80px] h-[2px] bg-[#505050] my-[1.25em] mr-[64px]" />
					</div>
				</div>
			</div>
		</header>
	)
}