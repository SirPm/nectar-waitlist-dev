import { Header } from "../../components/Header";
import { HeaderWrapper } from "../../components/HeaderWrapper";
import { HeaderContent } from "../../components/HeaderContent";
import { EverythingYouNeedToThrive } from "../../components/everything-you-need-to-thrive";
import { IntelligentSolutions } from "../../components/IntelligentSolutions";
import { WhyShouldYouUseNectar } from "../../components/WhyShouldYouUseNectar";
import { Testimonials } from "../../components/Testimonials";
import { EverythingYouNeedToKnow } from "../../components/EverythingYouNeedToKnow";

export const HomePage = () => {
	return (
		<div>
			<HeaderWrapper>
				<Header />
				<HeaderContent />
			</HeaderWrapper>
			<div className="w-full">
				<EverythingYouNeedToThrive />
				<IntelligentSolutions />
				<WhyShouldYouUseNectar />
				<Testimonials />
				<EverythingYouNeedToKnow />
			</div>
		</div>
	);
};
