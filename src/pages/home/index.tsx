import { useState, useRef } from 'react'
import NextImage from 'next/image'

import HeaderComponent from '@/components/header'
import HeadingComponent from '@/components/heading'

import Styles from './style.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-creative'
import 'swiper/css/navigation'

import ContentBGSection from '../../../public/landing/bg-content-section.png'
import PersonalBGSection from '../../../public/landing/personal-bg-section.png'

import PortfolioContentBG from '../../../public/landing/portfolio/content-bg.png'

import MortalShell from '../../../public/landing/portfolio/digital/Mortal-Shell.png'
import BetterLeftUnknown from '../../../public/landing/portfolio/digital/Better-Left-Unknown.png'
import NotYourTypeofPerson from '../../../public/landing/portfolio/digital/Not-Your-Type-of-Person.png'
import SLFLSS from '../../../public/landing/portfolio/digital/SLFLSS.png'

import ArtworkMortalShell from '../../../public/landing/portfolio/artwork/mortal-shell.png'
import Blu1 from '../../../public/landing/portfolio/artwork/blu-1.png'
import Blu2 from '../../../public/landing/portfolio/artwork/blu-2.png'
import Blu3 from '../../../public/landing/portfolio/artwork/blu-3.png'
import Blu4 from '../../../public/landing/portfolio/artwork/blu-4.png'
import Blu5 from '../../../public/landing/portfolio/artwork/blu-5.png'
import ArtworkNotYourType from '../../../public/landing/portfolio/artwork/not-your-type.png'
import ArtworkSLFLSS from '../../../public/landing/portfolio/artwork/slflss.png'

