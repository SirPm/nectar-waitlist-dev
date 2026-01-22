import styled from "@emotion/styled";

export const Btn = styled.button`
	width: fit-content;
	border: none;
	outline: none;
	height: 2.4375rem;
	padding: 0.625rem 1rem;
	border-radius: 0.75rem;
	cursor: pointer;
`;

export const FilledWhiteBtn = styled(Btn)`
	// border: 1px solid;
	// border-image-source: linear-gradient(
	// 	90deg,
	// 	rgba(28, 28, 30, 0) 0%,
	// 	#ffdcc3 50%,
	// 	rgba(28, 28, 30, 0) 100%
	// );
	background-color: #ffffff;
	color: #000000;
	font-weight: 500;
	font-size: 0.95rem;
	line-height: 1.15rem;
`;

export const DynamicFilledWhiteBtn = styled(Btn)`
	height: 3rem;
	padding: 0.625rem 0.5rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	background-color: #ffffff;
	color: #000000;
	font-weight: 500;
	width: 100%;

	&:disabled {
		opacity: 30%;
		cursor: not-allowed;
	}
`;

export const FilledOrangeBtn = styled(Btn)`
	box-shadow: 0px 4px 4px 0px #ffffff40 inset;
	padding: 12px 24px;
	height: 48px;
	background-color: #E65713;
	color: #FFFFFF;
	border-radius: 16px;
`;
