'use client'
import React from "react";

const NavBar = () => {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav className="relative lg:py-12 pt-[32px] pb-[29px] px-[6%] bg-[#F9F9F9]">
				<div className="w-full flex flex-col lg:flex-row">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<div className="flex flex-row items-center">
							<img src="/assets/images/icons/material-symbols_fast-forward-rounded.png" className="h-6" alt="" width={'24px'} />
							<a
								className="font-satoshi lg:text-[24px] text-[16px] font-[500] leading-relaxed inline-block mr-4 py-2"
								href="#pablo"
							>
								FinanceFast
							</a>
						</div>
						<button
							className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M3.75 6.75H20.25M3.75 12H20.25M3.75 17.25H20.25" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</button>
					</div>
					<div
						className={
							"lg:flex flex-grow items-center justify-center" +
							(navbarOpen ? " flex" : " hidden")
						}
						id="example-navbar-danger"
					>
						<ul className="flex flex-col gap-5 lg:gap-0 items-start lg:flex-row list-none lg:ml-auto lg:items-center">
							<li className="nav-item mx-[22px]">
								<a
									className="flex items-center text-[#3A3A3A] font-satoshi text-[16px] font-[400]"
									href="#pablo"
								>
									<i className="fab fa-facebook-square text-lg leading-lg opacity-75"></i><span className="ml-2">Blog</span>
								</a>
							</li>
							<li className="nav-item mx-[22px]">
								<a
									className="flex items-center text-[#3A3A3A] font-satoshi text-[16px] font-[400]"
									href="#pablo"
								>
									<i className="fab fa-twitter text-lg leading-lg opacity-75"></i><span className="ml-2">Company</span>
								</a>
							</li>
							<li className="nav-item mx-[22px]">
								<a
									className="flex items-center text-[#3A3A3A] font-satoshi text-[16px] font-[400]"
									href="#pablo"
								>
									<i className="fab fa-pinterest text-lg leading-lg opacity-75"></i><span className="ml-2">Product</span>
								</a>
							</li>
							<li className="nav-item ml-[22px]">
								<button className="bg-[#D8C6FF] rounded-[24px] py-3 px-6 flex flex-row">
									<img src="/assets/images/icons/device-phone-mobile.png" className="w-[24px] h-[24px]"/>
									<span className="font-satoshi text-[#000] text-[18px] font-[500]">Download</span>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default NavBar;