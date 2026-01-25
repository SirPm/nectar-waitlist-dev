import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import { FilledOrangeBtn, FilledWhiteBtn } from "./styled";
import { useEffect, useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

const LINKS: { name: string; url: string }[] = [
	{ name: "Products", url: "#products" },
	{ name: "About", url: "#about" },
	// { name: "Blog", url: "https://nectarng.substack.com" },
	{ name: "Why Us?", url: "#whyUs" },
	{ name: "FAQs", url: "#faq" },
];

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const isMobile = useMediaQuery("(max-width: 768px)");
	const { hash } = useLocation();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	// Prevent scrolling when menu is open
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMenuOpen]);

	return (
		<Wrapper>
			<div className="app-container flex items-center justify-between">
				<LogoWrapper>
					<Link
						to="/"
						onClick={handleScrollToTop}
					>
						{isMobile ? (
							<Logo
								src="/assets/nectar-logo-v2.svg"
								// src="/assets/nectar-logo-1x.png"
								// srcSet="/assets/nectar-logo-2x.png 2x, /assets/nectar-logo-3x.png 3x"
								alt="Nectar's Logo"
							/>
						) : (
							<Logo
								src="/assets/nectar-logo-v2.svg"
								alt="Nectar's Logo"
							/>
						)}
					</Link>
				</LogoWrapper>
				{isMobile ? (
					<MenuBtn
						onClick={toggleMenu}
						aria-label="Menu"
					>
						<img
							src="/assets/menu.svg"
							alt="menu icon"
						/>
					</MenuBtn>
				) : (
					<>
						<div className="flex items-center gap-10 bg-[#FFFFFF1F] py-3 px-6 h-11.5 rounded-[6.25rem]">
							{LINKS.map((link, idx) => {
								const isActive = hash === link.url;
								return (
									<a
										key={idx}
										href={link.url}
										className={`${
											isActive
												? "text-[#f5945c]"
												: "text-white"
										} text-base leading-[1.15rem] font-normal hover:text-[#f5945c]`}
										target={
											link.name === "Blog" ? "_blank" : ""
										}
										rel={`${
											link.name === "Blog"
												? "noopener noreferrer"
												: ""
										}`}
									>
										{link.name}
									</a>
								);
							})}
						</div>
						<a href="#contactUs">
							<FilledOrangeBtn className="flex items-center gap-2">
								Join Waitlist
							</FilledOrangeBtn>
						</a>
					</>
				)}
			</div>
			<MobileNav isOpen={isMenuOpen}>
				<MobileNavLinks>
					<ol>
						{LINKS.map((link, index) => {
							const isActive = hash === link.url;
							return (
								<MobileNavItem key={index}>
									<a
										href={link.url}
										onClick={closeMenu}
										className={`${
											isActive
												? "text-[#f5945c]"
												: "text-white"
										} text-[0.95rem] leading-[1.15rem] font-normal hover:text-[#f5945c]`}
										target={
											link.name === "Blog" ? "_blank" : ""
										}
										rel={`${
											link.name === "Blog"
												? "noopener noreferrer"
												: ""
										}`}
									>
										{link.name}
									</a>
								</MobileNavItem>
							);
						})}
					</ol>
					<MobileNavButton>
						<a href="#contactUs">
							<FilledWhiteBtn className="flex items-center gap-2">
								<span className="text-black font-medium">
									Join the Waitlist.
								</span>
								<img src="/assets/chevron-right.svg" />
							</FilledWhiteBtn>
						</a>
					</MobileNavButton>
				</MobileNavLinks>
			</MobileNav>

			{/* Overlay for when mobile menu is open */}
			<Overlay
				isOpen={isMenuOpen}
				onClick={closeMenu}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	// background-color: #03030399;
	// height: 4.5625rem;
	display: flex;
	align-items: center;
	// position: fixed;
	width: 100%;
	// top: 0;
	padding-top: 3.625rem;
	z-index: 100;
`;

const LogoWrapper = styled.div`
	width: 7.1875rem;
	height: 2.3125rem;
`;

const Logo = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

// Mobile Navigation Components
const MobileNav = styled("aside")<{ isOpen: boolean }>`
	position: fixed;
	top: 0;
	right: 0;
	height: 100vh;
	width: 75vw;
	max-width: 400px;
	background-color: #030303b2;
	box-shadow: -10px 0px 30px -15px rgba(2, 12, 27, 0.7);
	display: flex;
	flex-direction: column;
	padding: 2rem;
	z-index: 20;
	transform: ${(props) =>
		props.isOpen ? "translateX(0)" : "translateX(100%)"};
	transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const MobileNavLinks = styled("nav")`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

const MobileNavItem = styled("li")`
	margin: 1.5rem 0;
	font-size: 1.2rem;
	counter-increment: item;
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const MobileNavButton = styled("div")`
	margin-top: 3rem;
`;

const Overlay = styled("div")<{ isOpen: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #030303b2;
	z-index: 10;
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);
	display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const MenuBtn = styled.button`
	display: none;
	width: 40px;
	height: 40px;
	cursor: pointer;
	background-color: #E65713;
	border: none;
	border-radius: 50%;
	padding: 8px;

	@media screen and (max-width: 768px) {
		display: block;
		position: fixed;
		right: 5.21%;
		z-index: 25;
	}
`;