export default function HomePage(): JSX.Element {
	const [state, setState] = useState({
		isClicked: false,
	})
	const [index, setIndex] = useState(0)
	const [showModalArtworks, setShowModalArtworks] = useState(false)
	const swiperMainRef = useRef()

	function toggleStartButton(): void {
		setState({ isClicked: true })
	}

	function openModalArtworks(idx: number): void {
		const body: HTMLBodyElement = document.getElementsByTagName('body')[0]
		body.style.overflow = 'hidden'
		swiperMainRef?.current?.slideTo(idx)
		setIndex(idx)
		setShowModalArtworks(true)
	}

	function hideModalArtworks(): void {
		const body: HTMLBodyElement = document.getElementsByTagName('body')[0]
		body.removeAttribute('style')
		setShowModalArtworks(false)
	}

	function prevSlide(): void {
		const newIndex: number = index - 1
		setIndex(newIndex)
		swiperMainRef?.current?.slidePrev()
	}

	function nextSlide(): void {
		const newIndex: number = index + 1
		setIndex(newIndex)
		swiperMainRef?.current?.slideNext()
	}

	return (<>
		<HeadingComponent />
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
			{/* {state.isClicked && (<> */}
			<div className="flex flex-row items-center justify-center py-[10em]">
				<div className="w-[100px] h-[2px] bg-[#505050]" />
				<p className="uppercase text-white mx-[1.25em] text-center">I would never be a master, but forever a learner</p>
				<div className="w-[100px] h-[2px] bg-[#505050]" />
			</div>

			<section id="personal-info" className={Styles['personal-info-section']}>
				<NextImage src={ContentBGSection} alt="" className="w-full h-full" />
				<div className="p-[1em] bg-[#171717]">
					<div className="flex flex-col max-w-[calc(1400px+2em)] mx-auto px-[2em]">
						<div className="w-full flex flex-row justify-end">
							<i className="uil uil-arrow-down-right text-white text-[64px] leading-[1]" />
							<p className="text-white text-[64px] leading-[1]">Personal Info</p>
							<p className="text-white text-[20px] h-max leading-[1] ml-[1em] pl-[1em] border-l-[1px] border-[#FFFFFF]">Get to know me<br />better</p>
						</div>

						<div className="flex flex-col w-full mt-[2em]">
							<NextImage src={PersonalBGSection} alt="" className="w-full h-full" />
							<div className="p-[2em] bg-[#0B0B0B] border-l-[2px] border-r-[2px] border-[#959595]">
								<p className="text-white text-[3em] font-[700] uppercase">My Full Name Here</p>
								<p className="text-white text-[1.25em] uppercase">Graphic Designer</p>

								<p className="text-white text-[3em] font-[700] uppercase">My Full Name Here</p>
								<p className="text-white text-[1.25em] uppercase">Graphic Designer</p>

								<p className="text-white text-[3em] font-[700] uppercase">My Full Name Here</p>
								<p className="text-white text-[1.25em] uppercase">Graphic Designer</p>

								<p className="text-white text-[3em] font-[700] uppercase">My Full Name Here</p>
								<p className="text-white text-[1.25em] uppercase">Graphic Designer</p>
							</div>
							<NextImage src={PersonalBGSection} alt="" className="w-full h-full rotate-180" />
						</div>
					</div>
				</div>
				<NextImage src={ContentBGSection} alt="" className="w-full h-full rotate-180" />
			</section>
			<div className={Styles['divider-section']}>
				<div className={`flex flex-row items-center justify-center ${Styles['divider-inner-content']}`}>
					<div className="w-[100px] h-[2px] bg-[#505050]" />
					<p className="uppercase text-white mx-[1.25em] text-center">I would never be a master, but forever a learner</p>
					<div className="w-[100px] h-[2px] bg-[#505050]" />
				</div>
			</div>
			<section id="portfolio" className={Styles['portfolio-section']}>
				<NextImage src={ContentBGSection} alt="" className="w-full h-full" />
				<div className="p-[1em] bg-[#171717]">
					<div className="flex flex-col max-w-[calc(1400px+2em)] mx-auto px-[2em]">
						<div className="w-full flex flex-row justify-end">
							<i className="uil uil-arrow-down-right text-white text-[64px] leading-[1]" />
							<p className="text-white text-[64px] leading-[1] font-bold uppercase">Portfolio</p>
							<p className="text-white text-[20px] h-max leading-[1] ml-[1em] pl-[1em] border-l-[1px] border-[#FFF]">Digital<br />Illustartion</p>
						</div>

						<div className={`w-full mt-[2em] grid auto-cols-max ${Styles['contents-grid']}`}>
							<div onClick={(): void => openModalArtworks(0)} className="flex w-full h-full cursor-pointer">
								<NextImage src={MortalShell} alt="Mortal Shell" className="w-full h-full" />
							</div>
							<div onClick={(): void => openModalArtworks(1)} className="flex w-full h-full cursor-pointer">
								<NextImage src={BetterLeftUnknown} alt="Mortal Shell" className="w-full h-full" />
							</div>
							<div onClick={(): void => openModalArtworks(2)} className="flex w-full h-full cursor-pointer">
								<NextImage src={NotYourTypeofPerson} alt="Mortal Shell" className="w-full h-full" />
							</div>
							<div onClick={(): void => openModalArtworks(3)} className="flex w-full h-full cursor-pointer">
								<NextImage src={SLFLSS} alt="Mortal Shell" className="w-full h-full" />
							</div>
						</div>
					</div>
				</div>
				<NextImage src={ContentBGSection} alt="" className="w-full h-full rotate-180" />

				<div className={`fixed top-0 left-0 bg-[rgba(0,0,0,.75)] w-full h-full z-[999] flex items-center justify-center ${Styles['modal-artworks']} ${showModalArtworks ? Styles['show'] : ''}`}>
					<div className="flex max-w-[1200px] mx-auto">
						<Swiper grabCursor={false} allowTouchMove={false} effect="creative" slidesPerView={1} spaceBetween={24} creativeEffect={{
							prev: { shadow: true, translate: [0, 0, -400] },
							next: { translate: ['100%', 0, 0] }
						}} modules={[EffectCreative]} onSwiper={(swiper: any) => { swiperMainRef.current = swiper }}>
							<SwiperSlide>
								<div className={`flex flex-row w-full h-full max-h-[600px] relative ${Styles['swiper-content']}`}>
									<div className="w-[65%]">
										<NextImage src={ArtworkMortalShell} alt="Mortal Shell" className="w-full h-full object-cover" />
									</div>
									<div className="flex flex-col justify-center px-[2em] w-[35%]">
										<div className="flex flex-col gap-[10px]">
											<p className="Mersad text-white text-[2em]">Mortal Shell</p>
											<p className="text-white text-[12px] font-[600]">2023<span className="font-[300] ml-[10px] text-[#A1A1A1]">October 16</span></p>
											<div className="flex flex-col">
												<p className="text-[#A1A1A1] text-[12px]">They had waited; as their heir scream.</p>
												<p className="text-[#A1A1A1] text-[12px]">They had planted the seed; for it, they create.</p>
												<p className="text-[#A1A1A1] text-[12px]">But we did not scream; we won&apos;t</p>
												<p className="text-[#A1A1A1] text-[12px]">But we did not wait; for they didn&apos;t take while we grow.</p>
											</div>
											<div className="flex flex-row justify-around mt-[5em]">
												<button type="button" onClick={prevSlide} disabled={index === 0} className="py-[.625em] px-[2em] bg-[#D9D9D9] rounded-[2px] disabled:bg-[#A1A1A1] hover:bg-[#A1A1A1]">
													<span>Previous</span>
												</button>
												<button type="button" onClick={nextSlide} disabled={index === 2} className="py-[.625em] px-[2em] bg-[#D9D9D9] rounded-[2px] disabled:bg-[#A1A1A1] hover:bg-[#A1A1A1]">
													<span>Next</span>
												</button>
											</div>
										</div>
									</div>
									<button type="button" onClick={hideModalArtworks} className="fixed top-[3em] right-[4em]">
										<NextImage src="./landing/close-icon.png" width={30} height={30} alt="" />
									</button>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={`flex flex-row w-full h-full max-h-[600px] relative ${Styles['swiper-content']} !px-[2em]`}>
									<div className="w-[65%]">
										<Swiper slidesPerView={1.25} modules={[Navigation]} navigation={true} centeredSlides={true} loop={true} className="h-full swiper-white-navigation">
											<SwiperSlide>
												<div className="flex w-full h-full select-none">
													<NextImage src={Blu1} alt="Better Left Unknown - 1" className="w-full h-full object-cover" />
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="flex w-full h-full select-none">
													<NextImage src={Blu2} alt="Better Left Unknown - 2" className="w-full h-full object-cover" />
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="flex w-full h-full select-none">
													<NextImage src={Blu3} alt="Better Left Unknown - 3" className="w-full h-full object-cover" />
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="flex w-full h-full select-none">
													<NextImage src={Blu4} alt="Better Left Unknown - 4" className="w-full h-full object-cover" />
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="flex w-full h-full select-none">
													<NextImage src={Blu5} alt="Better Left Unknown - 5" className="w-full h-full object-cover" />
												</div>
											</SwiperSlide>
										</Swiper>
									</div>
									<div className="flex flex-col justify-center px-[2em] w-[35%]">
										<div className="flex flex-col gap-[10px]">
											<p className="Mersad text-white text-[2em]">Better Left Unkown</p>
											<p className="text-white text-[12px] font-[600]">2023<span className="font-[300] ml-[10px] text-[#A1A1A1]">October 29</span></p>
											<div className="flex flex-col">
												<p className="text-[#A1A1A1] text-[12px]">My sweet sweet void; my half and beloved one, I miss you, even when we were entangled as one. Abandoned consciousness and crippled bones of mine, a relieved goodbye I send. As for now, I would love to let this self be devoured by my love, my void.</p>
											</div>
											<div className="flex flex-row justify-around mt-[5em]">
												<button type="button" onClick={prevSlide} disabled={index === 0} className="py-[.625em] px-[2em] bg-[#D9D9D9] rounded-[2px] disabled:bg-[#A1A1A1] hover:bg-[#A1A1A1]">
													<span>Previous</span>
												</button>
												<button type="button" onClick={nextSlide} disabled={index === 3} className="py-[.625em] px-[2em] bg-[#D9D9D9] rounded-[2px] disabled:bg-[#A1A1A1] hover:bg-[#A1A1A1]">
													<span>Next</span>
												</button>
											</div>
										</div>
									</div>
									<button type="button" onClick={hideModalArtworks} className="fixed top-[3em] right-[4em]">
										<NextImage src="./landing/close-icon.png" width={30} height={30} alt="" />
									</button>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={`flex flex-row w-full h-full max-h-[600px] relative ${Styles['swiper-content']}`}>
									<div className="w-[65%]">
										<NextImage src={ArtworkNotYourType} alt="Mortal Shell" className="w-full h-full object-cover" />
									</div>
									<div className="flex flex-col justify-center px-[2em] w-[35%]">
										<div className="flex flex-col gap-[10px]">
											<p className="Mersad text-white text-[2em]">Not Your Type</p>
											<p className="text-white text-[12px] font-[600]">2023<span className="font-[300] ml-[10px] text-[#A1A1A1]">February 28</span></p>
											<div className="flex flex-col">
												<p className="text-[#A1A1A1] text-[12px]">Cras ornare dui ac orci sollicitudin, ac vehicula leo malesuada. Aliquam quis lorem est. Ut vel consequat elit, eget volutpat arcu. Mauris id justo ac elit viverra laoreet ut non turpis. Vestibulum lorem lectus, ultrices vitae tellus vel, vulputate efficitur erat.</p>
											</div>
											<div className="flex flex-row justify-around mt-[5em]">
												<button type="button" onClick={prevSlide} disabled={index === 0} className="py-[.625em] px-[2em] bg-[#D9D9D9] rounded-[2px] disabled:bg-[#A1A1A1] hover:bg-[#A1A1A1]">
													<span>Previous</span>
												</button>
												<button type="button" onClick={nextSlide} disabled={index === 3} className="py-[.625em] px-[2em] bg-[#D9D9D9] rounded-[2px] disabled:bg-[#A1A1A1] hover:bg-[#A1A1A1]">
													<span>Next</span>
												</button>
											</div>
										</div>
									</div>
									<button type="button" onClick={hideModalArtworks} className="fixed top-[3em] right-[4em]">
										<NextImage src="./landing/close-icon.png" width={30} height={30} alt="" />
									</button>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={`flex flex-row w-full h-full max-h-[600px] relative ${Styles['swiper-content']}`}>
									<div className="w-[65%]">
										<NextImage src={ArtworkSLFLSS} alt="Mortal Shell" className="w-full h-full object-cover" />
									</div>
									<div className="flex flex-col justify-center px-[2em] w-[35%]">
										<div className="flex flex-col gap-[10px]">
											<p className="Mersad text-white text-[2em]">SLFLSS.</p>
											<p className="text-white text-[12px] font-[600]">2023<span className="font-[300] ml-[10px] text-[#A1A1A1]">October 23</span></p>
											<div className="flex flex-col">
												<p className="text-[#A1A1A1] text-[12px]">I had set myself on fire for you.</p>
												<p className="text-[#A1A1A1] text-[12px]">I had arranged my own funeral for you.</p>
												<p className="text-[#A1A1A1] text-[12px]">I had lost myself just for you.</p>
											</div>
											<div className="flex flex-row justify-around mt-[5em]">
												<button type="button" onClick={prevSlide} disabled={index === 0} className="py-[.625em] px-[2em] bg-[#D9D9D9] rounded-[2px] disabled:bg-[#A1A1A1] hover:bg-[#A1A1A1]">
													<span>Previous</span>
												</button>
												<button type="button" onClick={nextSlide} disabled={index === 3} className="py-[.625em] px-[2em] bg-[#D9D9D9] rounded-[2px] disabled:bg-[#A1A1A1] hover:bg-[#A1A1A1]">
													<span>Next</span>
												</button>
											</div>
										</div>
									</div>
									<button type="button" onClick={hideModalArtworks} className="fixed top-[3em] right-[4em]">
										<NextImage src="./landing/close-icon.png" width={30} height={30} alt="" />
									</button>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</section>
			{/* </>)} */}
		</main>
	</>)
}
