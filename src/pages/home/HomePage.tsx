import { Header } from "../../components/Header";
import { Features } from "../../components/Features";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";
import { HeaderWrapper } from "../../components/HeaderWrapper";
import { HeaderContent } from "../../components/HeaderContent";

export const HomePage = () => {
	return (
		<div>
			<HeaderWrapper>
				<Header />
				<HeaderContent />
			</HeaderWrapper>
			<div className="w-full">
				<Features />
				<Contact />
				<Footer />
			</div>
		</div>
	);
};
