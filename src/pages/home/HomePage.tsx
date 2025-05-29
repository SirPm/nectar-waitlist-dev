import styled from "@emotion/styled";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Features } from "../../components/Features";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";
import { useInView } from "../../hooks/useInView";

export const HomePage = () => {
	const { ref, isInView } = useInView<HTMLDivElement>({
		threshold: 0.1, // Trigger when 10% is visible
	});
	return (
		<div>
			<FirstBgWrapper ref={ref}>
				<Header />
				<Hero />
			</FirstBgWrapper>
			<SecondBgWrapper $isinView={!isInView}>
				<Features />
				<Contact />
				<Footer />
			</SecondBgWrapper>
		</div>
	);
};

export const FirstBgWrapper = styled.div`
	position: relative;
	width: 100%;

	&::before {
		content: "";
		position: fixed;
		inset: 0;
		background-image: url("/assets/bg.webp");
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		z-index: -1;
	}
`;

const SecondBgWrapper = styled.div<{ $isinView: boolean }>`
	position: relative;
	width: 100%;

	&::before {
		content: "";
		position: fixed;
		opacity: ${({ $isinView }) => ($isinView ? 1 : 0)};
		transition: opacity 0.5s ease;
		inset: 0;
		background-image: url("/assets/bg.webp");
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		transform: scaleY(-1);
		z-index: -1;
	}
`;
