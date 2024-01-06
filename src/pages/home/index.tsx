import { useState } from 'react'
import NextImage from 'next/image'

import Styles from './style.module.css'
import HeaderComponent from '@/components/header'

export default function HomePage(): JSX.Element {
	const [state, setState] = useState({
		isClicked: false
	})

	function toggleStartButton(): void {
		setState({ isClicked: true })
	}

	return (<>
		<HeaderComponent />
		<main>
			<section id="banner" className={`w-full h-full min-h-[100vh] relative bg-[#000000] ${Styles['banner-section']}`}>
				<div className="flex flex-row justify-between items-center relative z-[1] p-[100px]">
					<p className="text-white text-[1.5em]">Greetings!</p>
				</div>
				<div className={`absolute top-0 left-0 w-full h-full flex flex-row items-center justify-center ${Styles['banner-content']}`}>
					<button onClick={toggleStartButton} type="button" className={`${Styles['button']} ${state.isClicked ? Styles['clicked'] : ''}`}>
						<div className={Styles['line']} />
						<span className={Styles['button-txt']}>Start Here</span>
						<div className={Styles['line']} />
					</button>
				</div>
			</section>
			{state.isClicked && (<>
				<section id="porto-section" className="w-full h-full min-h-[100vh] bg-[#000000]">
					<p className="text-white text-[5em] font-bold">Portfolio Sections</p>
				</section>
			</>)}
		</main>
	</>)
}
