import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { FilledWhiteBtn } from "./styled";
import { useEffect, useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

const LINKS: { name: string; url: string }[] = [
	{ name: "Features", url: "#features" },
	{ name: "Contact us", url: "#contactUs" },
	{ name: "Blog", url: "/blog" },
];

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const isMobile = useMediaQuery("(max-width: 768px)");

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	// Prevent scrolling when menu is open
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMenuOpen]);

	return (
		<Wrapper>
			<div className="app-container flex items-center justify-between">
				<LogoWrapper>
					<Link to="/">
						<Logo
							src="/assets/nectar-logo.svg"
							alt="Logo"
						/>
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
						<div className="flex items-center gap-8">
							{LINKS.map((link, idx) => (
								<a
									key={idx}
									href={link.url}
									className="text-white text-[0.95rem] leading-[1.15rem] font-normal"
								>
									{link.name}
								</a>
							))}
						</div>
						<a href="#contactUs">
							<FilledWhiteBtn className="flex items-center gap-2">
								<span className="text-black">
									Join the Waitlist.
								</span>
								<img src="/assets/chevron-right.svg" />
							</FilledWhiteBtn>
						</a>
					</>
				)}
			</div>
			<MobileNav isOpen={isMenuOpen}>
				<MobileNavLinks>
					<ol>
						{LINKS.map((link, index) => (
							<MobileNavItem key={index}>
								<a
									href={link.url}
									onClick={closeMenu}
									className="text-white text-[0.95rem] leading-[1.15rem] font-normal"
								>
									{link.name}
								</a>
							</MobileNavItem>
						))}
					</ol>
					<MobileNavButton>
						<a href="#contactUs">
							<FilledWhiteBtn className="flex items-center gap-2">
								<span className="text-black">
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
	background-color: #03030380;
	height: 4.5625rem;
	display: flex;
	align-items: center;
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 100;
`;

const LogoWrapper = styled.div`
	width: 7.1875rem;
	height: 2.3125rem;
`;

const Logo = styled.img`
	width: 100%;
	height: 100%;
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
	width: 24px;
	height: 24px;
	cursor: pointer;
	background-color: transparent;
	border: none;

	@media screen and (max-width: 768px) {
		display: block;
	}
`;
