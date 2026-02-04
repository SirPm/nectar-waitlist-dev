import styled from "@emotion/styled";
import { type PropsWithChildren } from "react";

export const HeaderWrapper = ({ children }: PropsWithChildren) => {
	return (
		<Wrapper>
			<>{children}</>
			<img
				src="/assets/header-footer-left.svg"
				alt="footer left bars"
				className="absolute left-0 bottom-0"
			/>
			<img
				src="/assets/header-footer-right.svg"
				alt="footer right bars"
				className="absolute right-0 bottom-0"
			/>
			<HeaderFooterContent>
				<p className="text-xs sm:text-sm text-white font-medium text-center">
					Nectar is a financial technology company, not a bank.
					Banking services are provided in partnership with licensed
					financial institutions in Nigeria.
				</p>
			</HeaderFooterContent>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	min-height: 100vh;

	&::before {
		position: absolute;
		inset: 0;
		content: "";
		background-image: url("/assets/header-bg.png");
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		z-index: -1;
	}
`;

const HeaderFooterContent = styled.div`
	background: linear-gradient(
		90deg,
		rgba(0, 0, 0, 0.6) 0%,
		rgba(0, 0, 0, 0) 100%
	);
	padding: 24px;
	height: 67px;
	width: 100%;
	position: absolute;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;
